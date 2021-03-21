document.getElementById("iconoMenu").addEventListener("click", mostrarMenu);
function mostrarMenu() {
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}
document.getElementById("botonCerrar").addEventListener("click", cerrarMenu);
function cerrarMenu(){
    document.getElementById("mostrarMenu").classList.toggle('mostrarLateral');
}