import React from "react";
import "./App.css";


import PricingChart from "./components/pricingchart";
const App = () => {
  return (
    <div className="a-body">
      <div className="a-t">
        <div  className="a-t-bar" >
          <button className="a-b">Monthly</button>

          <span >Annual</span>
        </div>
      </div>
      <div  className="a-bottom">
      <PricingChart />
      </div>
    </div>
  );
};

export default App;
