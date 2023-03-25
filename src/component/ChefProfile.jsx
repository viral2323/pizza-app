import React from "react";
import { Button } from "antd";
import Icon from '@ant-design/icons'
import Pizza from "../assests/miniPizza.png";
import Facebook from '../assests/facebook.svg'
import Twitter from '../assests/twitter.svg'
import Vector from '../assests/Vector.svg'
import Youtube from '../assests/youtube.svg'

export default function ChefProfile() {
  return (
    <div >
      <div className="foodoption">
        <img className="foodoptionimage" src={Pizza} alt="food Image" />
        <span className="foodoptiontitle">Sleek Iron Clock</span>
        <span className="foodoptionsubtitle">Pizza,Uncategorized</span>
        <Button className="chefprofilebtn" type="primary" shape="default">
          Chef
        </Button>
        <div className="socialmediaicon">
      <img src={Vector} />
      <img src={Twitter} />
      <img src={Facebook} />
      <img src={Youtube} />
      </div>
      </div>
      
    </div>
  );
}
