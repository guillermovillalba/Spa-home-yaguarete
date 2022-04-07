import '../css/404.css';
import error from '../views/404.html'

export default  ()=>{

    const div404 = document.createElement('div');

    div404.innerHTML=error;
    
    return div404;
    

}
