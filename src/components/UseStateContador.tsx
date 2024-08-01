import { useState } from "react"

export const UseStateContador = () => {
    const [valorContador, setValorContador] = useState<number>(0); //valor inicial
    
    //Funcion que se encargue cambiar valor contador
    const cambiarContador = (numero: number) => {
        //llamar funcion de usestate
        setValorContador(valorContador + numero);
    }
    
    //const menorContador = (numero: number) => {
    //    setValorContador(valorContador - numero);
    //}

    return (
    <div>
        <h3>Contador: <small>{valorContador}</small></h3>
        <button className="btn btn-primary" 
        onClick={() => cambiarContador(1)}
        >
            +1
        </button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={() => cambiarContador(-1)}
        //onClick={() => menorContador(1)}
        >
            -1
        </button>
    </div>
    )
}
