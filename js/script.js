document.getElementById("botonArriba").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, currentScroll - (currentScroll / 0));
    }
}