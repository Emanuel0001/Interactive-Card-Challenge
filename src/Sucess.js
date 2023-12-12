import React, { useState } from 'react';
import validator from 'validator';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import logoSvg from "./card-logo.svg"
import completeLogo from "./icon-complete.svg"


function Sucess() {
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
    setInputValue(formatoNumerico.trim())

    if (validator.isCreditCard(numerosApenas)) {
      let color = document.getElementById('label-NumCard');
        color.style = "color: black"
        color.style.border = "solid 1px purple"
        toast.success('Número!')
       
    } else {
      let color = document.getElementById('label-NumCard');
      color.style = "color: hsl(0, 100%, 66%)"
      color.style.border = "solid 1px hsl(0, 100%, 66%)"

    }

  };

  const handleInputChangeName = (e) => {
    const value = e.target.value;
    setInputNameValue(value);

    setDisplayedNname(value)
    let inputName = document.getElementById('inputName');

  const regex = /^[A-Za-z\s]+$/;
    
    if(regex.test(value)){
      let color = document.getElementById('inputName');
      color.style = "color: red"
      color.style.border = "solid 1px purple"
      color.style.color = "black"
      
  }
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
  

    // Verificando se o campo tem exatamente 3 dígitos
    if (value.length === 3 ) {

    let color = document.getElementById('label-Cvc');
        color.style = "color: black"
        color.style.border = "solid 1px purple"
        toast.success('CVC')
    } else {
      let color = document.getElementById('label-Cvc');
      color.style = "color: hsl(0, 100%, 66%)"
      color.style.border = "solid 1px hsl(0, 100%, 66%)"

    }
  };

  const handleInputChangeMm = (e) => {
    const value = e.target.value.slice(0, 2);
    setInputMmValue(value);

    // Atualize os números na sequência do primeiro zero até o último
    setDisplayedMm(value);
    if (value.length === 2 ) {

      let color = document.getElementById('label-MM');
          color.style = "color: purple"
          color.style.border = "solid 1px purple"
          toast.success('MM')
      } else {
        let color = document.getElementById('label-MM');
        color.style = "color: hsl(0, 100%, 66%)"
        color.style.border = "solid 1px hsl(0, 100%, 66%)"
  
      }
  };

const handleInputChangeAa = (e) => {
  const value = e.target.value.slice(0,2);
  setInputAaValue(value);

  setDisplayedAa(value)
  if (value.length === 2 ) {

    let color = document.getElementById('label-YY');
        color.style = "color: purple"
        color.style.border = "solid 1px purple"
        toast.success('YY')
    } else {
      let color = document.getElementById('label-YY');
      color.style = "color: hsl(0, 100%, 66%)"
      color.style.border = "solid 1px hsl(0, 100%, 66%)"

    }
}

  return (
    <main className="container-interactive-card">
    <section class="cartao-credito">
   <article class="cartao">
   <asider class="cartao-frente">
     <div class="bolinhas">
       <img class="svg-card" src={logoSvg} alt='Logotipo do App' ></img>
     </div>
     <div class="numero">
     <div class="numeros">{inputValue || "0000 0000 0000 0000"}</div>
     </div>
     <div class="name-data">
       <h1>{inputName || "Enter Your Name"}</h1>
       <h2 >{displayedMm || "00"}/{displayedAa || "00"}</h2>
     </div>
   </asider>
     <asider class="cartao-verso">
       <div class="container-cvc">
         <h1>{inputCvc || "000"}</h1>
       </div>
     </asider>
   </article>
 </section>

 <section class="formulario">
   <form class="form-sucess-card">
   <section className='section-complete'>
    <img class="logoComplete" src={completeLogo}></img>
    <h1>THANK YOU!</h1>
    <h2>We've added your card details</h2>
   </section>
   <button type="submit" class='button-confirm'>Continue</button>

</form>

 </section>

 </main>
  );
}

export default Sucess;
