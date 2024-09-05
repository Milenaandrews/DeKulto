import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  // const scrollRef = React.useRef(null);
  return (
    <footer>
    <div className="footer">
        <h3>Buscanos en nuestras redes sociales</h3>
        <ul className="socials">
                        <li><Link to="https://www.instagram.com/dekultorancagua/?hl=es-la"><InstagramIcon sx={{ fontSize: 40 }} color="error"/></Link></li>
                        <li><Link to="#"><WhatsAppIcon sx={{ fontSize: 40 }} color="error"/></Link></li>
                        <li><Link to="https://web.facebook.com/profile.php?id=100091850605468&ref=xav_ig_profile_web&_rdc=1&_rdr"><FacebookIcon sx={{ fontSize: 40 }} color="error"/></Link></li>
       </ul>
    </div>
    
    <div className="footer-bottom">
        <p>copyright &copy;2023 designed by <span>WebsiteChile</span></p>
    </div>
</footer>
  )
}
