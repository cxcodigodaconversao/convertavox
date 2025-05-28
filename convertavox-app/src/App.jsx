
import { useState } from 'react';

const markers = [
  { label: "Fala rápida e direta", profile: "D" },
  { label: "Fala animada e com histórias", profile: "I" },
  { label: "Fala pausada e cuidadosa", profile: "S" },
  { label: "Fala técnica e analítica", profile: "C" },
  { label: "Tom de voz firme e decidido", profile: "D" },
  { label: "Tom de voz expressivo e emocional", profile: "I" },
  { label: "Tom de voz suave e estável", profile: "S" },
  { label: "Tom de voz neutro e racional", profile: "C" },
  { label: "Olhar direto e assertivo", profile: "D" },
  { label: "Sorriso, contato visual constante", profile: "I" },
  { label: "Expressão calma, receptiva", profile: "S" },
  { label: "Expressão séria, analítica", profile: "C" }
];

const suggestions = {
  D: {
    label: "Dominante",
    approach: "Seja direto, foque em resultado e ROI.",
    trigger: "Resultados tangíveis, liderança, ganho de tempo",
    objection: "Já tentei de tudo, não tenho tempo pra enrolação.",
    response: "Esse processo é direto ao ponto e gera ROI visível em poucas semanas."
  },
  I: {
    label: "Influente",
    approach: "Conecte com emoção e energia positiva.",
    trigger: "Pertencimento, apoio, entusiasmo",
    objection: "Será que vou ter alguém pra me ajudar de verdade?",
    response: "Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho."
  },
  S: {
    label: "Estável",
    approach: "Acolha, ofereça passo a passo e segurança.",
    trigger: "Segurança, suporte, constância",
    objection: "Tenho medo de começar e não conseguir manter.",
    response: "O programa é estruturado com apoio contínuo no seu ritmo."
  },
  C: {
    label: "Conforme",
    approach: "Traga lógica, processo e prova.",
    trigger: "Dados, método, clareza",
    objection: "Quais dados sustentam esse resultado?",
    response: "Temos métricas claras e estudos de caso com resultados documentados."
  }
};

function App() {
  const [selected, setSelected] = useState([]);

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    if (exists) {
      setSelected(selected.filter((s) => s.label !== label));
    } else {
      setSelected([...selected, { label, profile }]);
    }
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const dominantProfile = Object.keys(profileCount).reduce((a, b) =>
    profileCount[a] > profileCount[b] ? a : b, '');

  const suggestion = suggestions[dominantProfile];

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>📲 ConvertaVox™ – Radar Comportamental</h1>
      {suggestion && (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>Perfil: {suggestion.label}</h2>
          <p><strong>🎯 Abordagem:</strong> {suggestion.approach}</p>
          <p><strong>🔥 Gatilhos:</strong> {suggestion.trigger}</p>
          <p><strong>⚠️ Objeção:</strong> {suggestion.objection}</p>
          <p><strong>🛠 Resposta:</strong> {suggestion.response}</p>
        </div>
      )}
      {markers.map((item, index) => (
        <div key={index}>
          <label>
            <input type="checkbox" onChange={() => handleCheck(item.label, item.profile)} />
            {' '}{item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;
