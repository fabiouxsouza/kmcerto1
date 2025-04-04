import React from 'react';
import RegistroDespesa from './components/RegistroDespesa'; // Importe o componente
import './App.css'; // Importe o CSS (opcional)

function App() {
  return (
    <div className="App">
      <h1>KMCerto</h1>
      <RegistroDespesa /> {/* Use o componente aqui */}
    </div>
  );
}

export default App;