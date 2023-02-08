import "./itemCount.css";
import swal from "sweetalert";


const ItemCount = ({contador, actualizaValor, stock}) => {
    
    
    const onAdd = ()=>{
        if (stock === contador){
            swal({
                title: "No hay mas stock disponible",
                icon: "warning",
                button: "Aceptar"
            })
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
