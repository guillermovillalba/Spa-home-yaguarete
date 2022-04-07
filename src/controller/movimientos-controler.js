import '../css/movimientos.css'
import movimientos from '../views/movimientos.html' ;
import { ApiMovimientos } from './arraymovi';

export default  ()=>{

    const divMovimientos = document.createElement('div');
    divMovimientos.innerHTML=movimientos;

    //const infoMov = divMovimientos.querySelector('#informacionMovimiento');
   /// const btnMovi = divMovimientos.querySelector('#btnMovi');
    const divMovi = divMovimientos.querySelector('#idMovimientos');
    

   //btnMovi.addEventListener('click',()=>{
     //  infoMov.innerHTML='';
    //let hoy = new Date();
    //let fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
    //let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    ///let num =Math.floor(Math.random()*100000000000000000) ;
    
    //const htmlInfoMov= `<p class="InfoMovi" id="Creado">Fecha: ${fecha}     Hora: ${hora}  <br> 
    //  N° Transacción: ${num}</p>
      // `;
    ///   const div = document.createElement('div');
     //  div.innerHTML=htmlInfoMov;
     //  infoMov.appendChild(div);
      
       //esconder
     //  const alias = document.querySelector('#informacionMovimiento'); //se llama al document porque esto ya esta creado en DOM

     //  if(alias.style.display=== "none"){
        
     //   alias.style.display= "block"
    //}else{
      //  alias.style.display= "none";
        
        
    //}
    



   //});
const crearMovi =()=>{
  let a=0;
    ApiMovimientos.forEach(movimiento =>{
      
      a=a+1;
      console.log(a) 
        console.log({movimiento})
        const divfor = document.createElement('li');
        divfor.classList.add('nav-item', 'linea' ,'resaltar');
        divfor.innerHTML =` 
        <div class="container" id="id_${movimiento.id}">
            <div class="row" >
                <div class="col-md-2"   >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg>
                  </div>
                  <div class="col-6 "  id="btnMovi">
                    <p>${movimiento.descripcion}</p>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-12  ">
                    <h5  ><b>$ ${movimiento.valor}</b>  </h5>
                  
                </div></div></div>
            </div>

        </div>
        <div style="display: none" id="idDEsc_${a}"><p class="InfoMovi" id="Creado">Fecha: ${movimiento.fecha}     Hora: ${movimiento.hora}  <br> 
         N° Transacción: ${movimiento.numTransaccion}</p></div>
    
    
`
divMovi.appendChild(divfor);
///Logica id
        //
       // divMovi.querySelector(`#id_${movimiento.id}`).addEventListener('click',()=>{
          //  alert(`El valor de la transaccion es de $${movimiento.valor}`)
       // })

       const descr = divMovimientos.querySelector(`#idDEsc_${a}`);
       divMovi.querySelector(`#id_${movimiento.id}`).addEventListener('click',()=>{

        if(descr.style.display=== "none"){
        
          descr.style.display= "block"
         }else{
          descr.style.display= "none";}

      })
    
      
       
   });
   
   
}
   crearMovi();
    
    return divMovimientos;
    

}
