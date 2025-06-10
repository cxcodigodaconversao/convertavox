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
    approach: "🎯 Seja direto, foque em resultado e ROI",
    trigger: "🔥 Resultados tangíveis, liderança, ganho de tempo",
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que exatamente você tentou e que te fez perder tempo sem retorno?",
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
    approach: "🎯 Conecte com emoção e energia positiva",
    trigger: "🔥 Pertencimento, apoio, entusiasmo, reconhecimento",
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que você sentiu quando percebeu que aquilo que tentou não funcionou?",
        response: "Você já deu tudo de si — e isso é admirável. Mas você não precisa seguir sozinho(a). Aqui, você vai ter um ambiente leve, de apoio real, onde você se sente escutado e parte de algo maior. Posso te apresentar histórias de pessoas como você que voltaram a acreditar."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "O que você gostaria de sentir pra ter certeza de que está no lugar certo?",
        response: "Ninguém começa pronto — você só precisa estar disposto a viver algo novo com apoio. Aqui, você vai ter espaço, acolhimento e troca. E vai se surpreender com a leveza de se sentir parte de algo que realmente te fortalece."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "O que faria você sentir que já está avançando nos primeiros dias?",
        response: "Logo nos primeiros dias, você já sente mais clareza, direção e apoio — e isso já muda o seu jogo. Quando você começa a se ver com novas possibilidades, o resultado vem de dentro pra fora."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Como seria sair desse ciclo e respirar de novo, com leveza?",
        response: "Você merece sair desse sufoco. Já vi pessoas no limite financeiro mudarem tudo porque encontraram apoio real. A gente te ajuda a construir um caminho viável — e você não precisa passar por isso sozinho(a)."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Como seria ter tempo pra você, com leveza, sem precisar abrir mão dos seus sonhos?",
        response: "Acredite: esse processo é justamente pra quem quer parar de correr e começar a viver com mais leveza. É sobre criar tempo pra você, com organização e liberdade. E você não precisa fazer isso sozinho."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "Como você gostaria que essa conversa acontecesse pra que ambos se sentissem confiantes?",
        response: "Totalmente compreensível. Posso te mandar um resumo leve, claro, com carinho — assim você apresenta com tranquilidade. Inclusive, se quiser, posso estar disponível pra responder dúvidas juntos."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "O que faria você acreditar mais em si mesmo(a) agora?",
        response: "Nem todo mundo começa acreditando — mas com o apoio certo, você se surpreende com o que é capaz. Aqui você vai se sentir escutado(a), apoiado(a) e valorizado(a). E quando isso acontece, você flui."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Como você se sente quando erra algo que acreditava? Você costuma se cobrar muito?",
        response: "Você não precisa acertar tudo de primeira. Ninguém acerta. Mas o importante é não fazer isso sozinho(a). Aqui tem suporte real, encorajamento e espaço pra crescer mesmo quando parece que falhou."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Você se sentiria mais confiante sabendo que vai ter alguém do seu lado durante o processo todo?",
        response: "O que eu te garanto é apoio, escuta e um caminho possível — com leveza, sem cobrança, e com presença real. E quando você tem isso, a coisa flui. Os resultados vêm como consequência."
      }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança",
    trigger: "🔥 Segurança, suporte, constância, processo claro",
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que mais te incomodou nas soluções anteriores? Foi o jeito como foi conduzido?",
        response: "Esse sentimento de frustração é mais comum do que parece. É por isso que aqui o processo é construído passo a passo, com acompanhamento de perto e no seu ritmo. A gente não impõe, a gente constrói junto. Se quiser, te mostro como adaptamos tudo à sua realidade."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "O que te faria se sentir mais seguro(a) de que isso pode funcionar pra você?",
        response: "Esse processo foi pensado pra funcionar com calma e constância. Não é sobre mudar tudo de uma vez — é sobre encaixar, passo a passo, no que já funciona na sua vida. A gente caminha junto com você, sem pressa e com solidez."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "Você prefere um resultado rápido ou sustentável, mesmo que leve um pouco mais de tempo?",
        response: "Você vai sentir progresso gradual. Não colocamos pressão — colocamos estrutura. É um processo que respeita seu tempo e te leva com segurança. A constância gera o resultado certo."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Se a gente encaixasse isso na sua realidade atual, com segurança, faria sentido pra você agora?",
        response: "Entendo você. Já vimos isso muitas vezes. E é por isso que temos formas acessíveis e planejadas de entrar com leveza. A ideia não é te sobrecarregar — é construir com firmeza, no seu ritmo."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Se pudéssemos encaixar isso de forma leve na sua rotina, sem atrapalhar o que já funciona, faria sentido?",
        response: "Você não precisa se atropelar. Esse processo respeita seu tempo. A gente vai com leveza, adaptando à sua rotina — sem pressão. E o progresso vem de forma constante, sem causar caos."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "O que te ajudaria a se sentir mais seguro(a) nessa conversa com seu parceiro(a)?",
        response: "Faz todo sentido. Essa decisão é importante, e eu posso te ajudar a organizar os pontos com calma. Se quiser, podemos até montar essa escolha juntos, respeitando o tempo de vocês dois."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Se você tivesse alguém do seu lado durante o processo, isso te faria se sentir mais confiante?",
        response: "Você não vai estar sozinho(a). E com cada pequeno avanço, sua confiança cresce. O método é passo a passo, com acompanhamento constante. Juntos, a gente constrói o seu ritmo de vitória."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Se tivesse certeza de que, mesmo se errar, vai ter suporte pra corrigir, isso te traria mais tranquilidade?",
        response: "Essa dúvida é válida — e prevista. O processo aqui é construído com acompanhamento contínuo. Mesmo que você erre, a gente ajusta junto. Não tem quebra, não tem abandono. É passo a passo, com segurança."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Se soubesse que vai ter estrutura e acompanhamento constantes, isso traria mais confiança?",
        response: "Você vai ter estrutura, segurança e presença em cada passo. Não é mágica, é constância. E isso a gente cuida junto — com calma, sem te deixar sozinho(a). O processo foi feito pra sustentar, não pra pressionar."
      }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova social",
    trigger: "🔥 Dados, método validado, clareza técnica",
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "Você conseguiria me detalhar o que tentou antes, pra eu entender onde exatamente falhou?",
        response: "Faz sentido essa dúvida. A maioria das abordagens não parte de dados nem se adapta ao seu perfil. Tenho um comparativo com os principais erros que levam à frustração e o porquê esse método tem taxa de resultado acima da média. Posso te mostrar com clareza."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "Quer que eu te mostre casos reais de perfis como o seu que aplicaram e tiveram resultado mensurável?",
        response: "Entendo sua dúvida. Posso te mostrar análises de pessoas com o mesmo perfil — inclusive como aplicaram o método, os ajustes feitos e os resultados exatos. Isso te dá clareza pra decidir com confiança, sem achismo."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "Quer que eu te mostre um cronograma médio com as etapas e o tempo de impacto por perfil?",
        response: "Posso te apresentar um cronograma baseado em dados reais, com variação por perfil comportamental. Tem gente que vê impacto em 2 semanas, outros em 45 dias — tudo depende da aplicação. E temos como monitorar juntos."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Quer que eu te mostre uma simulação de ROI com projeção de tempo e comparativo de investimento?",
        response: "Faz sentido querer clareza. Posso te mostrar números reais de retorno, com projeções e formas inteligentes de parcelamento. Assim, você toma sua decisão com base em lógica, não pressão."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Quer que eu te mostre um cronograma prático com carga horária e resultados por etapa?",
        response: "Entendo sua preocupação. Posso te apresentar o cronograma real do processo, com estimativa por etapa, tempo médio de aplicação e como otimizar sua agenda. Assim você decide com clareza e segurança."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "Quer que eu te envie um documento com os principais pontos, dados e condições pra você apresentar com clareza?",
        response: "Sem problema. Tenho um material completo com todos os dados, benefícios, condições e retorno esperado. Assim, você pode mostrar com lógica e segurança — sem parecer que está 'vendendo a ideia'."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Você teria mais confiança se soubesse exatamente o passo a passo e tivesse suporte pra cada fase?",
        response: "Totalmente compreensível. Posso te mostrar o mapa do processo, os módulos, os checkpoints e os recursos de apoio. Você vai saber o que fazer, quando e como — com base em dados reais. Assim, você segue com precisão."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Quer que eu te mostre o plano de contingência e a taxa de sucesso do processo?",
        response: "Isso é totalmente compreensível. Posso te mostrar os dados de taxa de sucesso, os checkpoints, e os ajustes que fazemos se algo não sair como o previsto. Não é tentativa — é processo validado, com plano alternativo."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Quer que eu te apresente os dados de aplicação, taxa de sucesso e os fatores que garantem a eficácia do método?",
        response: "Posso te mostrar dados, estudos de caso, taxa de aplicação real e o modelo completo do processo. Não é promessa — é consequência de um método testado, estruturado e com suporte pra cada fase."
      }
    ]
  }
};

