var headerSection ;
var isheaderOn = true;

function loadGlobalVar() {
    headerSection = document.querySelector('.headerSection') ;
}

function scrolInitializing() {
    if(window.scrollY >= 400 && isheaderOn){
        headerSection.style.opacity = 0 ;
        isheaderOn = false ;
    } else if(window.scrollY <= 400 && !isheaderOn){
        headerSection.style.opacity = 1 ;
        isheaderOn = true ;
    }
}
