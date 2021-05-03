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
  var estValide = true

  var prenom = document.querySelector("#prenom")
  var nom = document.querySelector("#nom")
  var email = document.querySelector("#email")
  var birthdate = document.querySelector("#birthdate")
  var quantity = document.querySelector("#quantity")
  var location = document.querySelectorAll("input[name='location'")
  var mentions = document.querySelector("#checkbox1")

  if (prenom.value.length < 2 || prenom.value.length == 0) {
    erreur = document.getElementById("errPrenom").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errPrenom").textContent = null;
  }
  
  if (nom.value.length < 2 || nom.value == 0) {
    erreur = document.getElementById("errNom").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errNom").textContent = null;
  }
  
  if (email.value.length < 6) {
    erreur = document.getElementById("errMail").textContent = "Vous devez entrer votre email";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errMail").textContent = null;
  }
  
  if (birthdate.value.length < 8) {
    erreur = document.getElementById("errDate").textContent = "Vous devez entrer votre date de naissance.";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errDate").textContent = null;
  }
  
  if (quantity.value.length < 1) {
    erreur = document.getElementById("errQuantity").textContent = "Veuillez entrer le nombre de tournois auquel vous avez participé";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errQuantity").textContent = null;
  }
  
  if (!mentions.checked) {
    erreur = document.getElementById("errMentions").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    e.preventDefault()
  } else {
    erreur = document.getElementById("errMentions").textContent = null;
  }
  
  if (!erreur.value) {
    alert("Merci ! Votre réservation a été reçue.")
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