export default function CXconversão() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);
  const [expandedObjections, setExpandedObjections] = useState({});

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    setSelected(exists ? selected.filter((s) => s.label !== label) : [...selected, { label, profile }]);
  };

  const toggleExpand = (profile) => {
    setExpandedProfiles((prev) =>
      prev.includes(profile) ? prev.filter((p) => p !== profile) : [...prev, profile]
    );
  };

  const toggleObjection = (profile, index) => {
    const key = `${profile}-${index}`;
    setExpandedObjections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort((a, b) => profileCount[b] - profileCount[a]);

  return (
    <div className="container">
      <div className="title">CXconversão</div>
      <p className="subtitle">Radar Comportamental em Calls 1:1</p>

      {/* Marcadores de Observação */}
      <div className="card">
        <h2>Marque os sinais observados durante a call:</h2>
        <div className="markers-grid">
          {markers.map((item, index) => (
            <label key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.label, item.profile)}
                checked={selected.some((s) => s.label === item.label)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Análise de Perfis */}
      {sortedProfiles.length > 0 && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>
            🎯 Análise de Perfil Comportamental
          </h2>
          
          {sortedProfiles.map((profileKey) => {
            const suggestion = suggestions[profileKey];
            const count = profileCount[profileKey];
            
            return (
              <div key={profileKey} className={`card profile-${profileKey.toLowerCase()}`}>
                <div className="card-header">
                  <div>
                    <h2>{suggestion.label} ({count} indicadores)</h2>
                    <p>{suggestion.approach}</p>
                    <p>{suggestion.trigger}</p>
                  </div>
                  <button onClick={() => toggleExpand(profileKey)}>
                    {expandedProfiles.includes(profileKey) ? 'Ocultar Objeções' : 'Ver Objeções'}
                  </button>
                </div>
                
                {expandedProfiles.includes(profileKey) && (
                  <div style={{marginTop: '1.5rem'}}>
                    <h3>💬 Objeções e Respostas Calibradas:</h3>
                    {suggestion.objections.map((objection, index) => (
                      <div key={index} className="objection">
                        <div 
                          className="objection-title"
                          onClick={() => toggleObjection(profileKey, index)}
                          style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                        >
                          <span>{objection.title}</span>
                          <span>{expandedObjections[`${profileKey}-${index}`] ? '▼' : '▶'}</span>
                        </div>
                        
                        {expandedObjections[`${profileKey}-${index}`] && (
                          <div style={{marginTop: '1rem'}}>
                            <div className="objection-question">
                              <div className="question-label">💬 Pergunta Calibrada:</div>
                              <em>"{objection.question}"</em>
                            </div>
                            <div className="objection-response">
                              <div className="response-label">💡 Resposta Adaptada:</div>
                              "{objection.response}"
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Estado inicial */}
      {sortedProfiles.length === 0 && (
        <div className="empty-state">
          <h2>Análise em Tempo Real</h2>
          <p>Marque os sinais comportamentais observados para receber as estratégias de conversão personalizadas.</p>
        </div>
      )}

      {/* Rodapé */}
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <p style={{color: '#888', fontSize: '0.9rem'}}>
          CXconversão - Sistema de Análise Comportamental para Conversão em Calls
        </p>
      </div>
    </div>
  );
}
