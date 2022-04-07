import Home from '../controller/home-controler.js';
import CotizacionVertical from '../controller/cotizacion-vertical.js';
import Ayuda from '../controller/ayuda.js';
import Dashboard from '../controller/dash-controler';
import Login from '../controller/login-controler.js';
import Movimientos from '../controller/movimientos-controler.js';
import NavbarVertical from '../controller/nav-vertical-controler.js';
import NavbarDash from '../controller/navDash-controler.js';
import Error404 from '../controller/404-controler.js';



const pages ={
home:Home,
cotizacionVertical:CotizacionVertical,
ayuda:Ayuda,
dashboard:Dashboard,
login:Login,
movimientos:Movimientos,
navbarVertical:NavbarVertical,
navbarDash:NavbarDash,
error404:Error404


}
export {pages}