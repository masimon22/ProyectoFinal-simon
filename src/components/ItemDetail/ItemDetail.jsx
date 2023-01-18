import "./itemDetail.css";


const ItemDetail = ({item}) => {
  return (
    <div className='containerDetail'>
    <img className="containerDetailImagen" src={item.imagen} alt={item.id} />

    <article>
      <h2>{item.nombre}</h2>
      <section>
        <h3>${item.precio}</h3>
      </section>

      <section>
        <p>{item.descripcion}</p>
      </section>
    </article>
  </div>
  )
}

export default ItemDetail