import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
    <div className="footer">
        <h3>Better Days Weather App</h3>
        <ul className="socials">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy;2023 designed by <span>Milenaria</span></p>
    </div>
</footer>
  )
}
