

fetch('http://localhost:5555/books')
                                    .then(res => res.json())
                                    .then(data => {
                                        for(var i=0;i<data.length;i++){
                                            const {bookTitle,genre,language,price,bookSrcPath} = data[i];
                                            const book_data = [bookTitle,genre,language,price,bookSrcPath]
                                            const myDiv = document.getElementById('content');

                                            const micro_div = document.createElement('div')
                                            const myImage = document.createElement('img')
                                            myImage.src = `./public/images/${bookSrcPath}`;
                                            micro_div.appendChild(myImage)
                                            for(var j=0;j<4;j++){
                                                const strng_ele = document.getElementById('strong')
                                                
                                                const p_ele = document.createElement('p');
                                                p_ele.textContent = book_data[j]
                                               
                                                micro_div.appendChild(p_ele)
                                                
    
                                            }
                                            const btn_ele = document.createElement('button')
                                            

                                            myDiv.appendChild(micro_div)
                                            

                                            }
                                    })
                                    .catch((err)=>console.log(err))
document.getElementById('filters-btn').onclick = (e) => {
    const tlg_chkd = document.getElementById('telugu').checked;
    const eng_chkd = document.getElementById('english').checked;
    const hnd_checked = document.getElementById('hindi').checked;
    const sprt_checked = document.getElementById('spirituality').checked;
    const fctn_checked  = document.getElementById('fiction').checked;
    const biogr_checked = document.getElementById('biography').checked;
    const self_help_checked = document.getElementById('self-help').checked;
 
    var language = "";
    if(tlg_chkd){
        language = 'Telugu'
        document.getElementById('content').innerHTML = ""; 
        languageSort(language)
        
    }
    else if(eng_chkd){
        language = 'English'
        document.getElementById('content').innerHTML = "";
        languageSort(language)
    }
    else if(hnd_checked){
        language = 'hindi'
        document.getElementById('content').innerHTML = "";
        languageSort(language)
    }
    var genre = ""
    if(sprt_checked){
        genre = "spirituality"
        document.getElementById('content').innerHTML = "";
        genreSort(genre)
    }
    else if(fctn_checked){
        genre = "finction"
        document.getElementById('content').innerHTML = "";
        genreSort(genre)
    }
    else if(biogr_checked){
        genre = "biography"
        document.getElementById('content').innerHTML = "";
        genreSort(genre)
    }
    else if(self_help_checked){
        genre = "self help"
        document.getElementById('content').innerHTML = "";
        genreSort(genre)
    }
}



    
const languageSort = (language) => {
    fetch(`http://localhost:5555/book/${language}`)
                                                .then(res => res.json())
                                                .then(data => {
                                                    
                                                        for(var i=0;i<data.length;i++){
                                                        const {bookTitle,genre,language,price,bookSrcPath} = data[i];
                                                        const book_data = [bookTitle,genre,language,price,bookSrcPath]
                                                        const myDiv = document.getElementById('content');
            
                                                        const micro_div = document.createElement('div')
                                                        const myImage = document.createElement('img')
                                                        myImage.src = `./public/images/${bookSrcPath}`
                                                        micro_div.appendChild(myImage)
                                                        for(var j=0;j<4;j++){
                                                            const p_ele = document.createElement('p');
                                                            p_ele.textContent = book_data[j]
                                                            micro_div.appendChild(p_ele)
                
                                                        }
                                                        myDiv.appendChild(micro_div)
            
                                                        }

                                                    })
                                                    .catch(err => console.log(err))
}
   

const genreSort = (genre) => {
    fetch(`http://localhost:5555/book/genre/${genre}`)
                                                .then(res => res.json())
                                                .then(data => {
                                                        for(var i=0;i<data.length;i++){
                                                            const {bookTitle,genre,language,price,bookSrcPath} = data[i];
                                                            const book_data = [bookTitle,genre,language,price,bookSrcPath]
                                                        const myDiv = document.getElementById('content');
            
                                                        const micro_div = document.createElement('div')
                                                        const myImage = document.createElement('img')
                                                        myImage.src = `./public/images/${bookSrcPath}`
                                                        micro_div.appendChild(myImage)
                                                        for(var j=0;j<4;j++){
                                                            const p_ele = document.createElement('p');
                                                            p_ele.textContent = book_data[j]
                                                            micro_div.appendChild(p_ele)
                
                                                        }
                                                        myDiv.appendChild(micro_div)
            
                                                        }

                                                    })
                                                    .catch(err => console.log(err))
}
    
    
    
