const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const Entry = require('./model.js').entry;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
}

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
})

router
    .post('/',function(req, res) {
      console.log(req.body);
      res.json({message: 'response registered'})
    })

router.route('/entries')
  .post(function(req, res) {
    console.log(req.body)
    var entry = new Entry();
    entry.body = req.body.body;
    entry.title = req.body.title;

    entry.save(function(err, savedEntry, c) {
      if (err) res.send(err);
      res.json({ message: 'Entry created!', savedEntry });
    })
  })

  .get((req, res) => {
  Entry.find((err, entries) => {
    if(err){
      res.send(err);
    } else {
      res.json(entries)
    }
  })
})

router.route('/entries/:entry_id')
  .get((req, res) => {
    console.log('find one route')
    Entry.findById(req.params.entry_id, (err, entry) => {
      if(err){
        res.send(err);
      } else {
        res.json(entry)
      }
    })
  })

  .delete((req, res) => {
    Entry.findById(req.params.entry_id, (err, entry) => {
      if(err) {
        res.send(err);
      } else {
        entry.remove()
        res.json({ message: 'Entry deleted!' });
      }
    })
  })


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
