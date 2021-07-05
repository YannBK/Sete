
//  ------- activer / désactiver class avec le scroll ----------
const liens = document.getElementsByClassName('lienNav');
let current = document.getElementsByClassName(" active");
const btnAccueil = document.getElementById('btnAccueil')
const btnDiapo = document.getElementById('btnDiapo')
const btnPlan = document.getElementById('btnPlan')
const btnDescription = document.getElementById('btnDescription')
const btnLocalisation = document.getElementById('btnLocalisation')
const btnActivites = document.getElementById('btnActivites')
const btnRegion = document.getElementById('btnRegion')
const btnTarifs = document.getElementById('btnTarifs')
const btnContact = document.getElementById('btnContact');
const btnPlan2 = document.getElementById('btnPlan2');

 function removeActive() {
	if (current.length > 0) {
		current[0].className = current[0].className.replace(" active", "");
	  }
	  btnContact.classList.remove('contactActive'); 
 }

const hauteur = document.documentElement.clientHeight;
window.addEventListener('scroll', scrollBtn)

function scrollBtn() {
	let position = window.scrollY;
	if(position < (hauteur -250)){
    	removeActive();
		btnAccueil.className += " active";
	}
	else if((hauteur -250) < position && position < (hauteur*2 -250)){
    	removeActive();
		btnPlan2.className += " active";
	}
	else if((hauteur*2 -250) < position && position < (hauteur*3 -250)){
    	removeActive();
		btnPlan.className += " active";
	}
	else if((hauteur*3 -250) < position && position < (hauteur*4 -250)){
    	removeActive();
		btnDescription.className += " active";
	}
	else if((hauteur*4 -250) < position && position < (hauteur*5 -250)){
    	removeActive();
		btnRegion.className += " active";
	}
	else if((hauteur*5 -250) < position){
    	removeActive();
		btnContact.classList.add('contactActive');
	}
}

// ------------------------------------------Diapo 
//Array d'images
const Images = [
	"Fichiers/images/01_Vue_mer.JPG",
	"Fichiers/images/02_salon_vue_entree.JPG",
	"Fichiers/images/03_cuisine.JPG",
	"Fichiers/images/03b_entrée_vue_salon.JPG",
	"Fichiers/images/03c_table.jpg",
	"Fichiers/images/04_salon_cuisine.jpg",
	"Fichiers/images/05_lit_1.jpg",
	"Fichiers/images/06_lit_2.jpg",
	"Fichiers/images/07_chambre_cabine.JPG",
	"Fichiers/images/08_salle_eau.JPG",
	"Fichiers/images/09_cuisine_été.JPG",
	"Fichiers/images/10_cuisine_veranda.jpg",
	"Fichiers/images/11_véranda_cuisine.jpg",
	"Fichiers/images/12_veranda.jpg",
	"Fichiers/images/13_veranda-terrasse.jpg",
	"Fichiers/images/14_terrasse.JPG",
	"Fichiers/images/15_résidence.jpg",
	"Fichiers/images/16_résidence2.jpg",
	"Fichiers/images/17_environnement 1.jpg",
	"Fichiers/images/18_environnement 2.jpg",
	"Fichiers/images/19_les_canaux.jpg",
	"Fichiers/images/20_Mont_Saint_Clair.JPG",
	"Fichiers/images/21_Mont_Saint_Clair.JPG"
];
let arrLen = Images.length - 1

//changement automatique + manuel

let speed = 3000;
let i = 0;
let b;
let object_timer;

function autoSlide(imgName) {
	if (document.images) {
		document.getElementById(imgName).src = Images[i];
		i++;
		if (i > arrLen) { i = 0; }
		b = imgName;
		objet_timer = setTimeout('autoSlide(b)', speed);
	}
	play.disabled = true;
}

function manualSlide(direction) {
	arret();
	play.disabled = false;
	if (document.images) {
		i = i + direction
		if (i > arrLen) {
			i = 0
		}
		if (i < 0) {
			i = arrLen
		}
		document.Slide.src = Images[i]
	}
}

//arreter le defilement
function arret() {
	clearTimeout(objet_timer);
	play.disabled = false;
}

//boutons de commande
const prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', () => manualSlide(-1));

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => manualSlide(1));

const stop = document.getElementById('stop');
stop.addEventListener('click', () => arret());

const play = document.getElementById('play');
play.addEventListener('click', () => autoSlide('Slide'));

autoSlide('Slide')

// effet hover sur l'image
const divHover = document.querySelector('#divSlide');
const buttonDiv = document.getElementsByClassName('btn');

const hoverDiv = () => {
	for (let i = 0; i < buttonDiv.length; i++) {
		buttonDiv[i].classList.add('hoverDiv');
	}
}

const removeHoverDiv = () => {
	for (let i = 0; i < buttonDiv.length; i++) {
		buttonDiv[i].classList.remove('hoverDiv');
	}
}

divHover.addEventListener("mouseenter", hoverDiv)
divHover.addEventListener("mouseleave", removeHoverDiv)