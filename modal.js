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
const modalBody = document.querySelector(".modal-body")
const formData = document.querySelectorAll(".formData");
const today = new Date().toISOString().split('T')[0]
birthdate.max = today
let formIsValid 



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
    setErrorMessage("errPrenom", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", "prenom")
  } else if (/\d/.test(prenom.value)) {
    setErrorMessage("errPrenom", "Veuillez ne pas entrer de chiffres", "prenom")
  }
  
  if (nom.value.length < 2 || nom.value == 0) {
    setErrorMessage("errNom", "Veuillez entrer 2 caractères ou plus pour le champ du nom.", "nom")
  } else if (/\d/.test(nom.value)) {
    setErrorMessage("errNom", "Veuillez ne pas entrer de chiffres", "nom")
  }
  
  if (email.value.length < 6 || email.value.length == 0) {
    setErrorMessage("errMail", "Veuillez entrer 6 caractères ou plus pour le champ email.", "email")
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    setErrorMessage("errMail", "Votre email est invalide")
  }
  
  if (birthdate.value.length < 8) {
    setErrorMessage("errDate", "Vous devez entrer votre date de naissance.", "birthdate")
  } 
  
  if (quantity.value.length < 1) {
    setErrorMessage("errQuantity", "Veuillez entrer le nombre de tournois auquel vous avez participé.", "quantity")
  } else if (isNaN(quantity.value)) {
    setErrorMessage("errQuantity", "Veuillez saisir un nombre.", "quantity")
  } else if (quantity.value < 0 || quantity.value > 99) {
    setErrorMessage("errQuantity", "Veuillez saisir un nombre entre 0 et 99.", "quantity")
  }
  
  if (!mentions.checked) {
    setErrorMessage("errMentions", "Vous devez vérifier que vous acceptez les termes et conditions.")
  }

  if (location == null) {
    setErrorMessage("errLocation", "Vous devez valider une option.")
  }
  
  if (formIsValid) {
    modalBody.classList.add("modal-confirm")
    modalBody.innerHTML = "<h2>Merci ! Votre réservation a été reçue.</h2> <input class='btn-submit button close' type='submit' value='Fermer'/>"
    document.querySelector(".modal-confirm .close").addEventListener("click", closeModal)
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

function resetErrorMessages() {
  const errors = document.querySelectorAll(".erreur")
  const inputs = document.querySelectorAll("input")
  for (const error of errors) {
    error.textContent = "";
  }
  for (const input of inputs) {
    input.style.borderColor = "";
    input.style.borderWidth = "";
  }
}

function setErrorMessage(id, message, input) {
  document.getElementById(id).textContent = message;
  document.getElementById(input).style.borderColor = "red";
  document.getElementById(input).style.borderWidth = "2px";
  formIsValid = false;
}


