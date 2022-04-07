const apiMonedas = 'https://api.coindesk.com/v1/bpi/currentprice.json'

const ApiMonedas = async()=>{

    try{
            const respuesta = await fetch(apiMonedas);
            
           
            
            const cosa = await respuesta.json(); 
            
            if(!respuesta.ok) throw 'NO se pudo realizar la peticion';
            return cosa.bpi.USD.rate  ;

    }catch(err){
        throw err;
    }


};


const urlUsuarios = 'https://reqres.in/api/users/3';
        const obtenerFoto = async()=>{
            try{
                const respuesta = await fetch(urlUsuarios);
                const {data: usuarios} = await respuesta.json();   // aqui en la reestrcuturacion se renombro el data para que sea mas intuitivo, pero es lo mismo que antes..
                 return usuarios.avatar ;
            }catch(err){
                throw 'No se han encontrado a los usuarios'
            }
            
           
            
        };

       
        
        




export{
    ApiMonedas,
    obtenerFoto,
    
}