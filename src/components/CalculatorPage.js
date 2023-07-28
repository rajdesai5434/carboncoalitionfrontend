// CalculatorPage.js
import React from 'react';
import SimpleInt from './SimpleInt';
import CarbonFootprintCalculator from './CarbonFootprintCalculator';

const CalculatorPage = () => {
  return (
    <div>
      <h1>CalculatorPage</h1>
      <div>
        <SimpleInt/>
      </div>
      <div>
        <CarbonFootprintCalculator/>
      </div>
    </div>
  );
};

export default CalculatorPage;
