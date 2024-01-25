import { Link } from "react-router-dom";
//import logo from "./Images/navlogo.png";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
            height:" 150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0px 60px",
          borderBottom: "1px solid white",
          
        }}
      >
        <div
          className=""
          style={{
            // padding: "10px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="col-sm-12 col-md-6"
            style={{
              width: "300px",
            }}
          >
            <img
              src=""
              alt=""
              style={{ width: "7px", height: "270px", marginTop: "-3%" }}
            />
          </div>
          <hr />
          <div
            className="col-xs-6 col-md-3"
            style={{
              textAlign: "center",
            }}
          >
            <p
              className="text-justify"
              style={{
                color: "white",
                fontSize: "19px",
              }}
            >
           "LuxRealty Real Estate, where luxury meets home. Our mission is to curate exceptional living experiences by connecting discerning clients with premium properties. Elevate your lifestyle with our exclusive portfolio of luxurious homes and unparalleled service. Welcome to a world where opulence meets comfort, welcome to LuxRealty Real Estate."
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <div
              className="col-xs-6 col-md-3"
              style={{
                width: "300px",
                textAlign: "left",
              }}
            >
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/burgers" style={{ color: "white" }}>
                    OffPlan
                  </Link>
                </li>
                <li>
                  <Link to="/cart" style={{ color: "white" }}>
                    Cart
                  </Link>
                </li>
                <li>Contact us at LuxRealty@gmail.com</li>
                <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
                <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
                <FontAwesomeIcon icon={faWhatsapp} className="footer-icons" />
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <div
          className="row"
          style={{ textAlign: "center", marginLeft: "20px" }}
        >
          <div
            className="col-md-8 col-sm-6 col-xs-12"
            style={{
              padding: "0px 30px",
            }}
          >
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <Link to="/"> LuxRealty</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;