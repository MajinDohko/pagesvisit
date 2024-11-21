const botonBorrar = document.getElementById('btnReestablecer');
const paginaVisitas = document.getElementById('contadorVisitas');

let visitas = localStorage.getItem('visitas');

if (visitas === null){
    visitas = 0;
}else{
    visitas = parseInt(visitas);
}
visitas++;

function obtenerVisitas (){
    localStorage.setItem('visitas', visitas);
    paginaVisitas.textContent = visitas;
}
obtenerVisitas();

botonBorrar.addEventListener('click', ()=>{
    visitas = 0;
    localStorage.getItem(visitas);
    obtenerVisitas();
})
    