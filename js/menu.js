document.getElementById("iconoMenu").addEventListener("click", mostrarMenu);
function mostrarMenu() {
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}
document.getElementById("botonCerrar").addEventListener("click", cerrarMenu);
function cerrarMenu(){
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}

document.getElementById("botonArriba").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, currentScroll - (currentScroll / 0));
    }
}

buttonUp = document.getElementById("botonArriba");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;
    if (scroll > 300){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 300){
        buttonUp.style.transform = "scale(0)";
    }
}