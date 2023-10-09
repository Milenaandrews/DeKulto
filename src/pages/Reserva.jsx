import Terraza from "../assets/images/terraza.jpg"
import "../pages/Reserva.css"
import { TextField } from "@mui/material"


export const Reserva = () => {
  return (
    <>
      <section className="reserva" id="reserva">
        {/* <h1 className="heading">Reservas</h1> */}
        <div className="row">
          <div className="image">
            <img src={Terraza}></img>
          </div>

          <form>
            <div className="titulo">
              <h3>Agenda tu reserva Aquí</h3>
            </div>
            <div className="inputs">
              <div className="nombre">
                <TextField id="outlined-basic" label="Nombre Completo" variant="filled" color="error" type="text"/>
              </div>

              <div className="telefono">
                <TextField id="outlined-basic" label="Telefono" variant="filled" color="error" type="number" />
              </div>

              <div className="mail">
                <TextField id="outlined-basic" label="Email" variant="filled" color="error" type="mail" />
              </div>

              <div className="invitados">
                <TextField id="outlined-basic" label="N° de Invitados" variant="filled" color="error" type="number" />
              </div>

              <div className="calendario">
                <TextField id="outlined-basic" variant="filled" type="datetime-local" color="error" />
              </div>


            </div>




          </form>


        </div>


      </section>
    </>
  )


}

