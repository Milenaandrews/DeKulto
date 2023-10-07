import "./Home.css"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="content">
        <h3>fresh <span>food in the</span> morning </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, ipsam.</p>
        <Button variant="contained" color="error" size="large" href="./menu">Carta</Button>

      </div>

    </section>
    
  )
    
    
}

export default Home