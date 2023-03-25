import React from "react";
import { Button } from "antd";
import Pizza from "../assests/miniPizza.png";
import { AndroidOutlined } from "@ant-design/icons";
import CartRed from '../assests/cartred.svg'
import Burger from '../assests/burger.png'

export default function CartProduct() {
  return (
    <div style={{position: 'relative' }}>
      <div className="foodoption">
        <img className="foodoptionimage" src={Burger} alt="food Image" />
        <span className="foodoptiontitle">Sleek Iron Clock</span>
        <span className="foodoptionsubtitle">Pizza,Uncategorized</span>
        <span className="foodoptionprice"><span style={{fontSize: '14px',textDecoration: 'line-through',color: '#777777'}}>$100.00</span>- $200.00</span>
        <Button
          className="foodoptionbtn"
          type="primary"
          shape="round"
        ><img className="foodoptionbtnicon" src={CartRed}/>
          Add To Cart
        </Button>
        
      </div>
      <div className="salecategory">
            <div style={{borderRadius: '50%'}}>Sale</div>
        </div>
    </div>
  );
}
