import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";
import { Button } from "@mui/material";
import "./Panelreservas.css"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Panelreservas = () => {

    const [reservas, SetReservas] = useState([])

    useEffect(() => {

        const getReservas = async () => {
            try {
                db.collection("Reservas").onSnapshot((query) => {
                    const docs = []
                    query.forEach((doc) => {
                        docs.push({
                            ...doc.data(), id: doc.id

                        })
                        SetReservas(docs)
                    })
                })


            } catch (error) {
                console.log(error)

            }

        }

        getReservas()
    }, [reservas])

    const eliminar = async (id) => {
        if (!window.confirm("Estas seguro de eliminar esto")) {
          return
        }
        await db.collection("Reservas").doc(id).delete()
      }


    return (

        <section>
            <div className="tabla">
                <h1>Panel de Reservas</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Telefono</TableCell>
                                <TableCell align="right">mail</TableCell>
                                <TableCell align="right">Invitados</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">Accion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservas.map((reserva) => (
                                <TableRow
                                    key={reserva.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {reserva.id}
                                    </TableCell>
                                    <TableCell align="right">{reserva.nombre}</TableCell>
                                    <TableCell align="right">{reserva.telefono}</TableCell>
                                    <TableCell align="right">{reserva.mail}</TableCell>
                                    <TableCell align="right">{reserva.invitados}</TableCell>
                                    <TableCell align="right">{reserva.calendario}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="secondary" size="large" href="./contacto" sx={{ fontSize: 10 }}>Editar</Button>
                                        <Button variant="contained" color="error" size="large" sx={{ fontSize: 10 }} onClick={() => eliminar(reserva.id)}>Eliminar</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>





    )
}
