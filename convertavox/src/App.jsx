import { useState } from 'react';

const markers = [
  { label: "Fala rápida e direta", profile: "D" },
  { label: "Fala animada e com histórias", profile: "I" },
  { label: "Fala pausada e cuidadosa", profile: "S" },
  { label: "Fala técnica e analítica", profile: "C" }
];

function App() {
  return (
    <div>
      <h1>Convertavox</h1>
      <ul>
        {markers.map((m, i) => (
          <li key={i}>{m.label} ({m.profile})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
