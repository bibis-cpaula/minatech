import "./Navbar.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar-custom">
        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="MinaTech" />
          </Link>

          <button
            className="navbar-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          <Link to="/">Quem somos</Link>
          <Link to="/OSCS">OSCS</Link>
          <Link to="/Formulario">Inscrição</Link>
          <Link to="/Programacao">Programação</Link>
          <Link to="/FAQ">FAQ</Link>
          <a
            href="#footerFinal"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false); // fecha o menu mobile
              document.getElementById("footerFinal")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}