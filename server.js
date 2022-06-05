const mongoose = require('mongoose')
const express = require('express')


const app = express()


mongoose.connect('mongodb+srv://235689:235689@cluster0.2x4ym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
                    .then(()=>{console.log('connected.')})
                    .catch((err)=>console.log(err))


const {Schema} = mongoose;

const blogPost = new Schema({
    title:String,
    tags:[String]
})

const BlogPost = mongoose.model('BlogPost',blogPost)



BlogPost.find({})
               .select('tags')
               .sort('title')
               
               .exec((err,data)=>{
                     if(err){
                         console.log(err)
                     }
                     var count = 0;
                     while (count < data.length){
                         if('author' in data[count].tags){
                             
                             console.log(data[count])
                         }
                         console.log(data[count].tags)
                         count++;
                     }
                     
                    // for(var i=0;i<data.length;i++){
                    //     console.log(data[i])
                    // }
                     
                     
                 })





app.listen(5624,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('server runing in 5624')
})




