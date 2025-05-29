
import { useState } from 'react'

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

const profileData = {
  D: {
    label: "🟥 Perfil: Dominante",
    abordagem: "🎯 Abordagem: Seja direto, foque em resultado e ROI.",
    gatilhos: "🔥 Gatilhos: Resultados tangíveis, liderança, ganho de tempo",
    objecao: "⚠️ Objeção: Já tentei de tudo, não tenho tempo pra enrolação.",
    resposta: "🧰 Resposta: Esse processo é direto ao ponto e gera ROI visível em poucas semanas."
  },
  I: {
    label: "🟨 Perfil: Influente",
    abordagem: "🎯 Abordagem: Conecte com emoção e energia positiva.",
    gatilhos: "🔥 Gatilhos: Pertencimento, apoio, entusiasmo",
    objecao: "⚠️ Objeção: Será que vou ter alguém pra me ajudar de verdade?",
    resposta: "🧰 Resposta: Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho."
  },
  S: {
    label: "🟩 Perfil: Estável",
    abordagem: "🎯 Abordagem: Acolha, ofereça passo a passo e segurança.",
    gatilhos: "🔥 Gatilhos: Segurança, suporte, constância",
    objecao: "⚠️ Objeção: Tenho medo de começar e não conseguir manter.",
    resposta: "🧰 Resposta: O programa é estruturado com apoio contínuo no seu ritmo."
  },
  C: {
    label: "🟦 Perfil: Conforme",
    abordagem: "🎯 Abordagem: Traga lógica, processo e prova.",
    gatilhos: "🔥 Gatilhos: Dados, método, clareza",
    objecao: "⚠️ Objeção: Quais dados sustentam esse resultado?",
    resposta: "🧰 Resposta: Temos métricas claras e estudos de caso com resultados documentados."
  }
}

export default function ConvertaVoxApp() {
  const [selected, setSelected] = useState([]);
  const [detectedProfiles, setDetectedProfiles] = useState([]);

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    let updated = exists
      ? selected.filter((s) => s.label !== label)
      : [...selected, { label, profile }];
    setSelected(updated);

    const count = updated.reduce((acc, cur) => {
      acc[cur.profile] = (acc[cur.profile] || 0) + 1;
      return acc;
    }, {});

    const sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
    setDetectedProfiles(sorted.slice(0, 2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', textAlign: 'center' }}>📲 ConvertaVox™</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Radar Comportamental em Calls 1:1</p>

      {detectedProfiles.map((key) => {
        const data = profileData[key];
        return (
          <div key={key} style={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1.5rem', padding: '1rem' }}>
            <p><strong>{data.label}</strong></p>
            <p>{data.abordagem}</p>
            <p>{data.gatilhos}</p>
            <p>{data.objecao}</p>
            <p>{data.resposta}</p>
          </div>
        );
      })}

      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
        <p><strong>Marque os sinais observados:</strong></p>
        {markers.map((item, index) => (
          <div key={index} style={{ margin: '0.3rem 0' }}>
            <input
              type="checkbox"
              id={`marker-${index}`}
              checked={selected.some((s) => s.label === item.label)}
              onChange={() => handleCheck(item.label, item.profile)}
            />
            <label htmlFor={`marker-${index}`} style={{ marginLeft: '0.5rem' }}>
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
