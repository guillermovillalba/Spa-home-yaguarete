import '../css/ayuda.css'
import ayuda from '../views/ayuda.html' 

export default  ()=>{

    const divAyuda = document.createElement('div');

    divAyuda.innerHTML=ayuda;
    
 const btnAyuda = divAyuda.querySelector('#problema1');
 const ayuda1 = divAyuda.querySelector('#ayuda1')
 btnAyuda.addEventListener('click', ()=>{
     ayuda1.innerHTML='';
     
    const htmlAyuda = `<p class="AyudaP">1)Ve a la página de Login de Yaguarte. <br>
    2) Haz click en crear nueva cuenta. <br>
    3) Ingresa los datos correspondientes.<br>
    </p>`

    const div= document.createElement('div');
    div.innerHTML=htmlAyuda;
    ayuda1.append(div);
    const AyudaDocument = document.querySelector('#ayuda1');

    if(AyudaDocument.style.display=== "none"){
        
        AyudaDocument.style.display= "block"
    }else{
        AyudaDocument.style.display= "none";
        
        
    }

 })




    return divAyuda;
    

}
