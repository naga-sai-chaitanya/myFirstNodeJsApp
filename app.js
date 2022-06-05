const Book = require('./db')
const express = require('express')
const app = express();

const path = require('path')
const fs = require('fs')
const multer = express('multer')


const imagesPath = path.join(__dirname, 'public','images');



fs.readdir(imagesPath,(err,files) => {
    if(err){
        console.error(err)
    }
    console.log(files);
})

app.post('/book',(req,res)=>{
    const data = [{
        bookTitle:"7 habits of highly successful people",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "7-habits-of-highly-effective-people-186x300.jpg"
    },
    {
        bookTitle:"draupadi",
        language: "English",
        genre:"fiction",
        price:500,
        bookSrcPath: "Draupadi600.jpg"
    },
    {
        bookTitle:"eat pray live",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "Eat-Pray-Love-by-Elizabeth-Gilbert.jpeg"
    },
    {
        bookTitle:"My Experiments with truth",
        language: "English",
        genre:"autobiography",
        price:500,
        bookSrcPath: "gandhi-auto.jpg"
    },
    {
        bookTitle:"The magic of thinking big",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "images-191x300.png"
    },
    {
        bookTitle:"Kids book",
        language: "English",
        genre:"kids",
        price:1000,
        bookSrcPath: "kids-books.jpg"
    },
    {
        bookTitle:"Kids book2",
        language: "English",
        genre:"kids",
        price:1000,
        bookSrcPath: "kids2.jpg"
    },
    {
        bookTitle:"Kids book3",
        language: "English",
        genre:"kids",
        price:500,
        bookSrcPath: "kids3.jpg"
    },
    {
        bookTitle:"The power of subconcisous mind",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "power-of-subconsious-mind-196x300.jpg"
    },
    {
        bookTitle:"Redramadevi",
        language: "Telugu",
        genre:"fiction",
        price:500,
        bookSrcPath: "Rudramadevi600.jpg"
    },
    {
        bookTitle:"Ramakrishna prabha",
        language: "Telugu",
        genre:"spirituality",
        price:500,
        bookSrcPath: "SriRamakrishnaPrabhaFebruary2019600.jpg"
    },
    {
        bookTitle:"The Alchemist",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "The-Alchemist-by-Paulo-Coelho.jpg"
    },
    {
        bookTitle:"The Art of happiness",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "The-Art-of-Happiness-Dalai-Lama-and-Howard-C-Cutler.jpg"
    },
    {
        bookTitle:"The Secret",
        language: "English",
        genre:"self help",
        price:500,
        bookSrcPath: "The-Secret-by-Rhonda-Byrne.jpg"
    },
    {
        bookTitle:"Auto Biography of a Yogi",
        language: "English",
        genre:"autobiograhy",
        price:500,
        bookSrcPath: "yogi-autobiography.png"
    },
    
    
    ]
    Book.insertMany(data,(err,stored)=>{
        if(err){
            console.error(err)
        }
        res.send(stored)
    })
    
    
})




const cors = require('cors')

app.use('/public',express.static(__dirname + '/public'))

//Home Page Route
app.get('/', cors() ,(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


//To fetch all books
app.get('/books',(req,res)=>{
    Book.find({},(err,data)=>{
        if(err){
            console.log(err)
        }
        
        
        res.send(data)
    })
})



app.get('/book/genre/:usergenre', async(req, res)=>{
    const genre = req.params.usergenre;
    const books = await Book.find({
        "genre":genre
    })
    res.send(books)
})


//To query a specific book
app.get('/book/:lang', async(req,res)=>{
   const lang = req.params.lang;
   console.log(lang)
    
    console.log('got request to get book');
    const books = await Book.find({
        "language":lang
    })
    res.send(books)
})

//Multplie queries

app.get('/book/:queries', (req, res) => {
    Book.find({
        
            genre:'self help' , language:'T'
        
    },(err,found)=>{
        if(err){
            console.error(err)
        }
        res.send(found);
    })
})



//To delete all books
app.delete('/books',(req,res)=>{
    Book.deleteMany({},(err,data)=>{
        if(err){
            console.log(err)
        }
        res.send(data);
    })
})

//Implementing filters

app.get('/implement_filtes',(req,res)=>{
    Book.find({})
                .sort({bookTitle:-1})
                .limit(3)
                //.select({price:0})
                .exec((err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    res.send(data)
                })
})








const port = process.env.port || 5555;
//Port
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server running on port ${port}`);
})


