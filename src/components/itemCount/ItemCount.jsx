import "./itemCount.css";
import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(0);
    const stock = 4;
    const sumar = ()=>{
        if (stock === contador){
            alert('Alcanzaste el maximo stock permitido')
            return
        }
        setContador(contador + 1)
    };
    const restar = ()=> {
        if(contador === 0){
            return
        }
        setContador(contador - 1)
    };

  return (
    <div className="contador">
        <div className="control">
            <button onClick={()=>restar()}>-</button>
            <span>{contador}</span>
            <button onClick={()=>sumar()}>+</button>
        </div>
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
