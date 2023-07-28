import React, { useState } from 'react';

const SimpleInt = () => {
  const [principal, setPrincipal] = useState('');
  const [rate] = useState(3);
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);
  const [CO2, setCO2] = useState(null);
  const [espresso, setESP] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult(null);
      return;
    }

    const simpleInterest = (p * r * t) / (52*100);
    setResult(simpleInterest);

    const CO2 = simpleInterest * 0.67
    setCO2(CO2);

    const espresso = 0.09 * CO2 * 1000/t
    setESP(espresso);
  };

  return (
    <div className="calculator-box">
      <h2>Carbon Credits Purchased</h2>
      <div className="input-group">
        <label>Principal:</label>
        <input
          type="text"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Time (weeks):</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateInterest}>Calculate</button>
      {result !== null && (
        <div className="result">
          <p>Interest Earned: {result.toFixed(2)} pounds</p>
          <p> &#x1F4A8; Carbon removed from environment: {CO2.toFixed(2)} tons</p>
          <p> Carbon removed equivalent to {espresso.toFixed(2)} &#x2615;/week</p>
        </div>
      )}
    </div>
  );
};

export default SimpleInt;
