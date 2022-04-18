// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

let btn = document.getElementById('btn-view-more');
let image = document.getElementById('dogsAPI');
let idEl = document.getElementById('dogId');
let ageEl = document.getElementById('dogAge');
let registryEl = document.getElementById('dogRegistry');

btn.addEventListener('click', function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => { 
      console.log(result);
      image.src = result.message;
      idEl.textContent = Math.floor(Math.random()*90000) + 10000;
      ageEl.textContent = getRandomInt(2, 100) + " years";
      registryEl.textContent = Math.floor(Math.random()*900) + 100;
  })
  .catch(err=>console.log(err))

}); 


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


