import { pages } from "../src/controller/index.js";



const ROOT =document.querySelector('#root');
const foot = document.querySelector('#footer');
export const todo = document.querySelector('#todo');
const terminos = document.querySelector('#btnTerminos')


//rooteo////////////
const router =(route)=>{
   
    
    
    ROOT.innerHTML='';
   
    if(window.location.hash == ""){
        route = '#/'
    }
    
 switch (route){
     case '#/':
        
        return  ROOT.appendChild(pages.home());
         
    
    
    case '#/ayuda':
        
        
        return ROOT.appendChild(pages.ayuda() ) ;
    
    case '#/terminos':
        
        
        return ROOT.appendChild(terminosyCondi() ) ;
    
    case '#/login':
       return ROOT.appendChild(pages.login());
    
    case '#/dashboard':
        return ROOT.appendChild(pages.dashboard());
    
    default :
    return ROOT.appendChild( pages.error404());

 }

 
};



export{
    router,

}