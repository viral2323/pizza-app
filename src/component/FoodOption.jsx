import React from "react";
import { Button } from "antd";
import Pizza from "../assests/miniPizza.png";
import { AndroidOutlined } from "@ant-design/icons";
import CartRed from '../assests/cartred.svg'

export default function FoodOption() {
  return (
    <div>
      <div className="foodoption">
        <img className="foodoptionimage" src={Pizza} alt="food Image" />
        <span className="foodoptiontitle">Sleek Iron Clock</span>
        <span className="foodoptionsubtitle">Pizza,Uncategorized</span>
        <span className="foodoptionprice">$100.00 - $200.00</span>
        <Button
          className="foodoptionbtn"
          type="primary"
          shape="round"
        ><img className="foodoptionbtnicon" src={CartRed}/>
          Select Option
        </Button>
      </div>
    </div>
  );
}
