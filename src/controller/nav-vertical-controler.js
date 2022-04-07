import '../css/nav-vertical.css'
import nav from '../views/nav-vertical.html' 

export default  ()=>{

    const divNavVer = document.createElement('div');

    divNavVer.innerHTML=nav;
    
    return divNavVer;
    

}

