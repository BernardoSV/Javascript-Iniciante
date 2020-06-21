
const cards = document.getElementById("cards")
window.addEventListener("load", generatePage);
function generatePage(){
  fetch("https://ghibliapi.herokuapp.com/films")
  .then( res => res.json() )
  .then( movies => {      
      for(const movie of movies) {
          cards.innerHTML += `
          <div class="card"> 
            <img src="../poster/${movie.title}.jpg">         
            <div class="cardLeft">
              <h1>${movie.title}</h1>
              <div class="info">
                <p>Director: <strong>${movie.director}</strong></p>
                <p>Release Date: <strong>${movie.release_date}</strong></p>
              </div>
              <p>${movie.description}</p>
            </div>          
          </div>
      `}
  })
}
    





