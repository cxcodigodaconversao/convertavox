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
  { label: "Expressão séria, analítica", profile: "C" },
];

const profiles = {
  D: {
    label: "🟥 Perfil: Dominante",
    approach: "🎯 Abordagem: Seja direto, foque em resultado e ROI.",
    trigger: "🔥 Gatilhos: Resultados tangíveis, liderança, ganho de tempo",
    objection: "⚠️ Objeção: Já tentei de tudo, não tenho tempo pra enrolação.",
    response: "🧠 Resposta: Esse processo é direto ao ponto e gera ROI visível em poucas semanas."
  },
  I: {
    label: "🟨 Perfil: Influente",
    approach: "🎯 Abordagem: Conecte com emoção e energia positiva.",
    trigger: "🔥 Gatilhos: Pertencimento, apoio, entusiasmo",
    objection: "⚠️ Objeção: Será que vou ter alguém pra me ajudar de verdade?",
    response: "🧠 Resposta: Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho."
  },
  S: {
    label: "🟩 Perfil: Estável",
    approach: "🎯 Abordagem: Acolha, ofereça passo a passo e segurança.",
    trigger: "🔥 Gatilhos: Segurança, suporte, constância",
    objection: "⚠️ Objeção: Tenho medo de começar e não conseguir manter.",
    response: "🧠 Resposta: O programa é estruturado com apoio contínuo no seu ritmo."
  },
  C: {
    label: "🟦 Perfil: Conforme",
    approach: "🎯 Abordagem: Traga lógica, processo e prova.",
    trigger: "🔥 Gatilhos: Dados, método, clareza",
    objection: "⚠️ Objeção: Quais dados sustentam esse resultado?",
    response: "🧠 Resposta: Temos métricas claras e estudos de caso com resultados documentados."
  }
};

