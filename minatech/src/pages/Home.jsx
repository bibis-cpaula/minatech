import "./Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ActionButton from "../components/ActionButton"
import sidewaysLogo from '../assets/img/fadedName.png'

export default function Home() {
    return (
        <div className="page-container">
            <section id="section-inicial">
                <Navbar />

                <main className="content">
                    <div id="manchete">
                        <div>
                            <h2 id="manchete-opener">⸺ Jornada Minatech · Florianópolis</h2>
                            <h1>Tecnologia <br /> feita por <span id="manchete-destaque">meninas, <br /> para meninas</span></h1>
                        </div>
                    </div>
                </main>
                <div id="card-flutuante" className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <p>
                                Um programa gratuito que inspira jovens
                                <br />
                                meninas de escolas públicas a explorar
                                <br />
                                engenharia e tecnologia, porque o futuro
                                <br />
                                também é delas!
                            </p>

                            <div className="d-flex gap-3 mt-3 botoes-card-flutuante">
                                <ActionButton text="Participar" />
                                <ActionButton text="Apoie o Projeto" />
                            </div>
                        </div>

                        <div className="col-auto">
                            <img src={sidewaysLogo} alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-rosa">

                <div id="teste123"></div>
            </section>

            <Footer />
        </div>
    )
}