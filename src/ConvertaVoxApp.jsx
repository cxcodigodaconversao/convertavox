import React, { useState } from 'react';
import './styles.css';

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
       title: "❌ Já tentei de tudo e nada funciona"},
    {
      question: "O que exatamente você tentou e que te fez perder tempo sem retorno?"},
    {
      response: "Você é alguém que já sabe o que não funciona. Agora precisa de algo que funcione — simples assim. Aqui, a diferença está na execução com método. Posso te mostrar resultados concretos de quem também já estava no limite e virou o jogo em semanas."
    },
    {
      title: "❌ Mas será que isso serve pra mim?",
      question: "O que exatamente faria você ter certeza de que isso funciona pra você?",
      response: "Se você quer evolução real e resultado com clareza, sim, serve pra você. O método se adapta a quem executa com foco. Posso te mostrar casos de quem chegou aqui com o mesmo perfil que o seu — e dobrou o resultado com precisão."
    },
    {
      title: "❌ Quanto tempo leva pra dar resultado?",
      question: "Em quanto tempo você espera ver um retorno visível? Isso te ajudaria a decidir?",
      response: "Se você aplica com consistência, os primeiros resultados vêm em 30 dias — reais, mensuráveis. Já vi casos que dobraram faturamento em 21 dias. Posso te mostrar. Mas não é fórmula mágica — é execução com método."
    },
    {
      title: "❌ Eu não tenho dinheiro",
      question: "Se esse investimento voltasse pra você em dobro, faria sentido agora?",
      response: "A pergunta certa não é quanto custa — mas quanto você já perdeu por não resolver isso. O que você decide aqui vira retorno, não é gasto. Te mostro como clientes no seu perfil recuperaram o investimento em semanas."
    },
    {
      title: "❌ Não tenho tempo pra isso agora",
      question: "O que está te tomando mais tempo hoje — e que já deveria estar resolvido?",
      response: "Exatamente por estar sem tempo é que você precisa resolver isso agora. Esse método te devolve tempo — não exige mais. Posso te mostrar como ele elimina tarefas inúteis e foca no que gera retorno direto."
    },
    {
      title: "❌ Preciso conversar com meu parceiro(a) antes",
      question: "O que exatamente seu parceiro(a) precisa entender pra te apoiar nessa decisão?",
      response: "Claro. Se quiser, posso te ajudar com os argumentos estratégicos pra essa conversa. Isso impacta os dois — e você vai estar levando clareza, resultado e direção."
    },
    {
      title: "❌ Não sei se eu vou conseguir",
      question: "Você já superou desafios antes. O que torna esse diferente pra você duvidar da sua capacidade?",
      response: "Você já passou por coisas muito maiores. Aqui, você só precisa executar com direção. E essa direção eu te dou. Posso te mostrar o plano, os dados e os checkpoints que garantem o resultado — se você fizer, funciona."
    },
    {
      title: "❌ E se eu começar e não der certo?",
      question: "O que você costuma fazer quando algo sai diferente do esperado — você ajusta ou abandona?",
      response: "Se você fizer, dá certo. O único erro real é parar. Aqui, você não segue sozinho — tem acompanhamento pra corrigir rota e ir até o fim. Posso te mostrar casos em que o ajuste foi o diferencial pro resultado."
    },
    {
      title: "❌ Você me garante que vai funcionar?",
      question: "Se eu te mostrasse casos de pessoas que aplicaram com intensidade e venceram, isso bastaria como prova?",
      response: "Se você aplicar, funciona. Quem executa colhe. E eu te acompanho pra garantir que você tenha o plano, o ritmo e os ajustes certos. Posso te mostrar casos reais — mas a diferença está na execução."
    }
    ]
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com emoção e energia positiva.",
    trigger: "🔥 Pertencimento, apoio, entusiasmo",
    objection: "⚠️ Será que vou ter alguém pra me ajudar de verdade?",
    response: "🛠 Você entra numa comunidade que te apoia de verdade.",
    objections: [
      { title: "❌ Não sei se é pra mim…", content: "Aqui você ganha clareza." }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança.",
    trigger: "🔥 Segurança, suporte, constância",
    objection: "⚠️ Tenho medo de começar e não conseguir manter.",
    response: "🛠 O programa acompanha seu ritmo.",
    objections: [
      { title: "❌ Medo de não manter", content: "Vamos passo a passo." }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova.",
    trigger: "🔥 Dados, método, clareza",
    objection: "⚠️ Quais dados sustentam esse resultado?",
    response: "🛠 Temos métricas claras e casos reais.",
    objections: [
      { title: "❌ Como funciona o processo?", content: "Diagnóstico, plano e checkpoints." }
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
    <div className="container">
      <h1 className="title">📲 ConvertaVox™</h1>
      <p className="subtitle">Radar Comportamental em Calls 1:1</p>

      {sortedProfiles.map((profileKey) => {
        const suggestion = suggestions[profileKey];
        return (
          <div key={profileKey} className="card">
            <div className="card-header">
              <h2>{suggestion.label}</h2>
              <button onClick={() => toggleExpand(profileKey)}>
                {expandedProfiles.includes(profileKey) ? "Ocultar objeções" : "Mostrar objeções"}
              </button>
            </div>
            <p>{suggestion.approach}</p>
            <p>{suggestion.trigger}</p>
            <p>{suggestion.objection}</p>
            <p>{suggestion.response}</p>
            {expandedProfiles.includes(profileKey) && (
              <div className="objections">
                {suggestion.objections.map((obj, idx) => (
                  <div key={idx}>
                    <p><strong>{obj.title}</strong></p>
                    <p>{obj.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="card">
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
