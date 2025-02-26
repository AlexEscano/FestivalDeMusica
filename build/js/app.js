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

        imagenes.onclick = function (){
            crearModal(i)
        }
        

    }
   
};

function crearModal(i) {
    const body = document.querySelector('body');
    const modal = document.createElement('DIV');
    const imagenes = document.createElement('IMG');
    imagenes.src = `src/img/gallery/full/${i}.jpg`;
    modal.classList.add('modal');
    body.classList.add('overflow-hidden');
    
    body.appendChild(modal)
    modal.appendChild(imagenes)
    // console.log('hola desde el modal', i );

    // para quitar el modal
    modal.onclick = quitarModal;
}

function quitarModal() {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.classList.add('out');
    body.classList.remove('overflow-hidden');
    setTimeout(()=>{
        
        modal?.remove();
    },500)
}