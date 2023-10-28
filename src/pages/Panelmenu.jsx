import { Button, TextField } from "@mui/material"
import "./Panelmenu.css"
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query } from "firebase/firestore";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from "../firebase/Firebase";


export const Panelmenu = () => {

  //! funcion para guardar menu
  const initialMenu = {
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
    tipo: "",

  }
  const [menuform, setMenuform] = useState(initialMenu)
  const [currentid, setCurrentid] = useState("")


  const handleMenuForm = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setMenuform({
      ...menuform,
      [e.target.name]: e.target.value,
    })
  }
  const submitMenu = async (e) => {
    e.preventDefault()
    if (currentid === "") {
      try {
        // const collectionRef = collection(db, "cartaentradas")
        // await addDoc(collectionRef, {
        //   ...menuform
        // })
        await db.collection("cartaentradas").add(menuform)
      } catch (error) {
        console.log(error)
      }
      setMenuform({ ...initialMenu })
      // console.log(reservation)
      alert("Plato guardado con exito")
    } else {
      await db.collection("cartaentradas").doc(currentid).update(menuform)
      
      setCurrentid("")
      alert("plato actualizado")
    }
  }



  //!FUNCION PARA TRAER INFO DEL MENU
  const [menu, SetMenu] = useState([])

  useEffect(() => {

    const getMenu = async () => {
      try {
        // const collectionRef = collection(db, "cartaentradas");
        // const response = await getDocs(collectionRef)
        // const docs = response.docs.map((doc) => {
        //     const data = doc.data() //la informacion de cada documento que guarda firestore
        //     data.id = doc.id
        //     return data
        //     // console.log(data)
        // })
        db.collection("cartaentradas").onSnapshot((query) => {
          const docs = []
          query.forEach((doc) => {
            docs.push({
              ...doc.data(), id: doc.id

            })
            SetMenu(docs)
          })
        })

      } catch (error) {
        console.log(error)
      }
    }
    getMenu()
  }, [])


  //!Funcion para eliminar

  const eliminar = async (id) => {
    if (!window.confirm("Estas seguro de eliminar esto")) {
      return
    }
    await db.collection("cartaentradas").doc(id).delete()
  }

  //! Funcion para traer un plato

  const getPlatoById = async (id) => {
    const doc = await db.collection("cartaentradas").doc(id).get()
    setMenuform({
      ...doc.data()
    })
  }

  useEffect(() => {
    if (currentid === "") {
      setMenuform(initialMenu)
    } else {
      getPlatoById(currentid)
    }
  }, [currentid])




  return (
    <section >
      <div className="formulariomenu">
        <form onSubmit={submitMenu}>
          <div className="nombre">
            <TextField inputProps={{ type: "text", required: true }} value={menuform.nombre} onChange={handleMenuForm} name="nombre" id="outlined-basic" label="nombre" variant="filled" color="error" />
          </div>
          <div className="descripcion">
            <TextField inputProps={{ type: "text", required: true }} value={menuform.descripcion} name="descripcion" id="outlined-basic" label="Descripcion" variant="filled" color="error" onChange={handleMenuForm} />
          </div>
          <div className="precio">
            <TextField inputProps={{ type: "text", required: true }} value={menuform.precio} name="precio" id="outlined-basic" label="precio" variant="filled" color="error" onChange={handleMenuForm} />
          </div>
          <div className="imagen">
            <TextField inputProps={{ type: "text", required: true }} value={menuform.imagen} name="imagen" id="outlined-basic" label="Url Imagen" variant="filled" color="error" onChange={handleMenuForm} />
          </div>
          <div className="tipo">
            <TextField inputProps={{ type: "text", required: true }} value={menuform.tipo} name="tipo" id="outlined-basic" label="tipo" variant="filled" color="error" onChange={handleMenuForm} />
          </div>
          <div>
            <Button variant="contained" color="error" size="large" type="submit" sx={{ mt: 1, fontSize: 10 }} >guardar</Button>
          </div>

        </form>
      
      <div className="tablamenu">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Descripcion</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Url Imagen</TableCell>
                <TableCell align="right">tipo</TableCell>
                <TableCell align="right">Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((menu) => (
                <TableRow
                  key={menu.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {menu.id}
                  </TableCell>
                  <TableCell align="right">{menu.nombre}</TableCell>
                  <TableCell align="right">{menu.descripcion}</TableCell>
                  <TableCell align="right">{menu.precio}</TableCell>
                  <TableCell align="right">{menu.imagen}</TableCell>
                  <TableCell align="right">{menu.tipo}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary" size="large" onClick={() => setCurrentid(menu.id)} sx={{ fontSize: 10 }}>Editar</Button>
                    <Button variant="contained" color="error" size="large" onClick={() => eliminar(menu.id)} sx={{ fontSize: 10 }}>Eliminar</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      </div>


    </section>
  )
}
