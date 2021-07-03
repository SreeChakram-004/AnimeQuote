let anime=()=>{
    fetch('https://animechan.vercel.app/api/random')
    .then((response)=>response.json())
    .then((data)=>{
        let quote=document.createElement('div')
        quote.setAttribute("class","quote")
        quote.innerHTML=`<br/>
        <br/>
        <p class=" hey1 p-2 d-flex justify-content-center">Anime Name:${data.anime}</p>
        <br/>
        <br/>
        <p class="hey1 p-2 d-flex justify-content-center">Character Name:${data.character}</p>
        <br/>
        <br/>
        <p class="hey1 p-2 d-flex justify-content-center">Quote:${data.quote}</p>
        <br/>
        <br/>`
        document.body.append(quote)
        console.log(data)
        
    })
    .catch((err)=>console.log(err))
}
anime();