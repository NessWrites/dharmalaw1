import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection footerInfo">
          <img className="footerLogo" src={Logo} alt="Logo kancelarii" />
          <p className="footerDescription">
            I provide legal services in the office and remotely, adapting to
             the needs of clients across the country.
          </p>
        </div>

        <div className="footerSection footerContact">
          <h3 className="footerHeading">Contact Details</h3>
          <address className="footerAddress">
            <p>
              E-mail: <a href="mailto:martyna@gmail.com">
narayan@dharmalawpc.com.com</a>
            </p>
            <p>
              Telefon: <a href="tel:+123456789">+1 925-822-3440</a>
            </p>
            <p>
              FaceBook:{" "}
              <a
                href="https://www.facebook.com/1375dharmalawpc"
                target="_blank"
                rel="noopener noreferrer"
              >
                dharmalawpc
              </a>
            </p>
          </address>
        </div>

        <div className="footerSection footerSpecialties">
          <h3 className="footerHeading">Areas of Expertise</h3>
          <nav aria-label="Obszary specjalizacji">
            <ul className="footerLinks">
              <li>
                <Link to="/prawo-cywilne">Civil Law</Link>
              </li>
              <li>
                <Link to="/prawo-rodzinne">Family Law</Link>
              </li>
              <li>
                <Link to="/prawo-gospodarcze">Commercial Law</Link>
              </li>
              <li>
                <Link to="/prawo-pracy">Labor Law</Link>
              </li>
              <li>
                <Link to="/prawo-nieruchomosci">Real E-state Law</Link>
              </li>
              <li>
                <Link to="/prawo-danych">Personal Data Protection Law</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCredit">Copyrights</p>
      </div>
    </footer>
  );
}