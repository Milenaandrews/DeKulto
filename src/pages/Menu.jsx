import cartaFoto from "../assets/images/carta.jpg"
import entradas from "../assets/images/entradas.jpg"
import { CardMenu } from "../components/CardMenu"
import "../pages/Menu.css"
import entrada1 from "../assets/images/entrada1.jpg"
import entrada2 from "../assets/images/entrada2.jpg"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import nigiri from "../assets/images/nigiri.jpg"




export const Menu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {

    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "cartaentradas");
        const response = await getDocs(collectionRef)

        const docs = response.docs.map((doc) => {
          const data = doc.data() //la informacion de cada documento que guarda firestore
          data.id = doc.id
          return data
          // console.log(data)

        })
        setMenu(docs);


      } catch (error) {
        console.log(error)

      }

    }

    getMenu()
  }, [])

  console.log(menu)









  const cartaEntradas = [
    {
      nombre: "GYUTATAKI",
      precio: "$11.900",
      descripcion: "Finas láminas de lomo liso sellado a la sal con jengibre fresco, cebollín, y salsa ponzu",
      imagen: entrada1,

    },
    {
      nombre: "EDAMAME",
      precio: "$6.400",
      descripcion: "Poroto de soya cocido al vapor y salteado con aceite de sesamo, flor de sal y sishimi togarashi",
      imagen: entrada2,

    },
    {
      nombre: "Completo Italiano",
      precio: 364,
      descripcion: "ksalkjdslkdjlksajlkd",
      imagen: "https://tofuu.getjusto.com/orioneat-prod-resized/KrZue287dpHtDStBK-1200-1200.webp",

    },
  ]

  const cartaNigiri = [
    {
      nombre: "GYUTATAKI",
      precio: "$11.900",
      descripcion: "Finadsddds láminas de lomo liso sellado a la sal con jengibre fresco, cebollín, y salsa ponzu",
      imagen: entrada1,

    },
    {
      nombre: "EDAMAME",
      precio: "$6.400",
      descripcion: "Poroto de soya cocido al vapor y salteado con aceite de sesamo, flor de sal y sishimi togarashi",
      imagen: entrada2,

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
      <div className="imgTitulo">
        <img src={cartaFoto}></img>

      </div>

      <div className="imgCarta">
        <img src={entradas}></img>
      </div>
      <div className="platos">
        {
          menu.map((plato, index) => (
            <CardMenu key={index} plato={plato} />
          ))
        }
      </div>
      <div className="imgCarta">
        <img src={nigiri}></img>
      </div>
      <div className="platos">
        {
          cartaNigiri.map((plato, index) => (
            <CardMenu key={index} plato={plato} />
          ))
        }
      </div>



    </section>

  )
}
