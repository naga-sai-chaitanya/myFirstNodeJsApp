
const dynamicBehaviour = () => {
    if(document.getElementById('telugu').checked){
        fetch('http://localhost:5555/book')
                                            .then((res)=>res.json())
                                            .then(data => console.log(data))
                                            .catch(err => console.log(err))
       console.log('checked...')
   }
}
  
   
