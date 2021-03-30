const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/chatapp?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/ChatingApp'); 
    // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false });

//Schema
const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    message:String,
    image:String,
    // date:Date,
    date:{type:Date , default:Date.now},
    room:String
});

//Model
var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;