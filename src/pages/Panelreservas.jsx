import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";
import { Button, Table, TableBody, TableHead } from "@mui/material";
import "./Panelreservas.css"

export const Panelreservas = () => {

    const [reservas, SetReservas] = useState([])

    useEffect(() => {

        const getReservas = async () => {
            try {
                const collectionRef = collection(db, "Reservas");
                const response = await getDocs(collectionRef)

                const docs = response.docs.map((doc) => {
                    const data = doc.data() //la informacion de cada documento que guarda firestore
                    data.id = doc.id
                    return data
                    // console.log(data)

                })

                SetReservas(docs)


            } catch (error) {
                console.log(error)

            }

        }

        getReservas()
    }, [reservas])
    return (
        <section>
            <div className="tabla">
                <Table>
                    <TableHead>
                        <tr>
                            <th>#</th>
                            <th>nombre</th>
                            <th>telefono</th>
                            <th>email</th>
                            <th>invitados</th>
                            <th>fecha</th>
                            <th>Action</th>

                        </tr>
                    </TableHead>

                    {reservas.map(reserva => (
                        <TableBody key={reserva.id}>
                            <tr>
                                <td>{reserva.nombre}</td>
                                <td>{reserva.telefono}</td>
                                <td>{reserva.mail}</td>
                                <td>{reserva.invitados}</td>
                                <td>{reserva.calendario}</td>
                                <td>
                                    <Button color="error">Editar</Button>
                                    <Button color="error">Eliminar</Button>
                                </td>
                            </tr>

                        </TableBody>
                    ))}
                </Table>
            </div>
        </section>
    )
}
