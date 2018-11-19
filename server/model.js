const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateFormat = require('dateformat')

const EntrySchema = new Schema({
  title: String,
  body: String,
  user: {type: Schema.Types.ObjectId, ref: 'user'},
  createdAt: String,
  modifiedAt: String
})

EntrySchema.pre('save', function(next) {
  let date = new Date()
  if (this.isNew) {
    this.createdAt = dateFormat(date, "dddd, mmmm dS, yyyy")
  } else {
    this.modifiedAt = dateFormat(date, "dddd, mmmm dS, yyyy")
  }
  return next()
})

module.exports = {
   entry: mongoose.model('entry', EntrySchema),

 }
