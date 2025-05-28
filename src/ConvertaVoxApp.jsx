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
    response: "Esse processo é direto ao ponto e gera ROI visível em poucas semanas."
  },
  I: {
    label: "Influente",
    approach: "Conecte com emoção e energia positiva.",
    response: "Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho."
  },
  S: {
    label: "Estável",
    approach: "Acolha, ofereça passo a passo e segurança.",
    response: "O programa é estruturado com apoio contínuo no seu ritmo."
  },
  C: {
    label: "Conforme",
    approach: "Traga lógica, processo e prova.",
    response: "Temos métricas claras e estudos de caso com resultados documentados."
  }
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

  const sortedProfiles = Object.entries(profileCount)
    .sort((a, b) => b[1] - a[1])
    .map(p => p[0]);

  const dominantProfile = sortedProfiles[0];
  const secondProfile = sortedProfiles[1];

  return (
    <div style={{ padding: '1rem', maxWidth: 600, margin: 'auto' }}>
      <h1>ConvertaVox™ - Radar Comportamental</h1>
      {dominantProfile && (
        <div>
          <h2>Perfil dominante: {suggestions[dominantProfile].label}</h2>
          <p><strong>Abordagem:</strong> {suggestions[dominantProfile].approach}</p>
          <p><strong>Resposta:</strong> {suggestions[dominantProfile].response}</p>
        </div>
      )}
      {secondProfile && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Perfil complementar: {suggestions[secondProfile].label}</h3>
          <p><strong>Abordagem:</strong> {suggestions[secondProfile].approach}</p>
          <p><strong>Resposta:</strong> {suggestions[secondProfile].response}</p>
        </div>
      )}
      <div style={{ marginTop: '2rem' }}>
        <p>Marque os sinais observados:</p>
        {markers.map((item, idx) => (
          <div key={idx}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.label, item.profile)}
                checked={!!selected.find((s) => s.label === item.label)}
              />
              {' '}{item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
