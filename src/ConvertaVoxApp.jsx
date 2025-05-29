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

// Dados simplificados de exemplo (coloquei 1 objeção por perfil por agora para não quebrar)
const suggestions = {
  D: {
    label: "🟥 Perfil Dominante",
    approach: "🎯 Seja direto, foque em resultado e ROI.",
    trigger: "🔥 Resultados tangíveis, liderança, ganho de tempo",
    objection: "⚠️ Já tentei de tudo, não tenho tempo pra enrolação.",
    response: "🛠 Esse processo é direto ao ponto e gera ROI visível em poucas semanas.",
    objections: Array.from({ length: 10 }).map((_, i) => ({
      title: `❌ Objeção ${i + 1} do Dominante`,
      content: "Resposta direta e objetiva que foca em resultado imediato e controle do negócio."
    }))
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com emoção e energia positiva.",
    trigger: "🔥 Pertencimento, apoio, entusiasmo",
    objection: "⚠️ Será que vou ter alguém pra me ajudar de verdade?",
    response: "🛠 Você entra numa comunidade que te apoia de verdade. Nunca mais vai estar sozinho.",
    objections: Array.from({ length: 10 }).map((_, i) => ({
      title: `❌ Objeção ${i + 1} do Influente`,
      content: "Resposta com foco em conexão, acolhimento e pertencimento emocional."
    }))
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança.",
    trigger: "🔥 Segurança, suporte, constância",
    objection: "⚠️ Tenho medo de começar e não conseguir manter.",
    response: "🛠 O programa é estruturado com apoio contínuo no seu ritmo.",
    objections: Array.from({ length: 10 }).map((_, i) => ({
      title: `❌ Objeção ${i + 1} do Estável`,
      content: "Resposta com foco em passo a passo seguro, suporte contínuo e constância."
    }))
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova.",
    trigger: "🔥 Dados, método, clareza",
    objection: "⚠️ Quais dados sustentam esse resultado?",
    response: "🛠 Temos métricas claras e estudos de caso com resultados documentados.",
    objections: Array.from({ length: 10 }).map((_, i) => ({
      title: `❌ Objeção ${i + 1} do Conforme`,
      content: "Resposta com dados, provas, fluxos e gráficos estruturados."
    }))
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
    <div className="p-4 space-y-4 max-w-2xl mx-auto text-sm">
      <div className="sticky top-0 z-10 bg-white pb-2">
        <h1 className="text-lg font-bold text-center">📲 ConvertaVox™</h1>
        <p className="text-center text-gray-500">Radar Comportamental em Calls 1:1</p>
      </div>

      {sortedProfiles.map((profileKey) => {
        const suggestion = suggestions[profileKey];
        return (
          <Card key={profileKey}>
            <CardContent className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">{suggestion.label}</h2>
                <Button size="sm" onClick={() => toggleExpand(profileKey)}>
                  {expandedProfiles.includes(profileKey) ? "Ocultar objeções" : "Mostrar objeções"}
                </Button>
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