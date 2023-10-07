import carta from "../assets/images/carta.jpg"
import entradas from "../assets/images/entradas.jpg"
import "../pages/Menu.css"

export const Menu = () => {
  return (
    <section>
      <div className="imgCarta">
        <img src={carta}></img>

      </div>
      <div className="imgEntrada">
        <img src={entradas}></img>
      </div>
    </section>

  )
}
