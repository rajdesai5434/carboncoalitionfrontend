// CalculatorPage.js
import React from 'react';
import SimpleInt from './SimpleInt';
import EsspressoFootprintCalculator from './EsspressoFootprintCalculator';

const CalculatorPage = () => {
  return (
    <div>
      <h1>CalculatorPage</h1>
      <div>
        <SimpleInt/>
      </div>
      <div>
        <EsspressoFootprintCalculator/>
      </div>
    </div>
  );
};

export default CalculatorPage;
