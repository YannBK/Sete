
//effet hover sur les liens touristiques
const region = document.querySelector('#laRegion');
const regions = document.getElementsByClassName('region');

const hoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].classList.add('hoverPlus');
    }
}

const removeHoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].classList.remove('hoverPlus');
    }
}

region.addEventListener("mouseenter", hoverRegions)
region.addEventListener("mouseleave", removeHoverRegions)
