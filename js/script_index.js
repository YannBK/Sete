
//! --------------------------------------------------- activer / désactiver class
let current = document.getElementsByClassName(" active");
const btnAccueil = document.getElementById('btnAccueil')
const btnDescription = document.getElementById('btnDescription')
const btnPlan = document.getElementById('btnPlan')
const btnTarifs = document.getElementById('btnTarifs')
const btnRegion = document.getElementById('btnRegion')
const btnContact = document.getElementById('btnContact');
const btnNav = document.getElementsByClassName('lienNav')

function removeActive() {
	while (current.length > 0) {
		current[0].className = current[0].className.replace(" active", "");
	}
}

function scrollBtn() {
	let position = window.scrollY;
	const hauteur = document.documentElement.clientHeight;
	const hauteurChange = hauteur / 3;
	if (window.innerWidth > 1250) {
		if (position < (hauteur - hauteurChange)) {
			removeActive();
			btnAccueil.className += " active";
		}
		else if ((hauteur - hauteurChange) < position && position < (hauteur * 2 - hauteurChange)) {
			removeActive();
			btnDescription.className += " active";
			btnPlan.className += " active";
		}
		else if ((hauteur * 2 - hauteurChange) < position && position < (hauteur * 3 - hauteurChange)) {
			removeActive();
			btnTarifs.className += " active";
		}
		else if ((hauteur * 3 - hauteurChange) < position && position < (hauteur * 4 - hauteurChange)) {
			removeActive();
			btnContact.className += " active";
		}
		else if ((hauteur * 4 - hauteurChange) < position && position < (hauteur * 5 - hauteurChange)) {
			removeActive();
			btnRegion.className += " active";
		}
	}
	else {
		if (position < (hauteur - hauteurChange)) {
			removeActive();
			btnAccueil.className += " active";
		}
		else if ((hauteur - hauteurChange) < position && position < (hauteur * 2 - hauteurChange)) {
			removeActive();
			btnDescription.className += " active";
		}
		else if ((hauteur * 2 - hauteurChange) < position && position < (hauteur * 3 - hauteurChange)) {
			removeActive();
			btnPlan.className += " active";
		}
		else if ((hauteur * 3 - hauteurChange) < position && position < (hauteur * 4 - hauteurChange)) {
			removeActive();
			btnTarifs.className += " active";
		}
		else if ((hauteur * 4 - hauteurChange) < position && position < (hauteur * 5 - hauteurChange)) {
			removeActive();
			btnContact.className += " active";
		}
		else if ((hauteur * 5 - hauteurChange) < position) {
			removeActive();
			btnRegion.className += " active";
		}
	}
}

window.addEventListener('scroll', scrollBtn)
window.addEventListener('resize', scrollBtn)

//! --------------------------------------------------- Diapo 
//*Array d'images
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

//*changement automatique + manuel
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
		document.Slide.src = Images[i];
		document.Slide2.src = Images[i];
	}
}

//*arreter le defilement
function arret() {
	clearTimeout(objet_timer);
	play.disabled = false;
}

//*boutons de commande
const prevBtn = document.getElementById('prev-btn');
const prevBtn2 = document.getElementById('prev-btn2');
prevBtn.addEventListener('click', () => manualSlide(-1));
prevBtn2.addEventListener('click', () => manualSlide(-1));

const nextBtn = document.getElementById('next-btn');
const nextBtn2 = document.getElementById('next-btn2');
nextBtn.addEventListener('click', () => manualSlide(1));
nextBtn2.addEventListener('click', () => manualSlide(1));

const stop = document.getElementById('stop');
// const stop2 = document.getElementById('stop2');
stop.addEventListener('click', () => arret());
// stop2.addEventListener('click', () => arret());

const play = document.getElementById('play');
// const play2 = document.getElementById('play2');
play.addEventListener('click', () => autoSlide('Slide'));
// play2.addEventListener('click', () => autoSlide('Slide2'));

autoSlide('Slide')

//* effet hover sur l'image (fait apparaitre boutons)
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

//! --------------------------------------------------- Switch plein écran

//* variables
const smallSlide = document.getElementById('Slide');
const Slide2 = document.getElementById('Slide2')
const divaphoto = document.getElementById('divaphoto')
const divaopacité = document.getElementById('divaopacité')

const imgPlan = document.getElementById('imgPlan')
const imgPlan2 = document.getElementById('imgPlan2')
const divfullplan = document.getElementById('divfullplan')
const divopacitéplan = document.getElementById('divopacitéplan')

//*fonction switch
function switchImage(elm1, elm2) {
	if (window.innerWidth > 1000) {
		if (elm1.style.display == 'none' && elm2.style.display == 'none') {//2em condition pas nécessaire
			elm1.style.display = 'block';
			elm2.style.display = 'block';
		}
		else {
			elm1.style.display = 'none';
			elm2.style.display = 'none';
		}
	}
}

//*eventlistener pour switch diapo
smallSlide.addEventListener('click', () => switchImage(divaphoto, divaopacité))
Slide2.addEventListener('click', () => switchImage(divaphoto, divaopacité))

//*eventlistener pour switch plan
imgPlan.addEventListener('click', () => switchImage(divfullplan, divopacitéplan))
imgPlan2.addEventListener('click', () => switchImage(divfullplan, divopacitéplan))

//*enleve fullscreen quand clique sur liennav
function displayNone() {
	divaphoto.style.display = 'none';
	divaopacité.style.display = 'none';
	divfullplan.style.display = 'none';
	divopacitéplan.style.display = 'none';
}

function display() {
	const btnNavLength = btnNav.length;
	for (let i = 0; i < btnNavLength - 1; i++) {
		btnNav[i].addEventListener('click', displayNone);
	}
}
display();

//*enlève curseur zoom si width<1000
function zoom(){
	let width = document.documentElement.clientWidth;
	if(width > 1000){
		smallSlide.classList.add('zoom');
		imgPlan.classList.add('zoom');
	}
	if(width < 1000){
		smallSlide.classList.remove('zoom');
		imgPlan.classList.remove('zoom');
	}
}
zoom();
window.addEventListener('resize', zoom)

//*pour éviter de faire un double click la première fois qu'on zoom
document.onload(displayNone())



