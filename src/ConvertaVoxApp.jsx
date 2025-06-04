import { useState } from 'react';

const ConvertaVoxApp = () => {
  const [message, setMessage] = useState("📲 ConvertaVox™ pronto para uso!");

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>{message}</h1>
      <p>Radar Comportamental em Calls 1:1</p>
    </div>
  );
};

export default ConvertaVoxApp;