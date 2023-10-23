import { TextField } from "@mui/material"
import "../pages/Login.css"


export const Login = () => {
    return (
        <div className="formulario">
            <form >
                <div className="inputs">
                    <div className="mail">
                        <TextField inputProps={{ type: "mail", required: true }} name="mail" id="outlined-basic" label="Email" variant="filled" color="error" />
                    </div>
                    <div className="constrasena">
                        <TextField inputProps={{ type: "text", required: true }} name="constraseña" id="outlined-basic" label="Contraseña" variant="filled" color="error" />
                    </div>                  
                    
                </div>


            </form>
        </div>
    )
}
