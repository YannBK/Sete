
const region = document.querySelector('#laRegion');
const regions = document.getElementsByClassName('region');
const btnRegion = document.getElementById('laRegion');

//liste déroulente et hover sur les liens touristiques
const hoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "inline-block";
        btnRegion.classList.add('page1');
    }
}

const removeHoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "none";
        btnRegion.classList.remove('page1');
    }
}

//eventListeners
function apparition() {
    for (let i = 0; i < regions.length; i++) {
        region.addEventListener("mouseenter", hoverRegions)
        region.addEventListener("mouseleave", removeHoverRegions)
    }
}

function constance() {
    for (let i = 0; i < regions.length; i++) {
        regions[i].addEventListener("mouseenter", hoverRegions)
        regions[i].addEventListener("mouseleave", removeHoverRegions)
    }
}

apparition();
constance();
