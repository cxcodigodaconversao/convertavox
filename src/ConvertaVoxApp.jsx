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
      { title: "❌ Já tentei de tudo, não tenho tempo pra enrolação", content: "Execução direta para sair do operacional rápido." },
      { title: "❌ Qual o resultado REAL disso?", content: "Liberdade operacional, aumento de lucro, tempo como dono." },
      { title: "❌ Quanto tempo até ver dinheiro no bolso?", content: "Até 30 dias com reposicionamento estratégico." }
    ]
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com emoção e energia positiva.",
    trigger: "🔥 Pertencimento, apoio, entusiasmo",
    objection: "⚠️ Será que vou ter alguém pra me ajudar de verdade?",
    response: "🛠 Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho.",
    objections: [
      { title: "❌ Não sei se é pra mim…", content: "Você não entra pronto, entra cansado. E aqui ganha clareza." },
      { title: "❌ Vou ter ajuda real?", content: "Acompanhamento real, grupo ativo, e estamos presentes." }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança.",
    trigger: "🔥 Segurança, suporte, constância",
    objection: "⚠️ Tenho medo de começar e não conseguir manter.",
    response: "🛠 O programa acompanha no seu ritmo, com estrutura.",
    objections: [
      { title: "❌ Medo de não manter", content: "Vamos passo a passo. Um plano que cabe na sua rotina real." },
      { title: "❌ Agora é um bom momento?", content: "É para quem está no limite. Cuidamos de cada etapa com leveza." }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova.",
    trigger: "🔥 Dados, método, clareza",
    objection: "⚠️ Quais dados sustentam esse resultado?",
    response: "🛠 Temos métricas claras e estudos de caso com resultados documentados.",
    objections: [
      { title: "❌ Como funciona o processo?", content: "Diagnóstico, plano, implementação e checkpoints." },
      { title: "❌ Comprovação de que dá certo?", content: "Cases, prints de resultados, benchmarks reais." }
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