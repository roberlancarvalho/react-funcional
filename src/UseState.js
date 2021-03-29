import React, { useState } from 'react';

function UseState() {

  const [numero, setNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [resultado, setResultado] = useState();

  const somar = () => {
    const numeroInt = parseInt(numero);
    const segNumero = parseInt(segundoNumero);

    setResultado(numeroInt + segNumero);
  }

  
  return (
    <div>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />

      <button onClick={somar}>Somar</button><br/><br/>
      Resultado
      <input type="text" value={resultado} onChange={e => setResultado(e.target.value)} /><br />
    </div>
  );
}

export default UseState;
