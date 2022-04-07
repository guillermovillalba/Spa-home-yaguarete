import '../css/home.css'
import html from '../views/home.html' 

const ROOT =document.querySelector('#root');

export default  ()=>{
        
    const divHome = document.createElement('div');
   divHome.innerHTML='';
    divHome.innerHTML=html;
    


    return divHome;
    

}

