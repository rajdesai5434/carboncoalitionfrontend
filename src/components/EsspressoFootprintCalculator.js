import React, { useState } from 'react';

const EsspressoFootprintCalculator = () => {
  const [quantity, setQuantity] = useState(0);
  const [caffine, setCaffine] = useState(151.6);
  const [water, setWater] = useState(140);
  const [CO2, setCO2] = useState(0.09);
  const [tree, setTrees] = useState(0.2);
  const [smartPhone, setSmartPhone] = useState(12);
  const [gasoline, setGasoline] = useState(0.1);

  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleCalculate = () => {

    const carbonFootprintValue = 0.5;
    setCarbonFootprint(carbonFootprintValue);

    setCaffine(caffine*quantity);
    setWater(water*quantity);
    setCO2(CO2*quantity);
    setTrees(tree*quantity);
    setSmartPhone(smartPhone*quantity);
    setGasoline(gasoline*quantity);
  };

  return (
    <div>
      <h2>Esspresso Footprint Calculator</h2>
      <label>
      Espesso/week:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {carbonFootprint !== null && (
        <div>
        <p>The carbon footprint of {quantity} Espesso(s) a week is as following:</p>
        <p>&#x2615; {caffine.toFixed(2)} mg of caffeine consumed</p>
        <p>&#x1F4A7; {water.toFixed(2)} liters of water used</p>
        <p>&#x1F333; {tree.toFixed(2)} trees are needed to absorb your CO₂ emissions over a week.</p>
        <p>&#x1F4F1; {smartPhone.toFixed(2)} smartphones charged</p>
        <p>&#x26FD; {gasoline.toFixed(2)} liters of gasoline consumed</p>
        <p>&#x1F4A8; {CO2.toFixed(2)} kg CO₂eq produced</p>
        </div>
      )}
    </div>
  );
};

export default EsspressoFootprintCalculator;
