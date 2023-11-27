import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputName, setInputNameValue] = useState('');
  const [inputCvc, setInputCvcValue] = useState('');
  const [inputMm, setInputMmValue] = useState('');
  const [inputAa, setInputAaValue] = useState('');

  const [displayedNumbers, setDisplayedNumbers] = useState('0000 0000 0000 0000');
  const [displayedName, setDisplayedNname] = useState('Your Name card');
  const [displayedCvc, setDisplayedCvc] = useState('000');
  const [displayedMm, setDisplayedMm] = useState('MM');
  const [displayedAa, setDisplayedAa] = useState('AA');

  console.log(inputValue)

  const handleInputChange = (e) => {
   
    // Remove todos os espaços em branco e obtém apenas os números
    const numerosApenas = e.target.value.replace(/\s/g, '');

    // Adiciona um espaço a cada 4 dígitos
    const formatoNumerico = numerosApenas.replace(/(\d{4})/g, '$1 ');

    // Atualiza o estado com o valor formatado
    setDisplayedNumbers(formatoNumerico.trim())
  };

  const handleInputChangeName = (e) => {
    const value = e.target.value;
    setInputNameValue(value);

    setDisplayedNname(value)
  };

  const handleInputChangeCvc = (e) => {
    const value = e.target.value.slice(0, 3);
    setInputCvcValue(value);

    // Atualize os números na sequência do primeiro zero até o último
    setDisplayedCvc((prevNumbers) =>
      prevNumbers
        .split('')
        .map((digit, index) => (digit === '0' ? value[index] || '0' : digit))
        .join('')
    );
  };

  const handleInputChangeMm = (e) => {
    const value = e.target.value.slice(0, 2);
    setInputMmValue(value);

    // Atualize os números na sequência do primeiro zero até o último
    setDisplayedMm(value);
  };

const handleInputChangeAa = (e) => {
  const value = e.target.value.slice(0,2);
  setInputAaValue(value);

  setDisplayedAa(value)
}

  return (
    <main className="container-interactive-card">
    <section class="cartao-credito">
   <article class="cartao">
   <asider class="cartao-frente">
     <div class="bolinhas">
       <div class="bol1"></div>
       <div class='bol2'></div>
     </div>
     <div class="numero">
     <div class="numeros">{displayedNumbers}</div>
     </div>
     <div class="name-data">
       <h1>{displayedName}</h1>
       <h2>{displayedMm}/{displayedAa}</h2>
     </div>
   </asider>
     <asider class="cartao-verso">
       <div class="container-cvc">
         <h1>{displayedCvc}</h1>
       </div>
     </asider>
   </article>
 </section>

 <section class="formulario">
   <form>
   <label for="nomeCompleto">cardholder name</label>
   <input type="text" placeholder="Card Name"value={inputName} onChange={handleInputChangeName}></input>

   <label for="numeroCartao">card number</label>
   <input type="text"   maxLength={20} placeholder='0000 0000 0000 0000' value={inputValue} onChange={handleInputChange} />
   <div className='alinhamento-conteudo-2'>
     <label >exp. date (mm/yy)</label>
     <label for="cvc" class='cvc-cartao'>CVC</label>

   </div>
   <div className='alinhamento-conteudo'>
     <input type="text" id="dataExpiracao"  value={inputMm} onChange={handleInputChangeMm}></input>
     <input type="text" id="dataExpiracao"  value={inputAa} onChange={handleInputChangeAa}></input>
     <input type="text" id="cvc"  placeholder='CVC' value={inputCvc} onChange={handleInputChangeCvc}></input>
   </div>
   <button type="submit" class='button-confirm'>Confirm</button>

</form>

 </section>

 </main>
  );
}

export default App;
