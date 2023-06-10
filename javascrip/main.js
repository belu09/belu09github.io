
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

        document.getElementById("move-content").classList.toggle('move-container-all');

        document.getElementById("show-menu").classList.toggle('show-lateral');
}
 

const grande = document.querySelector('div.grande');
const punto  = document.querySelectorAll('ul.puntos');

punto.forEach((cadaPunto, i )=> {

        punto[i].addEventListener('click',()=>{
                let posicion= i
                let operacion = posicion * -70

                grande.style.transform =`translateX(${operacion}%)`
                punto.forEach((cadaPunto, i)=>{
                        punto[i].classList.add('activo')
                })
                punto[i].classList.remove('activo')
        })
})