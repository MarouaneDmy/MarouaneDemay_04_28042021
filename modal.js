function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// Messages d'alertes pour validation du formulaire
modalbg.addEventListener('submit', function (e) {
  var prenom = document.querySelector("#prenom")
  var nom = document.querySelector("#nom")
  var mentions = document.querySelector("#checkbox1")
  if (prenom.value.length < 2) {
    alert('Veuillez entrer votre prénom')
    e.preventDefault()
  } else if (nom.value.length < 2) {
    alert('Veuillez entrer votre nom')
    e.preventDefault()
  } else if (!mentions.checked) {
    alert("Vous n'avez pas accepté les CGU")
    e.preventDefault()
  } else {
    alert("Inscription terminée !")
  }  
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


