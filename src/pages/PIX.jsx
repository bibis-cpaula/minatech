import React, { useState } from 'react';
import './PIX.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PIX() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [copiado, setCopiado] = useState(false);

  const chavePix = 'minatech.floripa@gmail.com';

  const copiarPix = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const concluir = () => {
    alert(`Obrigado, ${nome}! Sua doação foi registrada.`);
  };

  return (
    <>
      <Navbar />
      <div className="pix-page">

  
      <main className="pix-container">
        <h2>
          Preencha as informações para se tornar um{' '}
          <span className="destaque">patrocinador.</span>
        </h2>

        <div className="pix-card">
          <h3 className="pix-section-title">Dados pessoais</h3>

          <label>Nome completo</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Email de contato</label>
          <input
            type="email"
            placeholder="SeuEmail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="pix-label">PIX</p>

          <div className="pix-qr-wrapper">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${chavePix}`}
              alt="QR Code PIX"
              className="pix-qr"
            />
          </div>

          <button className="pix-btn-link" onClick={copiarPix}>
            {copiado ? 'Copiado!' : 'Copiar link'}
          </button>

          <button className="pix-btn-concluir" onClick={concluir}>
            Concluir doação
          </button>
        </div>
      </main>
</div>
      <Footer />
    </>
  );
}

export default PIX;