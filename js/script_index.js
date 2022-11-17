main();

function main() {
	window.addEventListener('load',()=>{
		//pour éviter de faire un double click la première fois qu'on zoom, je ne comprends toujours pas pourquoi
		closeModals();

		const diapo = new Diapo(4, 20);
		diapo.startDiapo();

		const categories = ["accueil","description","plan","tarifs","contact","region"];
		getIntersection(categories);

		allowZoom();
	});
	
	window.addEventListener('resize', ()=>{
		allowZoom();
	});
}

//! -------- class active des liens --------
function getIntersection(arr) {
	arr.forEach(cat => {

		const elt = document.getElementById(`princ_${cat}`);
		const observer = new IntersectionObserver((scrolls)=>{
			scrolls.forEach((scroll) => {
				if(scroll.isIntersecting) {
					removeActive();
					if(window.innerWidth > 1250 && (cat==="description" || cat==="plan")){
						document.getElementById(`btn_description`).classList.add("active");
						document.getElementById(`btn_plan`).classList.add("active");
					} else {
						document.getElementById(`btn_${cat}`).classList.add("active");
					}
				}
			})
		},{threshold:0.5});
		observer.observe(elt);
	})
}

function removeActive() {
	let currentActive = document.getElementsByClassName("active");
	while (currentActive.length > 0) {
		currentActive[0].classList.remove("active");
	}
}

//! -------- Diapo --------
class Diapo {

	constructor(speed, numberImages) {
		this.speed = speed*1000;
		this.numberImages = numberImages;

		this.i = 0;
		this.firstTimeManual = true;
		this.object_timer;
	}

	images(number) {
		let images = [];
		for(let j = 0; j <= number; j++) {
			// images.push(`./Fichiers/images/0_${j}.jpg`);
			images.push(`../Fichiers/images/0_${j}.jpg`);
		}
		return images;
	}

    autoSlide(arr) {
        const btnPlay = document.querySelectorAll(".play");
        const btnStop = document.querySelectorAll(".stop");
        this.firstTimeManual = true;
        if (document.images) {
            document.getElementById("img_slide").src = arr[this.i];
            document.getElementById("img_modal").src = arr[this.i];
            document.getElementById("img_slide").dataset.modal = 'slide';
            document.getElementById("img_modal").dataset.modal = 'slide';
            this.i++;
            if (this.i > arr.length - 1) { this.i = 0; }
            this.objet_timer = setTimeout(()=>this.autoSlide(arr), this.speed);
        }
        btnPlay.forEach(btn=>btn.style.display = "none");
        btnStop.forEach(btn=>btn.style.display = "block");
    }

    manualSlide(direction, arr) {
        this.arret();
        if (document.images) {
            if(this.firstTimeManual === false){
                this.i = this.i + direction;
            } else {
                if(this.i === 0) {
                    this.i = arr.length;
                }
                if(direction === -1){
                    this.i = this.i - 1 + direction;
                }
            }
            if (this.i > arr.length - 1) {
                this.i = 0;
            }
            if (this.i < 0) {
                this.i = arr.length - 1;
            }
            document.getElementById("img_slide").src = arr[this.i];
            document.getElementById("img_modal").src = arr[this.i];
			document.getElementById("img_slide").dataset.modal = 'slide';
            document.getElementById("img_modal").dataset.modal = 'slide';
            this.firstTimeManual = false;
        }
    }

    arret() {
        const btnPlay = document.querySelectorAll(".play");
        const btnStop = document.querySelectorAll(".stop");
        btnStop.forEach(btn=>btn.style.display = "none");
        btnPlay.forEach(btn=>btn.style.display = "block");
        clearTimeout(this.objet_timer);
    }

    hoverDiv = () => {
        const buttonDiv = document.getElementsByClassName("btn_slide");
        for (let i = 0; i < buttonDiv.length; i++) {
            buttonDiv[i].classList.add("hoverDiv");
        }
    }

    removeHoverDiv = () => {
        const buttonDiv = document.getElementsByClassName("btn_slide");
        for (let i = 0; i < buttonDiv.length; i++) {
            buttonDiv[i].classList.remove("hoverDiv");
        }
    }

    startDiapo() {
        const myDiapo = this.images(this.numberImages);

        document.querySelectorAll(".prev_btn").forEach(btn=>btn.addEventListener("click", 
			() => this.manualSlide(-1, myDiapo)
		));

        document.querySelectorAll(".next_btn").forEach(btn=>btn.addEventListener("click", 
			()=> this.manualSlide(1, myDiapo)
		));

        document.querySelectorAll(".stop").forEach(btn=>btn.addEventListener("click", 
			() => this.arret()
		));

        document.querySelectorAll(".play").forEach(btn=>btn.addEventListener("click", 
			() => this.autoSlide(myDiapo)
		));

        document.querySelector("#div_slide").addEventListener("mouseenter", 
			this.hoverDiv
		);

        document.querySelector("#div_slide").addEventListener("mouseleave", 
			this.removeHoverDiv
		);

        this.autoSlide(myDiapo);
    }
}

//! -------- Zoom --------
const img_slide = document.querySelectorAll('.img_slide');
const img_modal = document.querySelectorAll('.img_modal');
const modal_background_slide = document.getElementById('modal_background_slide');

const imgPlan = document.getElementById('imgPlan');
const plan_modal = document.getElementById('plan_modal');
const modal_background_plan = document.getElementById('modal_background_plan');

function allowZoom(){
	if (window.innerWidth > 1000 && window.innerHeight > 750) {
		img_slide.forEach(slide=>slide.classList.add('zoom'));
		imgPlan.classList.add('zoom');
		listenZoomOnClick();
	} else {
		img_slide.forEach(slide=>slide.classList.remove('zoom'));
		imgPlan.classList.remove('zoom');
		removeZoomOnClick();
	}
}

function listenZoomOnClick() {
	img_slide.forEach(slide=>slide.addEventListener('click', switchZoom));
	img_modal.forEach(slide=>slide.addEventListener('click', switchZoom));
	
	imgPlan.addEventListener('click', switchZoom);
	plan_modal.addEventListener('click', switchZoom);
}

function removeZoomOnClick() {
	img_slide.forEach(slide=>slide.removeEventListener('click', switchZoom));
	img_modal.forEach(slide=>slide.removeEventListener('click', switchZoom));
	
	imgPlan.removeEventListener('click', switchZoom);
	plan_modal.removeEventListener('click', switchZoom);
}

function switchZoom() {
	const target = this.dataset.modal;
	const modal = document.getElementById(`modal_background_${target}`);

	if (window.innerWidth > 1000) {
		if (modal.style.display == 'none') {
			modal.style.display = 'block';
		} else {
			modal.style.display = 'none';
		}
	}
}

function closeModals() {
	modal_background_slide.style.display = 'none';
	modal_background_plan.style.display = 'none';
}
