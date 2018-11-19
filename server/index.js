const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
var Entry = require('./app/server/model.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
})

router.route('/entry')
.post(function(req, res) {

  var entry = new Entry();
  entry.name = req.body.name;

  entry.save(function(err) {
    if (err)
      res.send(err);


    res.json({ message: 'Entry created!' });
  })
})
.get(function(req, res) {
  Entry.find(function(err, entries) {
    if(err)
        res.send(err);
  })
})

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
