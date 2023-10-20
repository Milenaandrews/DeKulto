import "./Home.css"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="content">
        <h3>fresh <span>food in the</span> morning </h3>
        <p>Elevando el Sushi a una Experiencia</p>
        <Button variant="contained" color="error" size="large" href="./menu" sx={{ fontSize: 13 }}>Carta</Button>

      </div>

    </section>
    
  )
    
    
}

export default Home