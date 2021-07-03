//const url='http://www.omdbapi.com/?s=batman&page=1&&apikey=e155e2c9'
//const url='http://localhost:8080/smart-home/rooms?apiKey=123'
const url='http://192.168.100.15:8080/smart-home/rooms?apiKey=123'
//const url='http://www.omdbapi.com/?s=batman&apikey=e155e2c9'
//const url='http://dog-api.kinduff.com/api/facts'
//fetch(url + movie + page + numPage + api);
//const url = 'http://www.omdbapi.com/?s=';
const api = '&apikey=e155e2c9';
const page = '&page='
let movie = "batman";
let numPage=1;
const containerList=document.getElementById('listData')
const getAPI=async ()=>{
 
    const response = await fetch(url);

     // return response.json(); // parses JSON response into native JavaScript objects    
    //const response = await fetch(url + movie + page + numPage + api);
    //const movieData = await peticion.json();
     
     let promiseResponse= response.json()
     console.log(promiseResponse);
     promiseResponse.then(data=>{
         let{Data}=data
         renderData(Data)
     })
     .catch(err=>console.log(`Error: ${err}`))
}
function renderData(data){
    let {Rooms}=data
    let fragment = document.createDocumentFragment();
    //console.log(object);
    let ul=document.createElement('ul')
    Rooms.forEach(item=>{
        let li=document.createElement('li')
        li.textContent=`<h2>${item.Name}</h2><h2>${item.State}</h2>`
        //console.log(item.Name);
        fragment.appendChild(li)
    })
    ul.appendChild(fragment)
    containerList.appendChild(ul)
}


document.getElementById('btnApi').addEventListener('click',getAPI)


