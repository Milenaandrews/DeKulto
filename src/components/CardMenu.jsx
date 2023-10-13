import "./CardMenu.css"

export const CardMenu = ({ plato }) => {
  return (
    <div className="tarjeta">
      <img className="imagen" src={plato.imagen} />
      <h3 className="titulo">{plato.nombre}</h3>
      <h6 className="descripcion">{plato.descripcion}</h6>
      <span className="precio">{plato.precio}</span>
      
    </div>
  )
}
