import "./Home.css"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="content">
        <h3>Elevando <span> el sushi </span> a una experiencia </h3>
        <p>Busca nuestra carta de tragos de autor</p>
        <Button variant="contained" color="error" size="large" href="./menu" sx={{ fontSize: 13 }}>Carta</Button>

      </div>

    </section>
    
  )
    
    
}

export default Home