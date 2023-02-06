import "./itemCount.css";


const ItemCount = ({contador, actualizaValor, stock}) => {
    
    
    const onAdd = ()=>{
        if (stock === contador){
            alert('Alcanzaste el maximo stock permitido')
            return
        }
        actualizaValor(contador + 1)
    };
    const restar = ()=> {
        if(contador === 0){
            return
        }
        actualizaValor(contador - 1)
    };

  return (
    <div className="contador">
        <div className="control">
            <button onClick={()=>restar()}>-</button>
            <span>{contador}</span>
            <button onClick={()=>onAdd()}>+</button>
        </div>
      
    </div>
  );
};

export default ItemCount;
