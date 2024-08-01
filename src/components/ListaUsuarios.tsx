import React, { useEffect, useState } from 'react'
import { reqResApi } from '../api/reqRests'
import { textChangeRangeIsUnchanged } from 'typescript';
import { log } from 'console';
import { ReqResListaUsuarios, Usuario } from '../interfaces/interfacesRegres';
import { read } from 'fs';

export const ListaUsuarios = () => {
    // hook state: cambiar estado del arreglo
    const[users, setUsers] = useState<Usuario[]>([]);

    //hook useEffect
    useEffect(() => {
        //llamar API
        reqResApi.get<ReqResListaUsuarios>('/users').then(resp =>{
            //console.log(resp.data.data);
            //modicficar el arreglo por API
            setUsers(resp.data.data);  
        }).catch(console.log);
    }, []);

    //funcion que muestra cada fila en la tabla de usuarios

    const itemUsuario=(usuario: Usuario)=>{
        return (
            <tr>
                <td><img src={usuario.avatar}/></td>
                <td>{usuario.first_name}</td>
                <td>{usuario.last_name}</td>
                <td>{usuario.email}</td>
                </tr>
                )
            }
            
    return (
    <div>
        <h3>Usuarios</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usuario) => itemUsuario(usuario))
                }
            </tbody>
        </table>
    </div>
    )
}
