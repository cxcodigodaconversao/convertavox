import React, { useState } from 'react';

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
        title: "❌ Já tentei de tudo, não tenho tempo pra enrolação",
        content: `🗣️ “Perfeito. É exatamente por isso que esse método foi criado: pra quem já tentou de tudo, mas ainda carrega o negócio nas costas. Você não vai ouvir teoria nem frase de efeito — aqui é execução direta pra sair do operacional em tempo recorde. Se você aplicar, o resultado aparece. Simples assim.”
🧠 Gatilhos usados: autoridade, foco em tempo, desprezo por enrolação, comando de ação.`
      },
      {
        title: "❌ Qual o resultado REAL disso?",
        content: `🗣️ “Liberdade operacional, aumento de lucro e tempo pra pensar como dono. Você vai parar de ser funcionário da própria empresa e começar a escalar de forma estratégica. Em média, nossos clientes reduzem em até 60% o tempo no operacional em 90 dias — com lucro no caixa, não só no papel.”
📈 Se puder, mostre print real de painel ou número de case similar.
🧠 Gatilhos usados: resultado tangível, número específico, linguagem de dono, escala.`
      },
      {
        title: "❌ Quanto tempo até ver dinheiro no bolso?",
        content: `🗣️ “Se você aplicar a primeira fase como a gente orienta, em até 30 dias dá pra destravar o fluxo de caixa.”
🧠 Gatilhos usados: urgência, foco em lucro, promessa com prazo.`
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
      prev.includes(profile) ? prev.filter((p) => p !== profile) : [...prev, profile]
    );
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort((a, b) => profileCount[b] - profileCount[a]);

  return (
    <div className="p-4 space-y-4 max-w-2xl mx-auto text-sm">
      <h1 className="text-lg font-bold text-center">📲 ConvertaVox™</h1>
      <p className="text-center text-gray-500">Radar Comportamental em Calls 1:1</p>

      {sortedProfiles.map((profileKey) => {
        const suggestion = suggestions[profileKey];
        return (
          <div key={profileKey} className="border rounded p-3 space-y-2 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">{suggestion.label}</h2>
              <button onClick={() => toggleExpand(profileKey)} className="text-blue-500 text-sm">
                {expandedProfiles.includes(profileKey) ? "Ocultar objeções" : "Mostrar objeções"}
              </button>
            </div>
            <p>{suggestion.approach}</p>
            <p>{suggestion.trigger}</p>
            <p>{suggestion.objection}</p>
            <p>{suggestion.response}</p>
            {expandedProfiles.includes(profileKey) && (
              <div className="space-y-2 pt-2">
                {suggestion.objections.map((obj, idx) => (
                  <div key={idx} className="border-t pt-2">
                    <p className="font-semibold">{obj.title}</p>
                    <p>{obj.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="border rounded p-3 space-y-2 bg-white">
        <p className="font-medium">Marque os sinais observados:</p>
        {markers.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
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