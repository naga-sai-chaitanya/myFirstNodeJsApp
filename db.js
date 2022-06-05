const { ConnectionClosedEvent } = require('mongodb')
const mongoose = require('mongoose')

const { Schema } = mongoose;


mongoose.connect('mongodb+srv://235689:235689@cluster0.2x4ym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
                  .then(data => console.log('Connected to MongoDB...'))
                  .catch((err)=> console.log('Error in connect'))



const bookSchema = new Schema({
    bookTitle : String,
    language: String,
    genre: String,
    price:Number,
    bookSrcPath: String
})

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;



