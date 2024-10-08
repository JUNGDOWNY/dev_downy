import React, { useState } from 'react';
import './calc.css';

function Calc() {
  const [monitorText, setMonitorText] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [operator, setOperator] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [initialInput, setInitialInput] = useState(true);

  const numClick = (value) => {
    if (initialInput) {
      setMonitorText(value);
      setInitialInput(false);
    } else {
      setMonitorText((prevText) => prevText + value);
    }
  };

  const handleInputChange = (event) => {
    setMonitorText(event.target.value);
  };

  const remove = () => {
    setMonitorText('');
    setStoredValue('');
    setOperator('');
    setDisplayText('');
    setInitialInput(true); 
  };

  const backSpace = () => {
    setMonitorText(monitorText.slice(0, -1));
  };

  const numOperator = (operatorValue) => {
    if (monitorText === '') return; 
    setStoredValue(monitorText);
    setMonitorText('');
    setOperator(operatorValue);
    setDisplayText((prevText) => prevText + monitorText + ' ' + operatorValue + ' ');
    setInitialInput(true); 
  };

  const calcResult = () => {
    if (storedValue && monitorText && operator) {
      const current = parseFloat(monitorText);
      const previous = parseFloat(storedValue);

      let result;
      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case '*':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        default:
          return;
      }

      setMonitorText(String(result));
      setDisplayText((prevText) => prevText + monitorText + ' = ' + result); 
      setStoredValue('');
      setOperator('');
      setInitialInput(true);
    }
    setDisplayText('');
  };

  return (
    <div className='wrap'>
      <div className='calc'>
        <input 
          type='text' 
          className='ipt-monitor' 
          value={displayText}
          readOnly 
        />
        <input 
          type='text' 
          className='monitor' 
          value={monitorText} 
          onChange={handleInputChange} 
          readOnly 
        />
        <div className='calc-button'>
          <button onClick={() => numClick('7')}>7</button>
          <button onClick={() => numClick('8')}>8</button>
          <button onClick={() => numClick('9')}>9</button>
          <button onClick={() => numOperator('+')}>➕</button>
          <button onClick={() => numClick('4')}>4</button>
          <button onClick={() => numClick('5')}>5</button>
          <button onClick={() => numClick('6')}>6</button>
          <button onClick={() => numOperator('-')}>➖</button>
          <button onClick={() => numClick('1')}>1</button>
          <button onClick={() => numClick('2')}>2</button>
          <button onClick={() => numClick('3')}>3</button>
          <button onClick={() => numOperator('*')}>✖️</button>
          <button className='btn-zero' onClick={() => numClick('0')}>0</button>
          <button onClick={() => numClick('.')}>.</button>
          <button onClick={() => numOperator('/')}>➗</button>
          <button onClick={backSpace}>🔙</button>
          <button onClick={remove}>DEL</button>
          <button className='btn-result' onClick={calcResult}>🟰</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
