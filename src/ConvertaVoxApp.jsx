// ConvertaVox™ – Radar Comportamental Mobile-First

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
    label: "Dominante 🟥",
    approach: "🎯 Abordagem: Seja direto, foque em resultado e ROI.",
    trigger: "🔥 Gatilhos: Resultados tangíveis, liderança, ganho de tempo",
    objection: "⚠️ Objeção: Já tentei de tudo, não tenho tempo pra enrolação.",
    response: "🛠 Resposta: Esse processo é direto ao ponto e gera ROI visível em poucas semanas.",
    objections: [
      "“Já tentei de tudo, não tenho tempo pra enrolação.” – Perfeito. É exatamente por isso que esse método foi criado...",
      "“Mas e aí, qual o resultado REAL que isso vai me dar?” – Liberdade operacional, aumento de lucro...",
      "“Vamos direto ao ponto: quanto tempo até ver dinheiro no bolso?” – Se você aplicar a primeira fase...",
    ],
  },
  I: {
    label: "Influente 🟨",
    approach: "🎯 Abordagem: Conecte com emoção e energia positiva.",
    trigger: "🔥 Gatilhos: Pertencimento, apoio, entusiasmo",
    objection: "⚠️ Objeção: Será que vou ter alguém pra me ajudar de verdade?",
    response: "🛠 Resposta: Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho.",
    objections: [
      "“Não sei se é pra mim…” – Eu entendo. E só o fato de você estar aqui já mostra que você se importa...",
      "“Será que vou ter alguém pra me ajudar de verdade?” – Sim. De verdade. Aqui você não vai ser só mais um número...",
      "“Tenho medo de ficar sozinho e não dar conta.” – Esse medo é legítimo. Mas aqui, ninguém anda sozinho...",
    ],
  },
  S: {
    label: "Estável 🟩",
    approach: "🎯 Abordagem: Acolha, ofereça passo a passo e segurança.",
    trigger: "🔥 Gatilhos: Segurança, suporte, constância",
    objection: "⚠️ Objeção: Tenho medo de começar e não conseguir manter.",
    response: "🛠 Resposta: O programa é estruturado com apoio contínuo no seu ritmo.",
    objections: [
      "“Tenho medo de começar e não conseguir manter.” – Esse medo é natural...",
      "“Não sei se agora é o melhor momento pra mim.” – Respeito demais esse sentimento...",
      "“Preciso de algo passo a passo, sem pressão.” – Você vai ter exatamente isso...",
    ],
  },
  C: {
    label: "Conforme 🟦",
    approach: "🎯 Abordagem: Traga lógica, processo e prova.",
    trigger: "🔥 Gatilhos: Dados, método, clareza",
    objection: "⚠️ Objeção: Quais dados sustentam esse resultado?",
    response: "🛠 Resposta: Temos métricas claras e estudos de caso com resultados documentados.",
    objections: [
      "“Como exatamente funciona o processo?” – Excelente pergunta. O processo é dividido em [X] fases...",
      "“Tem alguma comprovação de que isso realmente dá certo?” – Sim. Posso te mostrar cases documentados...",
      "“Quais dados sustentam esse resultado?” – A base do método foi construída a partir de análises...",
    ],
  },
};

export default function ConvertaVoxApp() {
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState({});

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    if (exists) {
      setSelected(selected.filter((s) => s.label !== label));
    } else {
      setSelected([...selected, { label, profile }]);
    }
  };

  const toggleObjections = (profile) => {
    setExpanded({ ...expanded, [profile]: !expanded[profile] });
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.entries(profileCount)
    .sort(([, a], [, b]) => b - a)
    .map(([p]) => p);

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto text-sm">
      <div className="sticky top-0 z-10 bg-white pb-2">
        <h1 className="text-lg font-bold text-center">📲 ConvertaVox™</h1>
        <p className="text-center text-gray-500">Radar Comportamental em Calls 1:1</p>
      </div>

      {sortedProfiles.map((profile) => {
        const suggestion = suggestions[profile];
        return (
          <Card key={profile}>
            <CardContent className="p-3 space-y-1">
              <h2 className="text-base font-semibold">{suggestion.label}</h2>
              <p>{suggestion.approach}</p>
              <p>{suggestion.trigger}</p>
              <p>{suggestion.objection}</p>
              <p>{suggestion.response}</p>
              <Button variant="outline" onClick={() => toggleObjections(profile)}>
                {expanded[profile] ? "Esconder objeções" : "Ver objeções"}
              </Button>
              {expanded[profile] && (
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {suggestion.objections.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        );
      })}

      <Card>
        <CardContent className="p-3 space-y-2">
          <p className="font-medium">Marque os sinais observados:</p>
          {markers.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox onCheckedChange={() => handleCheck(item.label, item.profile)} />
              <label className="text-sm">{item.label}</label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
