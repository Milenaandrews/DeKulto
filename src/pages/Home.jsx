import "./Home.css"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="content">
        <h3>Desde <span> el mar </span> a tu mesa </h3>
        <p>Elevando el Sushi a una Experiencia</p>
        <Button variant="contained" color="error" size="large" href="./menu" sx={{ fontSize: 13 }}>Carta</Button>

      </div>

    </section>
    
  )
    
    
}

export default Home