import TerrazaImg from "../assets/images/terraza.jpg"
import { Button } from "@mui/material"
import "../pages/About.css"


export const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About </span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={TerrazaImg} alt="terraza" />
          </div>
          <div className="content">
            <h3>Qué nos hace especiales?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, delectus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, dolore?</p>
            <Button variant="contained" color="error" size="large" href="./contacto">Contacto</Button>

          </div>
        </div>
      </section>

    </div>
  )
}
