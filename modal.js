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
  var email = document.querySelector("#email")
  var birthdate = document.querySelector("#birthdate")
  var quantity = document.querySelector("#quantity")
  var location = document.querySelector("input[name='location']:checked")
  var mentions = document.querySelector("#checkbox1")
  
  function isValid() {
    if (prenom.value.length >= 2 && nom.value.length >= 2 && email.value.length >= 6 && birthdate.value.length >= 8 && location != null && quantity.value.length >= 1 && mentions.checked){
      alert("Merci ! Votre réservation a été reçue.")
    }
  }

  if (prenom.value.length < 2 || prenom.value.length == 0) {
    document.getElementById("errPrenom").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    e.preventDefault()
  } else {
    document.getElementById("errPrenom").textContent = null;
  }
  
  if (nom.value.length < 2 || nom.value == 0) {
    document.getElementById("errNom").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    e.preventDefault()
  } else {
    document.getElementById("errNom").textContent = null;
  }
  
  if (email.value.length < 6) {
    document.getElementById("errMail").textContent = "Vous devez entrer votre email.";
    e.preventDefault()
  } else {
    document.getElementById("errMail").textContent = null;
  }
  
  if (birthdate.value.length < 8) {
    document.getElementById("errDate").textContent = "Vous devez entrer votre date de naissance.";
    e.preventDefault()
  } else {
    document.getElementById("errDate").textContent = null;
  }

  if (location != null) {
    document.getElementById("errLocation").textContent = null;
  } else {
    document.getElementById("errLocation").textContent = "Vous devez valider une option.";
    e.preventDefault()
  }
  
  if (quantity.value.length < 1) {
    document.getElementById("errQuantity").textContent = "Veuillez entrer le nombre de tournois auquel vous avez participé.";
    e.preventDefault()
  } else {
    document.getElementById("errQuantity").textContent = null;   
  }
  
  if (!mentions.checked) {
    document.getElementById("errMentions").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    e.preventDefault()
  } else {
    document.getElementById("errMentions").textContent = null;
  }
  
  isValid()
    
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