const objections = JSON.parse(atob(`{\"D\": [{\"title\": \"❌ Já tentei de tudo, não tenho tempo pra enrolação\", \"content\": \"Perfeito. É exatamente por isso...\"},{\"title\": \"❌ Mas e aí, qual o resultado REAL que isso vai me dar?\", \"content\": \"Liberdade operacional, aumento de lucro...\"},{\"title\": \"❌ Vamos direto ao ponto: quanto tempo até ver dinheiro no bolso?\", \"content\": \"Se você aplicar a primeira fase...\"},{\"title\": \"❌ Não tenho dinheiro\", \"content\": \"Você é o tipo de pessoa que sabe...\"},{\"title\": \"❌ Não tenho tempo\", \"content\": \"Você não tem tempo porque tudo depende de você...\"},{\"title\": \"❌ Tenho que verificar com meu marido/esposa\", \"content\": \"Total respeito pela parceria...\"},{\"title\": \"❌ Não acho que eu vou conseguir\", \"content\": \"Você já construiu muito mais...\"},{\"title\": \"❌ Quanto tempo vai demorar pra eu ver resultado?\", \"content\": \"Com foco e execução, em X semanas...\"},{\"title\": \"❌ Você pode me garantir o resultado?\", \"content\": \"A única garantia que eu posso te dar...\"}],\"I\": [{\"title\": \"❌ Não sei se é pra mim…\", \"content\": \"Eu entendo. E só o fato de você estar aqui...\"},{\"title\": \"❌ Será que vou ter alguém pra me ajudar de verdade?\", \"content\": \"Sim. De verdade. Aqui você não vai...\"},{\"title\": \"❌ Tenho medo de ficar sozinho e não dar conta.\", \"content\": \"Esse medo é legítimo. A maioria sente...\"},{\"title\": \"❌ Não tenho dinheiro\", \"content\": \"Eu entendo que o momento pode estar apertado...\"},{\"title\": \"❌ Não tenho tempo\", \"content\": \"Imagina como vai ser quando você puder...\"},{\"title\": \"❌ Tenho que verificar com meu marido/esposa\", \"content\": \"Claro, e faz total sentido decidir em conjunto...\"},{\"title\": \"❌ Não acho que eu vou conseguir\", \"content\": \"Sabe o que é mais lindo? Aqui você vai ser acolhido...\"},{\"title\": \"❌ Quanto tempo vai demorar pra eu ver resultado?\", \"content\": \"Muita gente já sente diferença nos primeiros dias...\"},{\"title\": \"❌ Você pode me garantir o resultado?\", \"content\": \"O que eu posso te garantir é que você não vai...\"}],\"S\": [{\"title\": \"❌ Tenho medo de começar e não conseguir manter.\", \"content\": \"Esse medo é natural — e mostra que você se importa...\"},{\"title\": \"❌ Não sei se agora é o melhor momento pra mim.\", \"content\": \"Respeito demais esse sentimento...\"},{\"title\": \"❌ Preciso de algo passo a passo, sem pressão.\", \"content\": \"Você vai ter exatamente isso...\"},{\"title\": \"❌ Não tenho dinheiro\", \"content\": \"Você não é o único que sente isso...\"},{\"title\": \"❌ Não tenho tempo\", \"content\": \"Eu te entendo totalmente. É exatamente por isso...\"},{\"title\": \"❌ Tenho que verificar com meu marido/esposa\", \"content\": \"Apoio é essencial. E essa escolha vai aliviar...\"},{\"title\": \"❌ Não acho que eu vou conseguir\", \"content\": \"Eu te entendo. E é por isso que você vai ter...\"},{\"title\": \"❌ Quanto tempo vai demorar pra eu ver resultado?\", \"content\": \"Você vai ver progresso desde o começo...\"},{\"title\": \"❌ Você pode me garantir o resultado?\", \"content\": \"O que a gente garante é um caminho validado...\"}],\"C\": [{\"title\": \"❌ Como exatamente funciona o processo?\", \"content\": \"Excelente pergunta. O processo é dividido...\"},{\"title\": \"❌ Tem alguma comprovação de que isso realmente dá certo?\", \"content\": \"Sim. Posso te mostrar cases documentados...\"},{\"title\": \"❌ Quais dados sustentam esse resultado?\", \"content\": \"A base do método foi construída a partir de análises...\"},{\"title\": \"❌ Não tenho dinheiro\", \"content\": \"É totalmente racional pensar no custo...\"},{\"title\": \"❌ Não tenho tempo\", \"content\": \"Posso te mostrar como o cronograma se adapta...\"},{\"title\": \"❌ Tenho que verificar com meu marido/esposa\", \"content\": \"Perfeito. Posso te enviar todos os detalhes...\"},{\"title\": \"❌ Não acho que eu vou conseguir\", \"content\": \"É um pensamento legítimo. Mas posso te mostrar depoimentos...\"},{\"title\": \"❌ Quanto tempo vai demorar pra eu ver resultado?\", \"content\": \"O tempo médio varia conforme o perfil...\"},{\"title\": \"❌ Você pode me garantir o resultado?\", \"content\": \"Resultado depende de execução, mas temos históricos...\"}]}`));

export default function ConvertaVoxApp() {
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const handleCheck = (marker) => {
    setSelected((prev) =>
      prev.find((m) => m.label === marker.label)
        ? prev.filter((m) => m.label !== marker.label)
        : [...prev, marker]
    );
  };

  const profileScores = selected.reduce((acc, curr) => {
    acc[curr.profile] = (acc[curr.profile] || 0) + 1;
    return acc;
  }, {});

  const dominantProfiles = Object.entries(profileScores)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .slice(0, 2);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>📲 ConvertaVox™</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Radar Comportamental em Calls 1:1
      </p>

      {dominantProfiles.map((key) => (
        <div key={key} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "0.5rem" }}>
          <p><strong>{profiles[key].label}</strong></p>
          <p>{profiles[key].approach}</p>
          <p>{profiles[key].trigger}</p>
          <p>{profiles[key].objection}</p>
          <p>{profiles[key].response}</p>
          <button onClick={() => setExpanded(expanded === key ? null : key)}>
            {expanded === key ? "Ocultar objeções" : "Ver objeções"}
          </button>
          {expanded === key &&
            objections[key].map((item, i) => (
              <div key={i} style={{ marginTop: "0.5rem" }}>
                <p><strong>{item.title}</strong></p>
                <p>{item.content}</p>
              </div>
            ))}
        </div>
      ))}

      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "0.5rem" }}>
        <p><strong>Marque os sinais observados:</strong></p>
        {markers.map((marker, i) => (
          <div key={i}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheck(marker)}
                checked={selected.some((m) => m.label === marker.label)}
              />
              {" " + marker.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}