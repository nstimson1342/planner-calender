const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  type: String,
  title: String,
  body: String,
  createdAt: Date,
  modifiedAt: Date

})

EntrySchema.pre('save', function(next) {
  if (this.isNew) {
    this.createAt = new Date()
  } else {
    this.modifiedAt = new Date()
  }
  return next()
})

module.exports = {
   entry: mongoose.model('entry', EntrySchema),
 }
