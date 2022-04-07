import '../css/footer.css';
import termYCond from '../controller/terminos-controller.js'
import footer from '../views/footer.html'

export default  ()=>{

    const divFooter = document.createElement('div');

    divFooter.innerHTML=footer;
    

 const terminos= divFooter.querySelector('#btnTerminos');
terminos.addEventListener('click', ()=>{
   termYCond();
  })
    return divFooter;
    

}
