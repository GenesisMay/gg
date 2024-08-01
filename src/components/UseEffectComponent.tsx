import { useEffect, useState } from "react"

export const UseEffectComponent = () => {
    const [valor, setValor] = useState<boolean>(false);
    
    useEffect(() => {
        console.log('Desdes el hook useEffect', valor);
    }, [valor]);

    //funcion
    const cambiarValor = () => {
        //llanar duncion cambiar calor del useState
        setValor(!valor); //negar ! cambia de false a true o alrevez
        //setValor(valor ? false: true);
    }
    
    return (
    <div>
        <h3>Hook UseEffect</h3>
        <button onClick={cambiarValor}>Cambiar</button>

    </div>
    )
}
