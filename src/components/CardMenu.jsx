import "./CardMenu.css"

export const CardMenu = ({ plato }) => {
  return (
    <div className="tarjeta">
      <img className="imagen" src={plato.imagen} />

      <div className="content">
        <h3 className="titulo">{plato.nombre}</h3>
        <h4 className="descripcion">{plato.descripcion}</h4>
        <span className="precio">{plato.precio}</span>

      </div>

    </div>
  )
}
