import '../css/cotizacion-vertical.css'

import cotizacion from '../views/cotizacion-vertical.html' 
import { ApiMonedas,  obtenerFoto } from './Api-controler.js';

export default  ()=>{

    const divCotVer = document.createElement('div');

    divCotVer.innerHTML=cotizacion;
   const btc = divCotVer.querySelector('#BitcoinPrecio');

///Llamdo api bitcoin


const displayData = async data => {
    
    btc.textContent = `$${data} USD`;
    displayData(await ApiMonedas())
   
};


displayData() //funcionaaaaaaa
console.log(ApiMonedas()) ;


        


///imagen de perfil ///

const fotoUsu = divCotVer.querySelector('#imgUsu')
        
const perfilUsu = async(data)=>{
fotoUsu.src=data;
perfilUsu(await obtenerFoto())
}
 
perfilUsu();


   ///////cbu y alias

   const cbu =divCotVer.querySelector('#cbu');
   const alias =divCotVer.querySelector('#alias');
   const btncbu =divCotVer.querySelector('#btnCbu');
   const btnalias =divCotVer.querySelector('#btnAlias');

   btncbu.addEventListener('click', ()=>{
       const contendiCbu = `CBU: 125874785544`;
       cbu.textContent=contendiCbu;
       if(cbu.style.display=== "none"){
        cbu.style.display= "block"
    }else{
        cbu.style.display= "none"
    }
   })
   
   btnalias.addEventListener('click', ()=>{

    const contenidoAlias = `Alias: bra.gui.vil`;
    alias.textContent=contenidoAlias;
    if(alias.style.display=== "none"){
        alias.style.display= "block"
    }else{
        alias.style.display= "none"
    }
});




    return divCotVer;
    

}
