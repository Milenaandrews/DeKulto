import cartaFoto from "../assets/images/carta.jpg"
import entradas from "../assets/images/entradas.jpg"
import { CardMenu } from "../components/CardMenu"
import "../pages/Menu.css"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import nigiriImg from "../assets/images/nigiri.jpg"




export const Menu = () => {

  // const [menu, setMenu] = useState([]);

  const [entrada, setEntrada] = useState([])
  const [nigiri, setNigiri] = useState([])
  const [makimono, setMakimono] = useState([])

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
        setEntrada(docs.filter((doc) => doc.tipo === "entrada"));
        setNigiri(docs.filter((doc) => doc.tipo === "nigiri"));
        setMakimono(docs.filter((doc) => doc.tipo === "makimono"));
      } catch (error) {
        console.log(error)
      }
    }
    getMenu()
  }, [])


  // const cartaEntradas = [
  //   {
  //     nombre: "GYUTATAKI",
  //     precio: "$11.900",
  //     descripcion: "Finas láminas de lomo liso sellado a la sal con jengibre fresco, cebollín, y salsa ponzu",
  //     imagen: entrada1,

  //   },
  //   {
  //     nombre: "EDAMAME",
  //     precio: "$6.400",
  //     descripcion: "Poroto de soya cocido al vapor y salteado con aceite de sesamo, flor de sal y sishimi togarashi",
  //     imagen: entrada2,

  //   },
  // const cartaNigiri = [
  //   {
  //     nombre: "GYUTATAKI",
  //     precio: "$11.900",
  //     descripcion: "Finas láminas de lomo liso sellado a la sal con jengibre fresco, cebollín, y salsa ponzu",
  //     imagen: entrada1,

  //   },
  //   {
  //     nombre: "EDAMAME",
  //     precio: "$6.400",
  //     descripcion: "Poroto de soya cocido al vapor y salteado con aceite de sesamo, flor de sal y sishimi togarashi",
  //     imagen: entrada2,

  //   },
  //  
  // ]


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
          entrada.map((plato) => (
            <CardMenu key={plato.id} plato={plato} />
          ))
        }
      </div>
      <div className="imgCarta">
        <img src={nigiriImg}></img>
      </div>
      <div className="platos">
        {
          nigiri.map((plato) => (
            <CardMenu key={plato.id} plato={plato} />
          ))
        }
      </div>
      <div className="imgCarta">
        <img src="https://res.cloudinary.com/dzppqa6a9/image/upload/v1697813973/DeKulto/makimonos_gyshxr.jpg"></img>
      </div>
      <div className="platos">
        {
          makimono.map((plato) => (
            <CardMenu key={plato.id} plato={plato} />
          ))
        }
      </div>



    </section>

  )
}
