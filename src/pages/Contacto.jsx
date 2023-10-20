
import "../pages/Contacto.css"

const Contacto = () => {
    return (
        <div>
            <section className="contact" id="contact">
                <h1 className="heading">Reservas</h1>
                <div className="row">
                    <div className="mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.8285919915597!2d-70.71619262351344!3d-34.17629983505272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966344a8810d9595%3A0xeb70bb6a98652059!2sAv.%20Bombero%20Villalobos%20158%2C%202820205%20Rancagua%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1696732610147!5m2!1ses-419!2scl" width="550" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                   
                    </div>
                    <div className="content">
                        <h4>Dirección :</h4>
                        <h6>Bombero Villalobos 274</h6>
                        <h4>Mail:</h4>
                        <h6>dekulto@gmail.com</h6>
                        <h4>Telefono:  </h4>
                        <h6>+569920133486 </h6>
                        <h4>Horario de Atención:  </h4>
                        <h6>Martes a Domingo</h6>
                        <h6>13.00 a 23.00</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacto