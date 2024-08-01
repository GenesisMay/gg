//rafc+TAB
//Componente funcion REACT
export const TiposBasicos = () => {
    //variables - typescript
    //let nombre: string | number = 'Dayana';
    //nombre=32;
    
    //let nombre: string = 'Dyana';
    
    //const en type
    // fdf ? entonces : si no es 
    const nombre: string = 'Daya';
    const edad: number = 32;
    const donador: boolean= true;
    const poderes: string[] = ['volar', 'invidible'];
    //agregar elemento en el areglo
    poderes.push('velocidad');

    return (
    <div>
        <h3>Tipos Básicos</h3>
        {nombre},{edad},{donador ? 'Donante' : 'No donante'}
        <br />
        {poderes.join(', ')}
    </div>
    )
}
