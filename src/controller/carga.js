import '../css/carga.css'
import carga from '../views/carga.html' 

export default  ()=>{

    const divCarga= document.createElement('div');

    divCarga.innerHTML=carga;
    
    return divCarga;
    

}
