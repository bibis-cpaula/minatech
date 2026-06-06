import "./Navbar.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MinaTech" id="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quem somos
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/OSCS">
                  OSCS
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inscrição
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Programação
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
