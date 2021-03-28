document.getElementById("iconoMenu").addEventListener("click", mostrarMenu);
function mostrarMenu() {
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}
document.getElementById("botonCerrar").addEventListener("click", cerrarMenu);
function cerrarMenu(){
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}

window.onscroll = function(){
    buttonUp = document.getElementById("botonArriba");
    var scroll = document.documentElement.scrollTop;

    if (scroll > 100){
        document.getElementById("iconoMenu").classList.add('iconoIzquierda');
        document.getElementById("iconoMenu").classList.remove('iconoDerecha');
    }else{
        document.getElementById("iconoMenu").classList.remove('iconoIzquierda');
        document.getElementById("iconoMenu").classList.add('iconoDerecha');
    }

    if (scroll > 300){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 300){
        buttonUp.style.transform = "scale(0)";
    }
}