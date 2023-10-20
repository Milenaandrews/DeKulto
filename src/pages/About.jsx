import TerrazaImg from "../assets/images/terraza.jpg"
import { Button } from "@mui/material"
import "../pages/About.css"
import FotoMesa from "../assets/images/fotomesa.jpg"


export const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About </span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={FotoMesa} alt="terraza" />
          </div>
          <div className="content">
            <h3>Qué nos hace especiales?</h3>
            <p>DeKulto gastro bar es un auténtico paraíso para los amantes del sushi. Desde el momento en que entras, te sumerges en una experiencia culinaria que no olvidarás fácilmente.</p>
            <p>Lo que hace que este restaurante se destaque es su enfoque en la frescura y la calidad de los ingredientes. Cada bocado es una explosión de sabor, y puedes notar la dedicación de los chefs en cada plato que sirven.</p>
            <p>Este restaurante combina lo mejor del sushi exquisito con tragos de autor innovadores, creando un paraíso para los amantes de la comida y la bebida.</p>
            <p>El menú es un testimonio de la pasión y la maestría que el equipo de Dekulto pone en cada plato. Desde los clásicos nigiri y rollos hasta creaciones únicas como el "Sakura Sunrise Roll," que combina salmón, palta y un toque de cítricos para una explosión de sabores inigualable. Cada bocado es una obra de arte culinaria.</p>
            <p>Los chefs son maestros en su oficio, y observarlos trabajar es una parte esencial de la visita. Son amigables y siempre dispuestos a responder preguntas o hacer recomendaciones.</p>         
            <p>El ambiente es moderno y elegante, con una decoración que combina elementos tradicionales japoneses con toques contemporáneos</p>


          
            <Button variant="contained" color="error" size="large" href="./contacto" sx={{ fontSize: 13 }}>Contacto</Button>

          </div>
        </div>
      </section>

    </div>
  )
}
