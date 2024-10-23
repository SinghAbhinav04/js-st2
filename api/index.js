// ajax
//stands for asynchronous javascript and xml
// technology / method for getting data and refreshing page without having to reload page and it works in the background

// ajax uses XMLHttpRequest object (called xhr object) to achieve this
// api - https://feecq.github.io/api/movies.json

// ready state codes 0(unsent),1(Opened),2(Headers received),3(Loading),4(Done)
// xhr.onreadystatechange=()=>{console.log(xhr.readyState);}
let movieData = [];
const url ="https://feecq.github.io/api/movies.json";

const xhr = new XMLHttpRequest();// instantiate object
xhr.open("GET",url,true);// open link
xhr.send();

xhr.onload = function() {
    let data = JSON.parse(this.responseText);
    console.log(data);
    movieData=data;
    GetMovies(data);
}

let container = document.getElementById("container");
function GetMovies(data){
    container.innerHTML = "";
    data.forEach(item=>{
        let movieDiv = document.createElement("div");
        movieDiv.id="movieDiv";
        movieDiv.innerHTML = `<h3>${item.movie}</h3>
                              <div class="movie-image"><img src=${item.image}></div>
                                 <p class="rating"><b>Rating</b>: ${item.rating}</p>
                              <p class ="imdb-url">IMDB: <a href="${item.imdb_url}" target="_blank">Click Here!!</a></p>`

        container.appendChild(movieDiv);
    });
}
function handleSearch(){
    let searchInput = document.getElementById("search-bar").value.toLowerCase();
    let filteredMovies =movieData.filter(movie=>movie.movie.toLowerCase().includes(searchInput));

    GetMovies(filteredMovies)
}