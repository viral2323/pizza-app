import React from "react";
import { Button } from "antd";
import Pizza from "../../src/assests/pizza.png";

export default function Title() {
  return (
    <div className="titlewrapper">
        <img className="mainimg" src={Pizza} alt="pizza" />
      
      <div className="text">
        <div className="title">EAT OFF BEAT!</div>
        <span className="subtitle">
          whatever the question, pizza is the answer.
        </span>
        <Button
          className="orderbtn"
          type="primary"
          shape="round"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}
