import { useState } from 'react';
import './style.css';

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
  { label: "Expressão séria, analítica", profile: "C" },
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
  },
};

export default function ConvertaVoxApp() {
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
    <div style={{ padding: 20, maxWidth: 480, margin: "0 auto" }}>
      <h1>📲 ConvertaVox™</h1>
      <p>Radar Comportamental em Calls 1:1</p>

      {suggestion && (
        <div style={{ border: "1px solid #ccc", padding: 12, margin: "12px 0" }}>
          <h2>Perfil: {suggestion.label}</h2>
          <p><strong>🎯 Abordagem:</strong> {suggestion.approach}</p>
          <p><strong>🔥 Gatilhos:</strong> {suggestion.trigger}</p>
          <p><strong>⚠️ Objeção:</strong> {suggestion.objection}</p>
          <p><strong>🛠 Resposta:</strong> {suggestion.response}</p>
        </div>
      )}

      <h3>Marque os sinais observados:</h3>
      {markers.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.label, item.profile)}
            id={`chk-${index}`}
          />
          <label htmlFor={`chk-${index}`}>{item.label}</label>
        </div>
      ))}
    </div>
  );
}