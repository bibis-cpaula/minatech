import "./Programacao.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import vrImage from "../assets/img/programacao/vrImage.png"
import depoimento1 from "../assets/img/programacao/depoimento1.png"
import depoimento2 from "../assets/img/programacao/depoimento2.png"
import lista1 from "../assets/img/programacao/lista1.png"
import lista2 from "../assets/img/programacao/lista2.png"
import lista3 from "../assets/img/programacao/lista3.png"
import lista4 from "../assets/img/programacao/lista4.png"
import programacao1 from "../assets/img/programacao/programacao1.png"
import programacao2 from "../assets/img/programacao/programacao2.png"
import apresentacao from "../assets/img/programacao/apresentacao.png"
import lab from "../assets/img/programacao/lab.png"
import workship from "../assets/img/programacao/workship.png"
import { useState } from "react"

export default function Programacao() {

    const eventos = [
        {
            id: 1,
            data: "01/05",
            dia: "Sábado",
            descricao: "Rodas de conversa",
            imagem: lista1,
            alimentacao: "Coffee Break",
            local: "Sebrae HUB — SC 401",
            horario: "13:45 às 16:45",
            saida: "13:00",
            encontro: "Recepção Principal",
            duracao: "3 horas",
            cronograma: [
                "Abertura (Boas-vindas)",
                "Apresentação Minatech",
                "Organização de bate-papo",
                "Perguntas e respostas",
                "Finalização"
            ],
            imagemGrande: vrImage
        },
        {
            id: 2,
            data: "15/05",
            dia: "Domingo",
            descricao: "Workshop de IA",
            imagem: lista2,
            alimentacao: "Coffee Break",
            local: "Auditório Principal",
            horario: "14:00 às 18:00",
            saida: "13:30",
            encontro: "Estacionamento B",
            duracao: "4 horas",
            cronograma: [
                "Abertura (Boas-vindas)",
                "Apresentação Minatech",
                "Testes com IA",
                "Intervalo para lanche",
                "Finalização"
            ],
            imagemGrande: workship
        },
        {
            id: 3,
            data: "28/05",
            dia: "Sexta",
            descricao: "Palestras",
            imagem: lista3,
            alimentacao: "Coffee Break",
            local: "Sala 02",
            horario: "19:00 às 22:00",
            saida: "18:00",
            encontro: "Portão Central",
            duracao: "3 horas",
            cronograma: [
                "Abertura (Boas-vindas)",
                "Apresentação Minatech",
                "Palestras",
                "Discussão",
                "Finalização"
            ],
            imagemGrande: apresentacao
        },
        {
            id: 4,
            data: "05/06",
            dia: "Sexta",
            descricao: "Laboratório",
            imagem: lista4,
            alimentacao: "Coffee Break",
            local: "Endereço laboratório",
            horario: "15:00 às 19:00",
            saida: "14:30",
            encontro: "Portão Central",
            duracao: "4 horas",
            cronograma: [
                "Abertura (Boas-vindas)",
                "Apresentação Minatech",
                "Atividade laboratório",
                "Intervalo para lanche",
                "Finalização"
            ],
            imagemGrande: lab
        }
    ]

    const [eventoSelecionado, setEventoSelecionado] = useState(eventos[0])
    const [mostrarExtra, setMostrarExtra] = useState(false)

    const handleSelecionarEvento = (evento) => {
        setEventoSelecionado(evento)
        setMostrarExtra(false)
    }

    return (
        <div className="programacao-page">
            <Navbar />

            <main className="container programacao-content">

                <section className="sidebar-programacao">
                    <h1>Programação</h1>
                    <p>Data de todos os eventos</p>

                    <div className="eventos-lista">
                        {eventos.map((evento) => (
                            <div
                                key={evento.id}
                                className={`evento-card ${eventoSelecionado.id === evento.id ? "ativo" : ""}`}
                                onClick={() => handleSelecionarEvento(evento)}
                            >
                                <div>
                                    <h3>{evento.data}</h3>
                                    <p>{evento.descricao}</p>
                                </div>

                                <img src={evento.imagem} alt={evento.descricao} />
                            </div>
                        ))}
                    </div>

                </section>

                <section className="evento-detalhes">

                    {!mostrarExtra ? (
                        <img
                            src={eventoSelecionado.imagemGrande || vrImage}
                            alt={eventoSelecionado.descricao}
                            className="imagem-evento"
                        />
                    ) : (
                        <div className="infos-extras-container">
                            <h2 className="infos-extras-titulo">Informações</h2>

                            <div className="info-box">
                                <h4>Horário de saída</h4>
                                <p>{eventoSelecionado.saida || "Não definido"}</p>
                            </div>

                            <div className="info-box">
                                <h4>Local de encontro</h4>
                                <p>{eventoSelecionado.encontro || "Não definido"}</p>
                            </div>

                            <div className="info-box">
                                <h4>Cronograma</h4>
                                {Array.isArray(eventoSelecionado.cronograma) && eventoSelecionado.cronograma.length > 0 ? (
                                    <ul className="cronograma-lista">
                                        {eventoSelecionado.cronograma.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{eventoSelecionado.cronograma || "Não definido"}</p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="infos-evento">
                        <h2>{eventoSelecionado.dia}</h2>
                        <span>{eventoSelecionado.data}/2026</span>

                        <div className="info-box">
                            <h4>Tema</h4>
                            <p>{eventoSelecionado.descricao}</p>
                        </div>

                        <div className="info-box">
                            <h4>Alimentação</h4>
                            <p>{eventoSelecionado.alimentacao}</p>
                        </div>

                        <div className="info-box">
                            <h4>Local</h4>
                            <p>{eventoSelecionado.local}</p>
                        </div>

                        <div className="info-box">
                            <h4>Horário</h4>
                            <p>{eventoSelecionado.horario}</p>
                        </div>

                        <button
                            className="btn-seta"
                            onClick={() => setMostrarExtra(!mostrarExtra)}
                            title={mostrarExtra ? "Voltar para imagem" : "Ver mais informações"}>
                            {mostrarExtra ? "❮" : "❯"}
                        </button>

                    </div>
                </section>
            </main>

            <section className="programacoes-passadas">

                <h2 className="programacoes-passadas-titulo">
                    Programações Passadas
                </h2>

                <div className="programacao-passada-card">
                    <img
                        src={programacao1}
                        alt=""
                        className="programacao-passada-img" />

                    <div className="programacao-passada-conteudo">
                        <p className="programacao-passada-texto">
                            Nossa imersão no Laboratório de Química do IFSC,
                            conduzida pelas professoras Berenice e Gisele,
                            foi uma vitrine sobre a versatilidade da Engenharia
                            Química. Além de explorarmos as áreas de atuação e as
                            crescentes oportunidades do mercado, vivenciamos a prática
                            da transformação e o descarte correto de efluentes.
                        </p>

                        <button className="programacao-passada-btn">
                            Veja mais
                        </button>
                    </div>
                </div>

                <div className="programacao-passada-card programacao-passada-card-reverso">
                    <img
                        src={programacao2}
                        alt=""
                        className="programacao-passada-img" />

                    <div className="programacao-passada-conteudo">
                        <p className="programacao-passada-texto">
                            Com a participação especial do Time Curie, do Senai,
                            e da professora Daniela Suzuki, acompanhada por suas
                            alunas graduandas e doutorandas da UFSC, vivenciamos
                            uma troca de experiências. As atividades mostraram
                            compartilhamento de trajetórias reais e conhecimentos
                            técnicos avançados nas áreas de engenharia e tecnologia.
                        </p>

                        <button className="programacao-passada-btn">
                            Veja mais
                        </button>
                    </div>

                </div>

            </section>

            <section className="depoimentos-section">

                <h2 className="depoimentos-titulo">
                    Depoimentos de ex-alunas
                </h2>

                <div className="depoimento-card">
                    <img
                        src={depoimento1}
                        alt=""
                        className="depoimento-foto" />
                    <div className="depoimento-conteudo">
                        <h3 className="depoimento-nome">
                            Vitória da Rosa
                        </h3>

                        <p className="depoimento-texto">
                            Minha jornada no MinaTech, em 2022 e 2023, foi uma grande
                            fonte de inspiração e crescimento. O programa me ajudou
                            a descobrir caminhos na Engenharia e Tecnologia,
                            contribuindo para minha formação em Engenharia de Software
                            e para meu desenvolvimento profissional.
                        </p>
                    </div>
                </div>

                <div className="depoimento-card depoimento-card-reverso">
                    <img
                        src={depoimento2}
                        alt=""
                        className="depoimento-foto" />
                    <div className="depoimento-conteudo">
                        <h3 className="depoimento-nome">
                            Maria Eduarda
                        </h3>

                        <p className="depoimento-texto">
                            Participar do projeto entre 2020 e 2022 transformou minha visão de futuro e fortaleceu minha confiança na programação. Hoje, cursando Ciência da Computação, reconheço o quanto essa experiência contribuiu para minha base acadêmica e profissional.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

        </div>

    )
}