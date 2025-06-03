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
    label: "🟥 Perfil Dominante",
    approach: "🎯 Seja direto, foque em resultado e ROI.",
    trigger: "🔥 Resultados tangíveis, liderança, ganho de tempo",
    objection: "⚠️ Já tentei de tudo, não tenho tempo pra enrolação.",
    response: "🛠 Esse processo é direto ao ponto e gera ROI visível em poucas semanas.",
    objections: [
      {
        title: "❌ 'Já tentei de tudo, não tenho tempo pra enrolação.'",
        content: "Perfeito. É exatamente por isso que esse método foi criado..."
      },
      {
        title: "❌ 'Mas e aí, qual o resultado REAL que isso vai me dar?'",
        content: "Liberdade operacional, aumento de lucro..."
      }
    ]
  }
};

export default function ConvertaVoxApp() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    setSelected(exists ? selected.filter((s) => s.label !== label) : [...selected, { label, profile }]);
  };

  const toggleExpand = (profile) => {
    setExpandedProfiles((prev) =>
      prev.includes(profile)
        ? prev.filter((p) => p !== profile)
        : [...prev, profile]
    );
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort(
    (a, b) => profileCount[b] - profileCount[a]
  );

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>📲 ConvertaVox™</h1>
      <p>Radar Comportamental em Calls 1:1</p>

      {sortedProfiles.map((profileKey) => {
        const suggestion = suggestions[profileKey];
        return (
          <div key={profileKey} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h2>{suggestion.label}</h2>
            <p>{suggestion.approach}</p>
            <p>{suggestion.trigger}</p>
            <p>{suggestion.objection}</p>
            <p>{suggestion.response}</p>
            <button onClick={() => toggleExpand(profileKey)}>
              {expandedProfiles.includes(profileKey) ? "Ocultar objeções" : "Mostrar objeções"}
            </button>
            {expandedProfiles.includes(profileKey) && suggestion.objections.map((obj, idx) => (
              <div key={idx}>
                <strong>{obj.title}</strong>
                <p>{obj.content}</p>
              </div>
            ))}
          </div>
        );
      })}

      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <p><strong>Marque os sinais observados:</strong></p>
        {markers.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`marker-${index}`}
              onChange={() => handleCheck(item.label, item.profile)}
              checked={selected.some((s) => s.label === item.label)}
            />
            <label htmlFor={`marker-${index}`}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}