import '../css/dash.css'

import NavVertical from '../controller/nav-vertical-controler.js'
import movimientos from '../controller/movimientos-controler.js'
import cotizacionVertical from '../controller/cotizacion-vertical.js'
import navdash from '../controller/navDash-controler.js'
import dash from '../views/dash.html' 
const navbare = document.querySelector('#navbar'); //esconde el navbar del home

export default  ()=>{
  
    navbare.classList.add('desaparecer');//esconde el navbar del home
    
    const divDash = document.createElement('div');
    divDash.innerHTML='';
    divDash.innerHTML=dash;

    const navbarvertical = divDash.querySelector('#navbarVer');
    const movi = divDash.querySelector('#movimientos');
    const cotiVer = divDash.querySelector('#cotizacionVer');
    const navbar = divDash.querySelector('#NavbarDash');
    


    movi.appendChild(movimientos());
    navbarvertical.appendChild(NavVertical());
    cotiVer.appendChild(cotizacionVertical());
    navbar.appendChild(navdash());
//salir del dash
const salirDashboard = divDash.querySelector('#salirDash')

   
    return divDash;
    

}
