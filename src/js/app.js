// Cuando el documento este listo
document.addEventListener('DOMContentLoaded', function(){
    crearImagenes()
});

function crearImagenes() {
    const galeria = document.querySelector('.galeria-imagenes');
    

    // recorrer imagenes
    const cantidadImagenes = 16;
    for(let i = 1; i <= cantidadImagenes; i++){
        // Generando las imagenes
        const imagenes = document.createElement('IMG');
        imagenes.src = `src/img/gallery/full/${i}.jpg`;
        galeria.appendChild(imagenes);

        imagenes.onclick = function (i){
            crearModal(i)
        }
        

    }
   
};

function crearModal(){
    const modal = document.createElement('DIV');
    modal.classList.add('modal')
    console.log('hola desde el modal', i )
}