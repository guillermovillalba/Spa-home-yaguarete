
import condiciones from '../views/terminos.html' 

export default  ()=>{

    const divTerminos = document.createElement('div');

    divTerminos.innerHTML=condiciones;
    

    
    return divTerminos;
    

}

