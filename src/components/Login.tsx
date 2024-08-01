

//Funcion cambiar action a login

/*const login = () => {
    dispatchEvent({
        type: 'login',
        payload: {
            correo: 'genay@gmail.com',
            contraseña: '12345'
        }
    });
}*/

import React from 'react'

export const Login = () => {
    return (
    <div>
        <h3>Login</h3>
        <div className='alert alert-info'>
            Validondo...
        </div>
        <div className='alert alert-danger'>
            No autenticado...
        </div>
        <div className='alert alert-success'>
            Autenricado...
        </div>
        <button className='btn btn-primary'>Inciar secion</button>
        <button>Cerrar Sesion</button>
    </div>
    )
}


