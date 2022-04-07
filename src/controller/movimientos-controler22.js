import '../css/movimientos.css'
import movimientos from '../views/movimientos.html' 


export default  ()=>{

    const divMovimientos = document.createElement('div');

    divMovimientos.innerHTML=movimientos;

    const infoMov = divMovimientos.querySelector('#informacionMovimiento');
    const btnMovi = divMovimientos.querySelector('#btnMovi');
    


   btnMovi.addEventListener('click',()=>{
       infoMov.innerHTML='';
    let hoy = new Date();
    let fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    let num =Math.floor(Math.random()*100000000000000000) ;
    
    const htmlInfoMov= `<p class="InfoMovi" id="Creado">Fecha: ${fecha}     Hora: ${hora}  <br> 
      N° Transacción: ${num}</p>
       `;
       const div = document.createElement('div');
       div.innerHTML=htmlInfoMov;
       infoMov.appendChild(div);
      
       //esconder
       const alias = document.querySelector('#informacionMovimiento'); //se llama al document porque esto ya esta creado en DOM

       if(alias.style.display=== "none"){
        
        alias.style.display= "block"
    }else{
        alias.style.display= "none";
        

        
    }
    
    //codigo movimientos dinamico

    

   });
   
    
    return divMovimientos;
    

}
