import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActionButton from "../components/ActionButton";
import sidewaysLogo from "../assets/img/home/fadedName.png";
import textoSections from "../assets/img/home/textosSections.png";
import flutuante2 from "../assets/img/home/flutuante2.png";
import fotinha from "../assets/img/home/fotinha.png";
import radial from "../assets/img/home/radial.png";
import circulos from "../assets/img/home/circulos.png";


export default function Home() {
    return (
        <div className="page-container">
            <section id="section-inicial">
                <Navbar />

                <main className="content">
                    <div id="manchete" className="px-3 px-md-5">
                        <h2 id="manchete-opener">⸺ Jornada Minatech · Florianópolis</h2>
                        <h1>
                            Tecnologia <br />
                            feita por <span id="manchete-destaque">meninas, <br /> para meninas</span>
                        </h1>
                    </div>
                </main>

                <div id="card-flutuante" className="mx-3 mx-md-5">
                    <div className="row g-0 align-items-center flex-nowrap">
                        <div className="col card-flutuante-content p-3 p-md-4 p-lg-5">
                            <p>
                                Um programa gratuito que inspira jovens
                                <br />
                                meninas de escolas públicas a explorar
                                <br />
                                engenharia e tecnologia, porque o futuro
                                <br />
                                também é delas!
                            </p>
                            <div className="d-flex flex-wrap gap-2 gap-md-3 mt-3 botoes-card-flutuante">
                                <ActionButton to={"/Formulario"} text="Participar" />
                                <ActionButton to="" text="Apoie o Projeto" />
                            </div>
                        </div>
                        <div className="col-auto card-flutuante-visual pe-3">
                            <img src={sidewaysLogo} alt="logo" className="logo-flutuante" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-rosa">
                <div id="section-rosa-textos" className="ps-3 ps-md-4 ps-lg-5">
                    <p id="section-rosa-texto1">mais de</p>
                    <p id="section-rosa-texto2">150</p>
                    <p id="section-rosa-texto3">
                        meninas impactadas na <br />
                        grande Florianópolis!
                    </p>
                    <img src={circulos} alt="" />
                </div>

                <img id="radial-bg" src={radial} alt="" />
            </section>
            <section id="section-divider">
                <img src={textoSections} alt="palavras" className="img-fluid section-divider-image" />
                <div id="card-flutuante2" className="p-4 p-md-5">
                    <p>O Minatech acolhe</p>
                    <img src={flutuante2} alt="ilustração" className="img-fluid mt-3" />
                </div>
            </section>

            <section id="section-quemSomos" className="container-fluid py-5">
                <div className="row g-4 align-items-start justify-content-center">
                    <div id="quemSomos-texto" className="col-12 col-lg-7 order-2 order-lg-1 px-3 px-md-4 px-lg-5 text-center text-lg-start">
                        <h1>Quem Somos</h1>
                        <h2>
                            Corali e Engenheiros sem Fronteiras – núcleo <br />
                            Florianópolis
                        </h2>
                        <span className="divisor">⸺</span>
                        <p>
                            A Corali e os Engenheiros sem Fronteiras <br />
                            (Florianópolis), se uniram para organizar a <br />
                            Jornada Minatech.
                        </p>
                        <p>
                            Temos o sonho de inspirar meninas a <br />
                            conhecerem e seguirem carreiras tecnológicas, <br />
                            mostrando que elas têm capacidade e que <br />
                            essas profissões não são só para meninos.
                        </p>
                        <p>
                            Para isso, promovemos oficinas de lógica, <br />
                            matemática e física, junto com talks sobre <br />
                            profissões, soft skills, empreendedorismo, <br />
                            diversidade e empoderamento feminino.
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-flex justify-content-center px-3">
                        <img src={fotinha} alt="Grupo Minatech" className="img-fluid quemSomos-img" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}