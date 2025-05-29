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
  { label: "Expressão séria, analítica", profile: "C" },
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
        content: "Aqui é execução direta pra sair do operacional em tempo recorde. Resultado aparece. Simples assim."
      },
      {
        title: "❌ Qual o resultado REAL?",
        content: "Liberdade operacional, lucro e tempo pra pensar como dono. Redução de 60% no operacional em 90 dias."
      },
      {
        title: "❌ Quando começo a ver dinheiro no bolso?",
        content: "Em até 30 dias com aplicação certa. Alguns lucram na 2ª semana com reposicionamento."
      },

      {
        title: "❌ Isso funciona mesmo para meu modelo de negócio?",
        content: "Já foi aplicado em mais de 100 negócios com perfis diversos. Temos casos no seu setor."
      },
      {
        title: "❌ Como ganho tempo com isso?",
        content: "Eliminando retrabalho e criando autonomia no time. Você sai da operação."
      },
      {
        title: "❌ O que me garante resultado?",
        content: "Execução. A metodologia é validada. Com aplicação, o resultado é inevitável."
      },
      {
        title: "❌ E se eu não tiver equipe?",
        content: "O método ensina a estruturar desde o início, incluindo time mínimo e funções essenciais."
      },
      {
        title: "❌ E se meu problema for vendas?",
        content: "O plano inclui estrutura de atração, conversão e retenção adaptada ao seu cenário."
      },
      {
        title: "❌ E se eu quiser acelerar?",
        content: "Tem trilha rápida para quem quer escalar mais rápido. Acompanhamento focado em performance."
      }
    ]
  }
};

export default function ConvertaVoxApp() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    if (exists) {
      setSelected(selected.filter((s) => s.label !== label));
    } else {
      setSelected([...selected, { label, profile }]);
    }
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

  const sortedProfiles = Object.keys(profileCount).sort(
    (a, b) => profileCount[b] - profileCount[a]
  );

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1>📲 ConvertaVox™</h1>
      <p>Radar Comportamental em Calls 1:1</p>

      {sortedProfiles.map((profileKey) => {
        const suggestion = suggestions[profileKey];
        return (
          <div key={profileKey} style={{ border: '1px solid #ddd', padding: 10, marginTop: 20 }}>
            <h2>{suggestion.label}</h2>
            <p>{suggestion.approach}</p>
            <p>{suggestion.trigger}</p>
            <p>{suggestion.objection}</p>
            <p>{suggestion.response}</p>
            <button onClick={() => toggleExpand(profileKey)}>
              {expandedProfiles.includes(profileKey) ? "Ocultar objeções" : "Mostrar objeções"}
            </button>
            {expandedProfiles.includes(profileKey) && (
              <div>
                {suggestion.objections.map((obj, idx) => (
                  <div key={idx} style={{ marginTop: 10 }}>
                    <strong>{obj.title}</strong>
                    <p>{obj.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
