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
let formIsValid 

function resetErrorMessages() {
  const errors = document.querySelectorAll(".erreur")
  for (const error of errors) {
    error.textContent = "";
  }
}

function setErrorMessage(id, message) {
  document.getElementById(id).textContent = message;
  formIsValid = false
}

// Messages d'alertes pour validation du formulaire
modalbg.addEventListener('submit', function (e) {
  const prenom = document.querySelector("#prenom")
  const nom = document.querySelector("#nom")
  const email = document.querySelector("#email")
  const birthdate = document.querySelector("#birthdate")
  const quantity = document.querySelector("#quantity")
  const location = document.querySelector("input[name='location']:checked")
  const mentions = document.querySelector("#checkbox1")  
  formIsValid = true

  e.preventDefault()
  resetErrorMessages()

  if (prenom.value.length < 2 || prenom.value.length == 0) {
    setErrorMessage("errPrenom", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
  }
  
  if (nom.value.length < 2 || nom.value == 0) {
    setErrorMessage("errNom", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }
  
  if (email.value.length < 6) {
    setErrorMessage("errMail", "Vous devez entrer votre email.")
  }
  
  if (birthdate.value.length < 8) {
    setErrorMessage("errDate", "Vous devez entrer votre date de naissance.")
  }

  if (location == null) {
    setErrorMessage("errLocation", "Vous devez valider une option.")
  }
  
  if (quantity.value.length < 1) {
    setErrorMessage("errQuantity", "Veuillez entrer le nombre de tournois auquel vous avez participé.")
  } 
  
  if (!mentions.checked) {
    setErrorMessage("errMentions", "Vous devez vérifier que vous acceptez les termes et conditions.")
  }
  
  if (formIsValid) {
    closeModal()
    alert("Merci, votre formulaire est validé !")
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


