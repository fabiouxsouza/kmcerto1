import React, { useState } from 'react';
import './RegistroDespesa.css';

function RegistroDespesa() {
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [comprovante, setComprovante] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'comprovante') {
      setComprovante(event.target.files[0]);
    } else {
      if (name === 'valor') {
        setValor(value);
      } else if (name === 'tipo') {
        setTipo(value);
      } else if (name === 'data') {
        setData(value);
      } else if (name === 'descricao') {
        setDescricao(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ tipo, valor, data, descricao, comprovante });
  };

  return (
    <div>
      <h2>Registro de Despesa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tipo">Tipo de Despesa:</label>
          <select id="tipo" name="tipo" value={tipo} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="combustivel">Combustível</option>
            <option value="manutencao">Manutenção</option>
            <option value="alimentacao">Alimentação</option>
            <option value="financiamento">Financiamento</option>
            <option value="pedagio">Pedágio</option>
            <option value="prolabore">Pró-labore</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <div>
          <label htmlFor="valor">Valor:</label>
          <input type="number" id="valor" name="valor" value={valor} onChange={handleChange} step="0.01" />
        </div>
        <div>
          <label htmlFor="data">Data:</label>
          <input type="date" id="data" name="data" value={data} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="descricao">Descrição (Opcional):</label>
          <textarea id="descricao" name="descricao" value={descricao} onChange={handleChange} rows="4" cols="50"></textarea>
        </div>
        <div>
          <label htmlFor="comprovante">Comprovante (Opcional):</label>
          <input type="file" id="comprovante" name="comprovante" onChange={handleChange} />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroDespesa;