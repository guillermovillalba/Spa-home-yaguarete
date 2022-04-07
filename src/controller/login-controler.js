import '../css/login.css'

import {} from '../'
import login from '../views/login.html' 
export const todo = document.querySelector('#todo');
export const navbar = document.querySelector('#navbar');

import cargar from '../controller/carga.js'
import dashboard from '../controller/dash-controler.js'



//validaciones//


export default  ()=>{

    const divLogin = document.createElement('div');

    divLogin.innerHTML=login;
//validacion
    const correo = divLogin.querySelector('#correo');
    const clave =divLogin.querySelector('#clave');
    const form =divLogin.querySelector('#formulario');
    const errores =divLogin.querySelector('#warning');
    const ParContrseña =divLogin.querySelector('#PContraseña');
    const ParCorreo =divLogin.querySelector('#PCorreo');
    const boton = divLogin.querySelector('#botonEnviar');
    const botonDash = divLogin.querySelector('#hrefhome');

    
    
  form.addEventListener('submit',e=>{
      

    e.preventDefault();//Quita queelboton envie la info si no esta validado
    let regEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let enviar = true;
    if(!regEmail.test(correo.value)){
       
        ParCorreo.innerHTML=`NO es un Correo valido `;
        enviar=false;
    };
    if(clave.value.length < 8){
        
        ParContrseña.innerHTML=`La contrasena debe contener minimo 8 caracteres `;
        enviar=false;
     };

    if(enviar=true){
       //let hrefDash ='#/dashboard';

     // divLogin.botonDash /////añadir href
        // return todo.appendChild(dashboard())
    
    }

  })
    
    
    





    navbar.classList.add('desaparecer') 
    const botonHome = divLogin.querySelector('#botonvolverhome');
    botonHome.addEventListener('click',()=>{
      navbar.classList.remove('desaparecer')
    })

    
   
    return divLogin;
    

};

