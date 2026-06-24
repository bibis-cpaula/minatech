import "./formulario.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect, useRef, Fragment } from "react"

// Ícones do stepper (SVG inline — bootstrap-icons não está carregado, mesma técnica do Footer)
const ICONS = {
  pessoa: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
  telefone:
    "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z",
  pessoas:
    "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
  casa: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z",
  laptop:
    "M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zM2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5",
}

// Etapas do stepper lateral
const ETAPAS = [
  { label: "Dados pessoais", icon: ICONS.pessoa },
  { label: "Contato", icon: ICONS.telefone },
  { label: "Diversidade e inclusão", icon: ICONS.pessoas },
  { label: "Situação familiar", icon: ICONS.casa },
  { label: "Acesso digital", icon: ICONS.laptop },
]

const OPCOES_NEURO = ["Sim", "Não", "Não sei ao certo", "Prefiro não dizer"]

export default function Formulario() {
  // Destaque do botão de neurodivergência (envio é placeholder)
  const [neuro, setNeuro] = useState(null)

  // Scrollspy: etapa destacada conforme a seção que está em foco
  const [etapaAtiva, setEtapaAtiva] = useState(0)
  const secoesRef = useRef([])

  useEffect(() => {
    const onScroll = () => {
      const linha = window.innerHeight * 0.35 // linha de referência (35% da tela)
      let ativa = 0
      secoesRef.current.forEach((sec, idx) => {
        if (sec && sec.getBoundingClientRect().top <= linha) ativa = idx
      })
      setEtapaAtiva(ativa)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="formulario-page">
      <Navbar />

      <main className="formulario-main">
        <div className="container">
          <h1 className="formulario-titulo">
            Preencha o formulário abaixo para garantir <span>sua vaga.</span>
          </h1>

          <form className="formulario-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row formulario-grid">
              {/* ===== STEPPER (sticky + scrollspy) ===== */}
              <aside className="col-lg-3 formulario-stepper-col">
                <div className="formulario-stepper">
                  {ETAPAS.map((etapa, i) => (
                    <Fragment key={etapa.label}>
                      <div
                        className={
                          "formulario-step" +
                          (i <= etapaAtiva ? " is-ativo" : "") +
                          (i === etapaAtiva ? " is-atual" : "")
                        }
                      >
                        <span className="formulario-step-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d={etapa.icon} />
                          </svg>
                        </span>
                        <span className="formulario-step-label">{etapa.label}</span>
                      </div>

                      {i < ETAPAS.length - 1 && (
                        <div
                          className={
                            "formulario-conector" +
                            (i < etapaAtiva ? " is-preenchido" : "")
                          }
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </aside>

              {/* ===== CARDS ===== */}
              <div className="col-lg-9 formulario-cards-col">
                {/* Card 1 — Dados pessoais + Contato */}
                <section className="formulario-card">
                  <h2
                    className="formulario-section-title"
                    ref={(el) => (secoesRef.current[0] = el)}
                  >
                    Dados pessoais
                  </h2>

                  <div className="formulario-field">
                    <label className="formulario-label">Nome completo</label>
                    <input
                      type="text"
                      className="formulario-input"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 formulario-field">
                      <label className="formulario-label">Idade</label>
                      <input
                        type="number"
                        className="formulario-input"
                        placeholder="Quantos anos você tem?"
                      />
                    </div>
                    <div className="col-md-6 formulario-field">
                      <label className="formulario-label">Escolaridade</label>
                      <select className="formulario-input formulario-select" defaultValue="">
                        <option value="" disabled>
                          Selecione
                        </option>
                        <option>Ensino fundamental</option>
                        <option>Ensino médio</option>
                        <option>Ensino superior</option>
                        <option>Pós-graduação</option>
                      </select>
                    </div>
                  </div>

                  <h2
                    className="formulario-section-title formulario-section-title--mt"
                    ref={(el) => (secoesRef.current[1] = el)}
                  >
                    Contato
                  </h2>

                  <div className="formulario-field">
                    <label className="formulario-label">Telefone</label>
                    <input
                      type="tel"
                      className="formulario-input"
                      placeholder="+55 (00) 0000-0000"
                    />
                  </div>

                  <div className="formulario-field">
                    <label className="formulario-label">E-mail</label>
                    <input
                      type="email"
                      className="formulario-input"
                      placeholder="Seu@gmail.com"
                    />
                  </div>
                </section>

                {/* Card 2 — Diversidade e inclusão */}
                <section className="formulario-card">
                  <h2
                    className="formulario-section-title"
                    ref={(el) => (secoesRef.current[2] = el)}
                  >
                    Diversidade e inclusão
                  </h2>

                  <div className="formulario-field">
                    <label className="formulario-label">Você é neurodivergente?</label>
                    <div className="formulario-opcoes">
                      {OPCOES_NEURO.map((op) => (
                        <button
                          type="button"
                          key={op}
                          className={
                            "formulario-opcao" +
                            (neuro === op ? " is-selecionada" : "")
                          }
                          onClick={() => setNeuro(op)}
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="formulario-field">
                    <label className="formulario-label">Possui alguma alergia?</label>
                    <input
                      type="text"
                      className="formulario-input"
                      placeholder="Ex: amendoim, glúten, nenhuma...."
                    />
                  </div>
                </section>

                {/* Card 3 — Situação familiar */}
                <section className="formulario-card">
                  <h2
                    className="formulario-section-title"
                    ref={(el) => (secoesRef.current[3] = el)}
                  >
                    Situação familiar
                  </h2>

                  <div className="formulario-field">
                    <label className="formulario-label">Faixa salarial familiar</label>
                    <select className="formulario-input formulario-select" defaultValue="">
                      <option value="" disabled>
                        Selecione a faixa
                      </option>
                      <option>Até 1 salário mínimo</option>
                      <option>1 a 2 salários mínimos</option>
                      <option>2 a 3 salários mínimos</option>
                      <option>3 a 5 salários mínimos</option>
                      <option>Acima de 5 salários mínimos</option>
                    </select>
                  </div>

                  <div className="formulario-field">
                    <label className="formulario-label">
                      Quantas pessoas moram na sua casa?
                    </label>
                    <select className="formulario-input formulario-select" defaultValue="">
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5 ou mais</option>
                    </select>
                  </div>
                </section>

                {/* Card 4 — Acesso digital */}
                <section className="formulario-card">
                  <h2
                    className="formulario-section-title"
                    ref={(el) => (secoesRef.current[4] = el)}
                  >
                    Acesso digital
                  </h2>

                  <label className="formulario-label">
                    Quais dispositivos você tem em casa?
                  </label>

                  <div className="formulario-dispositivos">
                    <div className="formulario-dispositivo-row">
                      <label className="formulario-dispositivo">
                        <input type="checkbox" />
                        <span>Computador / notebook</span>
                      </label>
                      <select
                        className="formulario-input formulario-select formulario-qtd"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          qts
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3+</option>
                      </select>
                    </div>

                    <div className="formulario-dispositivo-row">
                      <label className="formulario-dispositivo">
                        <input type="checkbox" />
                        <span>Celular / Tablet</span>
                      </label>
                      <select
                        className="formulario-input formulario-select formulario-qtd"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          qts
                        </option>
                        <option>1-2</option>
                        <option>3-4</option>
                        <option>5+</option>
                      </select>
                    </div>

                    <div className="formulario-dispositivo-row">
                      <label className="formulario-dispositivo formulario-dispositivo--full">
                        <input type="checkbox" />
                        <span>Nenhum dos acima</span>
                      </label>
                    </div>
                  </div>
                </section>

                <button type="submit" className="formulario-enviar">
                  Inscreva-se já
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}