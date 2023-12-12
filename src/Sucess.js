import React, { useState } from 'react';
import validator from 'validator';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logoSvg from "./card-logo.svg"
import completeLogo from "./icon-complete.svg"


function Sucess() {
  const navigate = useNavigate();
  const number = localStorage.getItem("number");
  const name = localStorage.getItem("name");
  const cvc = localStorage.getItem("cvc");
  const mm = localStorage.getItem("mm");
  const yy = localStorage.getItem("yy");
  const formatoNumerico = number.replace(/(\d{4})/g, '$1 ');
   

const submitForm = (event) => {
  event.preventDefault();
  navigate("/");
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
     <div class="numeros">{formatoNumerico || "0000 0000 0000 0000"}</div>
     </div>
     <div class="name-data">
       <h1>{name || "Enter Your Name"}</h1>
       <h2 >{mm || "00"}/{yy || "00"}</h2>
     </div>
   </asider>
     <asider class="cartao-verso">
       <div class="container-cvc">
         <h1>{cvc || "000"}</h1>
       </div>
     </asider>
   </article>
 </section>

 <section class="formulario">
   <form class="form-sucess-card" onSubmit={submitForm}>
   <section className='section-complete'>
    <img class="logoComplete" src={completeLogo}></img>
    <h1>THANK YOU!</h1>
    <h2>We've added your card details</h2>
   </section>
   <button type="submit"  class='button-confirm'>Continue</button>

</form>

 </section>

 </main>
  );
}

export default Sucess;
