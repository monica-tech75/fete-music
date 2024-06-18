import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { PiVideoCameraFill } from "react-icons/pi";
function Footer() {
  return (
    <footer>
      <section className="rubrique">
        <h2>RUBRIQUES</h2>
        <div className="regroupe">
          <div>
            <a href="#!">ACTUALITÉS</a>
            <a href="#!">PARTENAIRES</a>
            <a href="#!">ÉVÉNEMENT</a>
            <a href="#!">ESPACE PRESSE</a>
          </div>
          <div>
            <a href="#!">ARCHIVES</a>
            <a href="#!">PROGRAMME</a>
            <a href="#!">EN PRATIQUE</a>
            <a href="#!">CONTACTEZ-NOUS !</a>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>CONTACT</h2>
        <p>
          Pour toute question ou information sur la Fête de la Musique,n'hésitez
          pas à nous contacter. Accédez au formulaire de contact.
        </p>
      </section>

      <section className="nous-suivre">
        <h2>NOUS SUIVRE</h2>
        <span>
          <FaFacebook className="facebook" />
          <BsTwitterX className="twitter" />
          <FaInstagram className="insta" />
        </span>
      </section>
    </footer>
  );
}
export default Footer;
