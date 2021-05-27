
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
	if(position < (hauteur -125)){
    	removeActive();
		btnAccueil.className += " active";
	}
	else if((hauteur -125) < position && position < (hauteur*2 -125)){
    	removeActive();
		btnDiapo.className += " active";
	}
	else if((hauteur*2 -125) < position && position < (hauteur*3 -125)){
    	removeActive();
		btnPlan.className += " active";
	}
	else if((hauteur*3 -125) < position && position < (hauteur*4 -125)){
    	removeActive();
		btnDescription.className += " active";
	}
	else if((hauteur*4 -125) < position && position < (hauteur*5 -125)){
    	removeActive();
		btnLocalisation.className += " active";
	}
	else if((hauteur*5 -125) < position && position < (hauteur*6 -125)){
    	removeActive();
		btnActivites.className += " active";
	}
	else if((hauteur*6 -125) < position && position < (hauteur*7 -125)){
    	removeActive();
		btnRegion.className += " active";
	}
	else if((hauteur*7 -125) < position && position < (hauteur*8 -125)){
    	removeActive();
		btnTarifs.className += " active";
	}
	else if((hauteur*8 -125) < position){
    	removeActive();
		btnContact.classList.add('contactActive');
	}
}

// ------------------------------------------Diapo 
//Array d'images
const Images = ["Fichiers/sete/1_Vue_mer.jpg",
	"Fichiers/sete/2_Mont_Saint_Clair.jpg",
	"Fichiers/sete/3_Mont_Saint_Clair.JPG",
	"Fichiers/sete/4_chambre_cabine.JPG",
	"Fichiers/sete/5_salon_vue_entree.JPG",
	"Fichiers/sete/6_cuisine.JPG",
	"Fichiers/sete/7_entrée_vue_salon.JPG",
	"Fichiers/sete/8_salle_eau.JPG",
	"Fichiers/sete/9_cuisine_été.JPG",
	"Fichiers/sete/10_cuisine_veranda.jpg",
	"Fichiers/sete/11_terrasse.JPG",
	"Fichiers/sete/12_environnement 1.jpg",
	"Fichiers/sete/13_environnement 2.jpg",
	"Fichiers/sete/14_les_canaux.jpg",
	"Fichiers/sete/15_veranda.jpg",
	"Fichiers/sete/16_véranda_cuisine.jpg",
	"Fichiers/sete/17_veranda-terrasse.jpg",
	"Fichiers/sete/18_table.jpg",
	"Fichiers/sete/19_lit_1.jpg",
	"Fichiers/sete/20_lit_2.jpg",
	"Fichiers/sete/21_résidence.jpg",
	"Fichiers/sete/22_résidence2.jpg",
	"Fichiers/sete/23_salon_cuisine.jpg"];
let arrLen = Images.length - 1

//changement automatique + manuel

let speed = 2000;
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