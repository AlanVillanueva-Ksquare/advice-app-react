import './App.css';
import React, { useEffect, useState } from 'react';
import Advice from './Advice';
//import AdviceButton from './AdviceButton';
import TwitterButton from './TwitterButton';

function App() {
  const [advice,setAdvice] = useState('')

  const randomAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data.slip.advice)
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = '#'+randomColor
  }
  useEffect(()=>{
    randomAdvice()}
  )
  return (
    <section id="container">
      <Advice advice={advice}></Advice>
      <div id="buttons">
        <TwitterButton advice={advice}></TwitterButton>
        <button id="new-advice" className="new-advice" onClick={randomAdvice}>Another One Please</button>
      </div>
    </section>
  );
}

export default App;
