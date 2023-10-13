import cartaFoto from "../assets/images/carta.jpg"
import entradas from "../assets/images/entradas.jpg"
import { CardMenu } from "../components/CardMenu"
import "../pages/Menu.css"

export const Menu = () => {

  const cartaEntradas = [
    {
      nombre: "Churrasco Palta",
      precio: 31321,
      descripcion: "ksalkjdslkdjlksajlkd",
      imagen: "https://dondemerelo.cl/wp-content/uploads/2022/12/ChuPalta450x450px.jpg.webp",

    },
    {
      nombre: "Completo Italiano",
      precio: 364,
      descripcion: "ksalkjdslkdjlksajlkd",
      imagen: "https://tofuu.getjusto.com/orioneat-prod-resized/KrZue287dpHtDStBK-1200-1200.webp",

    },
    {
      nombre: "Completo Italiano",
      precio: 364,
      descripcion: "ksalkjdslkdjlksajlkd",
      imagen: "https://tofuu.getjusto.com/orioneat-prod-resized/KrZue287dpHtDStBK-1200-1200.webp",

    },
  ]


  return (
    <section>
      <div className="imgCarta">
        <img src={cartaFoto}></img>

      </div>
      <div className="imgEntrada">
        <img src={entradas}></img>
      </div>
      <div className="platos">
        {
          cartaEntradas.map((plato,index)=>(
            <CardMenu key={index} plato={plato}/>
          ))
        }
      </div>
    </section>

  )
}
