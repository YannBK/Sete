
const region = document.querySelector('#laRegion');
const regions = document.getElementsByClassName('region');

//liste déroulente et hover sur les liens touristiques
const hoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "inline-block";
    }
}

const removeHoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display = "none";
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
