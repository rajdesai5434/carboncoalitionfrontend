import React, { useState, useEffect } from "react";
import WalletTokens from "./WalletTokens";
import CarbonBank from "./CarbonBank";
import Deposit from "./Deposit"
import Withdraw from "./Withdraw";

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
        <Deposit/>
      </div>
      <div>
        <Withdraw/>
      </div>
    </div>
  );
};

export default PortfolioPage;
