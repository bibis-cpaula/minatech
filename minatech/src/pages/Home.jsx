import "./Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ActionButton from "../components/ActionButton"
import sidewaysLogo from '../assets/img/home/fadedName.png'

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
                            <img src={sidewaysLogo} alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-rosa">

                <div id="section-rosa-textos">
                    <p id="section-rosa-texto1">mais de</p>
                    <p id="section-rosa-texto2">150</p>
                    <p id="section-rosa-texto3">meninas impactadas na <br /> grande Florianópolis!</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}