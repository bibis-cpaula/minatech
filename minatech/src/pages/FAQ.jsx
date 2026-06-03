import { useState } from "react";
import "./FAQ.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    id: 1,
    question: "E possivel ganhar um certificado?",
    answer: "Sim, haverá certificado ao final da Jornada Minatech. Quem tiver mais de 75% de presença ganhará o certificado da participação na Jornada Minatech e concorrerá a sorteio de brindes e premiações.",
  },
  {
    id: 2,
    question: "Onde sera a jornada Minatech?",
    answer: "A nossa base sera na Neoway, Itacorubi, Florianopolis. Outras atividades envolvem visitas aos laboratorios e empresas de tecnologia.",
  },
  {
    id: 3,
    question: "Precisa da autorizacao de responsaveis?",
    answer: "Sim, as que são menores de idade precisam entregar a autorização da pessoa responsável. Para isso enviaremos um termo de responsabilidade que deverá ser assinado pela pessoa responsável.",
  },
  {
    id: 4,
    question: "Como os horarios e a organizacao do dia vao ser informados?",
    answer: "Todas as participantes serão incluídas em um grupo de whatsapp. Por ali passaremos todas as informações e tiraremos todas as dúvidas. ",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="faq-main container">
        <h1 className="faq-title">Perguntas mais frequentes</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={"faq-item" + (openId === faq.id ? " faq-item--open" : "")}
            >
              <button
                className="faq-question"
                onClick={() => toggle(faq.id)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openId === faq.id ? "v" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}