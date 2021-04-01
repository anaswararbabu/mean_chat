const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ChatingApp'); 
   

//Schema
const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    message:String,
    image:String,
  
    date:{type:Date , default:Date.now},
    room:String
});

//Model
var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;
