
import { useState } from 'react';

const objections = {
  D: [
    { title: "❌ Já tentei de tudo, não tenho tempo pra enrolação", content: "Perfeito. É exatamente por isso..." },
    { title: "❌ Mas e aí, qual o resultado REAL que isso vai me dar?", content: "Liberdade operacional, aumento de lucro..." },
    { title: "❌ Vamos direto ao ponto: quanto tempo até ver dinheiro no bolso?", content: "Se você aplicar a primeira fase..." },
    { title: "❌ Não tenho dinheiro", content: "Você é o tipo de pessoa que sabe..." },
    { title: "❌ Não tenho tempo", content: "Você não tem tempo porque tudo depende de você..." },
    { title: "❌ Tenho que verificar com meu marido/esposa", content: "Total respeito pela parceria..." },
    { title: "❌ Não acho que eu vou conseguir", content: "Você já construiu muito mais..." },
    { title: "❌ Quanto tempo vai demorar pra eu ver resultado?", content: "Com foco e execução, em X semanas..." },
    { title: "❌ Você pode me garantir o resultado?", content: "A única garantia que eu posso te dar..." },
  ],
  I: [
    { title: "❌ Não sei se é pra mim…", content: "Eu entendo. E só o fato de você estar aqui..." },
    { title: "❌ Será que vou ter alguém pra me ajudar de verdade?", content: "Sim. De verdade. Aqui você não vai..." },
    { title: "❌ Tenho medo de ficar sozinho e não dar conta.", content: "Esse medo é legítimo. A maioria sente..." },
    { title: "❌ Não tenho dinheiro", content: "Eu entendo que o momento pode estar apertado..." },
    { title: "❌ Não tenho tempo", content: "Imagina como vai ser quando você puder..." },
    { title: "❌ Tenho que verificar com meu marido/esposa", content: "Claro, e faz total sentido decidir em conjunto..." },
    { title: "❌ Não acho que eu vou conseguir", content: "Sabe o que é mais lindo? Aqui você vai ser acolhido..." },
    { title: "❌ Quanto tempo vai demorar pra eu ver resultado?", content: "Muita gente já sente diferença nos primeiros dias..." },
    { title: "❌ Você pode me garantir o resultado?", content: "O que eu posso te garantir é que você não vai..." },
  ],
  S: [
    { title: "❌ Tenho medo de começar e não conseguir manter.", content: "Esse medo é natural — e mostra que você se importa..." },
    { title: "❌ Não sei se agora é o melhor momento pra mim.", content: "Respeito demais esse sentimento..." },
    { title: "❌ Preciso de algo passo a passo, sem pressão.", content: "Você vai ter exatamente isso..." },
    { title: "❌ Não tenho dinheiro", content: "Você não é o único que sente isso..." },
    { title: "❌ Não tenho tempo", content: "Eu te entendo totalmente. É exatamente por isso..." },
    { title: "❌ Tenho que verificar com meu marido/esposa", content: "Apoio é essencial. E essa escolha vai aliviar..." },
    { title: "❌ Não acho que eu vou conseguir", content: "Eu te entendo. E é por isso que você vai ter..." },
    { title: "❌ Quanto tempo vai demorar pra eu ver resultado?", content: "Você vai ver progresso desde o começo..." },
    { title: "❌ Você pode me garantir o resultado?", content: "O que a gente garante é um caminho validado..." },
  ],
  C: [
    { title: "❌ Como exatamente funciona o processo?", content: "Excelente pergunta. O processo é dividido..." },
    { title: "❌ Tem alguma comprovação de que isso realmente dá certo?", content: "Sim. Posso te mostrar cases documentados..." },
    { title: "❌ Quais dados sustentam esse resultado?", content: "A base do método foi construída a partir de análises..." },
    { title: "❌ Não tenho dinheiro", content: "É totalmente racional pensar no custo..." },
    { title: "❌ Não tenho tempo", content: "Posso te mostrar como o cronograma se adapta..." },
    { title: "❌ Tenho que verificar com meu marido/esposa", content: "Perfeito. Posso te enviar todos os detalhes..." },
    { title: "❌ Não acho que eu vou conseguir", content: "É um pensamento legítimo. Mas posso te mostrar depoimentos..." },
    { title: "❌ Quanto tempo vai demorar pra eu ver resultado?", content: "O tempo médio varia conforme o perfil..." },
    { title: "❌ Você pode me garantir o resultado?", content: "Resultado depende de execução, mas temos históricos..." },
  ]
};

export default function ConvertaVoxApp() {
  const [profile, setProfile] = useState('D');
  return (
    <div className="p-4 max-w-2xl mx-auto text-sm">
      <h1 className="text-xl font-bold mb-4">🧠 Objeções por Perfil Comportamental</h1>
      <select value={profile} onChange={(e) => setProfile(e.target.value)} className="mb-4 border p-2">
        <option value="D">Dominante</option>
        <option value="I">Influente</option>
        <option value="S">Estável</option>
        <option value="C">Conforme</option>
      </select>
      <div className="space-y-4">
        {objections[profile].map((obj, idx) => (
          <div key={idx} className="border p-3 rounded shadow">
            <p className="font-semibold">{obj.title}</p>
            <p>{obj.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
