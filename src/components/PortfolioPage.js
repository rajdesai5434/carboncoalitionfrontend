import React, { useState, useEffect } from "react";
import WalletTokens from "./WalletTokens";
import CarbonBank from "./CarbonBank";

const PortfolioPage = () => {
  return (
    <div>
      <div>
        <WalletTokens/>
      </div>
      <div>
        <CarbonBank/>
      </div>
      <div>
        <h3>Carbon Credits purchased through deposits</h3>
      </div>
    </div>
  );
};

export default PortfolioPage;
