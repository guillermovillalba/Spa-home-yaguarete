import 'bootstrap/dist/css/bootstrap.min.css';
import { ApiMonedas, valorcoti } from '../Api/api-cryptos.js';
import { router } from '../router/index-roter.js';

import {saludar} from './js/Componentes.js'
import './styles.css'


window.addEventListener('hashchange', ()=>{
   
    if(!window.location.hash) {
        router('#/')
    }else{
        router(window.location.hash)
 
     }
});

//cargar
window.addEventListener('load', ()=>{
   
    if(!window.location.hash) {
        router('#/')
    }else{
        router(window.location.hash)
 
     }
});







    
const pruebaapi= document.querySelector('#footer');


//ApiMonedas();