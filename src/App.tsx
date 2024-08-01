import { ListaUsuarios } from "./components/ListaUsuarios";
import { Login } from "./components/Login";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { UseStateContador } from "./components/UseStateContador";
import { Funciones } from "./typescript/Funciones";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return(
    <div className="mt - 2">
      <h1>Introducción TS - React</h1>
      {/*<TiposBasicos/>*/}
      {/*<Funciones />*/}
      {/*<UseStateContador />*/}
      {/*<UseEffectComponent />*/}
      {/*<Login/>*/}
      <ListaUsuarios/>
    </div>
  )
}

export default App;