import "./OSCS.css";

import corali from "../assets/img/oscs/logoCorali.png";
import esf from "../assets/img/oscs/logoEngenheiros.png";

import crea from "../assets/img/oscs/crea.png";
import neoway from "../assets/img/oscs/neoway.png";
import hogar from "../assets/img/oscs/hogar.png";
import bediverse from "../assets/img/oscs/bediverse.png";
import morroSilicio from "../assets/img/oscs/morrosilicio.png";
import meSalva from "../assets/img/oscs/mesalva.png";

function OSCS() {
    const oscs = [
        {
            id: 1,
            nome: "Corali",
            descricao:
                "A Corali é uma OSC dedicada a transformar a realidade de mulheres em situação de vulnerabilidade, promovendo sua inclusão no ecossistema de tecnologia e inovação.",
            logo: corali,
        },
        {
            id: 2,
            nome: "Engenheiros Sem Fronteiras",
            descricao:
                "A Engenheiros Sem Fronteiras (Núcleo Florianópolis) é uma OSC que utiliza o conhecimento técnico da engenharia para promover transformações sociais e ambientais.",
            logo: esf,
        },
    ];

    const parceiros = [
        crea,
        neoway,
        hogar,
        bediverse,
        morroSilicio,
        meSalva,
    ];

    return (
        <main className="oscs-page">

            <section className="container py-5">

                {oscs.map((osc) => (
                    <div className="osc-card mb-5" key={osc.id}>
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <p className="osc-description">
                                    {osc.descricao}
                                </p>
                            </div>

                            <div className="col-lg-6 text-center">
                                <img
                                    src={osc.logo}
                                    alt={osc.nome}
                                    className="osc-logo"
                                />
                            </div>

                        </div>
                    </div>
                ))}

            </section>

            <section className="container partnerships-section">

                <div className="section-title">
                    <hr />
                    <h2>Parcerias</h2>
                    <p>
                        Empresas e instituições que apoiam o projeto
                    </p>
                </div>

                <div className="row justify-content-center align-items-center g-5 mt-4">

                    {parceiros.map((logo, index) => (
                        <div
                            className="col-6 col-md-4 col-lg-2 text-center"
                            key={index}
                        >
                            <img
                                src={logo}
                                alt={`Parceiro ${index + 1}`}
                                className="partner-logo"
                            />
                        </div>
                    ))}

                </div>

            </section>

        </main>
    );
}

export default OSCS;