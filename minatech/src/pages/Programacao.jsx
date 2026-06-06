import "./Programacao.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import vrImage from "../assets/img/programacao/vr.png"

export default function Programacao() {
    return (
        <div className="programacao-page">

            <Navbar />

            <main className="container programacao-content">

                <section className="sidebar-programacao">

                    <h1>Programação</h1>
                    <p>Data de todos os eventos</p>

                    <div className="eventos-lista">

                        <div className="evento-card ativo">
                            <div>
                                <h3>01/05</h3>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                </p>
                            </div>

                            <img src={vrImage} alt="" />
                        </div>

                        <div className="evento-card">
                            <div>
                                <h3>15/05</h3>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                </p>
                            </div>

                            <img src={vrImage} alt="" />
                        </div>

                    </div>
                </section>

               
                <section className="evento-detalhes">

                    <img src={vrImage} alt="" className="imagem-evento" />

                    <div className="infos-evento">

                        <h2>Sábado</h2>
                        <span>01/05/2026</span>

                        <div className="info-box">
                            <h4>Tema</h4>
                            <p>Rodas de conversa</p>
                        </div>

                        <div className="info-box">
                            <h4>Alimentação</h4>
                            <p>Coffee Break</p>
                        </div>

                        <div className="info-box">
                            <h4>Local</h4>
                            <p>Sebrae HUB — SC 401</p>
                        </div>

                        <div className="info-box">
                            <h4>Horário</h4>
                            <p>13:45 às 17:45</p>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    )
}