import '../css/navbar-dash.css'
import nav from '../views/navbar-dash.html' 

export default  ()=>{

    const divNavDash = document.createElement('div');

    divNavDash.innerHTML=nav;
   

    
    return divNavDash;
    

}
