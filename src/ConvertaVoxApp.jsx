
// ConvertaVox™ – Radar Comportamental Mobile-First

import { useState } from 'react';

const profiles = {
  D: "Dominante",
  I: "Influente",
  S: "Estável",
  C: "Conforme"
};

const objections = {
  D: [
    "Não tenho tempo",
    "Já tentei de tudo",
    "Não vejo ROI",
    "Quero resultado rápido",
    "Não gosto de enrolação",
    "Quanto tempo pra ver resultado?",
    "Não tenho paciência pra teoria",
    "Quero algo que funcione",
    "Quero sair da operação",
    "Foco é lucro"
  ],
  I: [
    "Preciso me sentir motivado",
    "Não quero fazer isso sozinho",
    "E se não gostarem de mim?",
    "E se eu não conseguir engajar?",
    "Preciso me conectar com a galera",
    "E se eu não tiver apoio?",
    "Preciso de leveza",
    "Tenho medo de me sentir preso",
    "Quero algo animado",
    "Preciso acreditar que é possível"
  ],
  S: [
    "Tenho medo de mudanças",
    "E se eu não der conta?",
    "Preciso de algo passo a passo",
    "Não quero me sentir pressionado",
    "E se der errado?",
    "Tenho medo de sair da rotina",
    "Prefiro segurança",
    "Quero algo tranquilo",
    "Tenho receio de começar",
    "Quero estabilidade"
  ],
  C: [
    "Quais são os dados disso?",
    "Tem prova que funciona?",
    "Qual é a metodologia?",
    "Onde estão os resultados?",
    "Quero ver números",
    "Como isso foi validado?",
    "Quais os benchmarks?",
    "Tem estudos de caso?",
    "Preciso ver os gráficos",
    "Quero o plano completo"
  ]
};

export default function ConvertaVoxApp() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 ConvertaVox App</h1>
      <p>Selecione um perfil comportamental:</p>
      {Object.entries(profiles).map(([key, label]) => (
        <button key={key} onClick={() => setActiveProfile(key)} style={{ marginRight: 10 }}>
          {label}
        </button>
      ))}
      {activeProfile && (
        <div style={{ marginTop: 20 }}>
          <h2>Objeções do perfil {profiles[activeProfile]}:</h2>
          <ul>
            {objections[activeProfile].map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
