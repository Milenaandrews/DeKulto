import Terraza from "../assets/images/terraza.jpg"
import "../pages/Reserva.css"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import moment from "moment"
import { db } from "../firebase/Firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"


export const Reserva = () => {
  const initialReservation = {
    nombre: "",
    telefono: "",
    mail: "",
    invitados: "",
    calendario: "",

  }
  const [reservation, setReservation] = useState(initialReservation)

  const handleReservationForm = (e) => {

    // console.log(e.target.name)
    // console.log(e.target.value)
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    })
  }

  const submitReservation = async (e) => {
    e.preventDefault()

    try {
      await db.collection("Reservas").add(reservation)

    } catch (error) {
      console.log(error)

    }
    setReservation({ ...initialReservation })

    // console.log(reservation)
    alert("Reserva Realizada con éxito")


  }

  return (
    <>
      <section className="reserva" id="reserva">
        {/* <h1 className="heading">Reservas</h1> */}
        <div className="row">
          <div className="image">
            <img src={Terraza}></img>
          </div>

          <form onSubmit={submitReservation}>
            <div className="titulo">
              <h3>Agenda tu reserva Aquí</h3>
            </div>
            <div className="inputs">
              <div className="nombre">
                <TextField inputProps={{ type: "text", required: true }} value={reservation.nombre} name="nombre" onChange={handleReservationForm} id="outlined-basic" label="Nombre Completo" variant="filled" color="error" />
              </div>

              <div className="telefono">
                <TextField value={reservation.telefono} name="telefono" onChange={handleReservationForm} id="outlined-basic" label="Telefono" variant="filled" color="error" type="number" inputProps={{required: true }} />
              </div>

              <div className="mail">
                <TextField value={reservation.mail} name="mail" onChange={handleReservationForm} id="outlined-basic" label="Email" variant="filled" color="error" type="email"
                inputProps={{required: true }}/>
              </div>

              <div className="invitados">
                <TextField inputProps={{ min: 1, max: 15, required:true }} value={reservation.invitados} name="invitados" onChange={handleReservationForm} id="outlined-basic" label="N° de Invitados" variant="filled" color="error" type="number"  />
              </div>

              <div className="calendario">
                <TextField value={reservation.calendario} inputProps={{ min: moment().format("YYYY-MM-DD hh:mm"), required:true }} name="calendario" onChange={handleReservationForm} id="outlined-basic" variant="filled" type="datetime-local" color="error" />
              </div>
            </div>
            <Button variant="contained" color="error" size="large" type="submit" sx={{mt:1, fontSize: 10}} >Enviar</Button>
          </form>

        </div>


      </section>
    </>
  )


}

