
//effet hover sur les liens touristiques
const region = document.querySelector('#laRegion');
const regions = document.getElementsByClassName('region');

const hoverRegionsPlus = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display= "block";
        regions[i].classList.add('hoverPlus');
}
}

const removeRegionsPlus = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display= "none";
}
}

const hoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display= "block";
    }
}

const removeHoverRegions = () => {
    for (let i = 0; i < regions.length; i++) {
        regions[i].style.display= "none";
        regions[i].classList.remove('hoverPlus');
    }
}

function allez(){
    for (let i = 0; i < regions.length; i++) {
        regions[i].addEventListener("mouseenter", hoverRegionsPlus)
        regions[i].addEventListener("mouseleave", removeRegionsPlus)
    }
}
region.addEventListener("mouseenter", hoverRegions)
region.addEventListener("mouseleave", removeHoverRegions)
allez();



{/* <div class="lienNav" id="Région">
                    <p>La région :</p>
                    <ul>
                        <li class="liregion"><a href="https://www.my-hourtin.com/" target="_blank"><button
                                    class="region" id="Hourtin">Hourtin</button></a></li>
                        <li class="liregion"><a href="http://www.medoc-tourisme.com/" target="_blank"><button
                                    class="region" id="Medoc">Le Médoc</button></a></li>
                        <li class="liregion"><a href="https://www.gironde-tourisme.fr/" target="_blank"><button
                                    class="region" id="Gironde">La Gironde</button></a></li>
                    </ul>
                </div> */}