import React from "react";
import "../styles/TokenTable.css"; // Import the CSS file for styling

const TokenTable = ({ tokens }) => {
  return (
    <div className="token-table">
      <table>
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Token Address</th>
            <th>Token Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.address}>
              <td>{token.name}</td>
              <td>{token.address}</td>
              <td>{token.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
