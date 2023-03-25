import React from "react";
import { Input, Button, Divider } from "antd";
import { AndroidOutlined } from "@ant-design/icons";
import Pizza from "../assests/miniPizza.png";
import Facebook from '../assests/facebookred.svg'
import Twitter from '../assests/twitterred.svg'
import Instagram from '../assests/instagramred.svg'
import Youtube from '../assests/youtubered.svg'
import Food from '../assests/food.svg'

export default function Footer() {
  return (
    <div>
      <div className="footertop">
        <span className="footertitle">Subscribe To NewsLetter</span>
        <span className="footersubtitle">
          Subscribe to recive our Weekly hot promotion every monday
        </span>
        <div className="footertextfieldwrapper">
          <Input className="footertextfield" placeholder="Enter Your Name" />
          <Button className="footerbtn" type="primary">
            Submit
          </Button>
        </div>
        <Divider className="footerdivider"/>
        <Divider className="footerdividercontent">
          <div className="footerlogo">
            <img className="headermainimg" src={Food} />
            <div>Lorem, ipsum dolor </div>
          </div>
        </Divider>
        <div className="footersmalllogo">
        <div className="footerlogo">
            <img className="headermainimg" src={Food} />
            <div>Lorem, ipsum dolor </div>
          </div>
        </div>
        <Divider className="footerdivider"/>
        <div className="footerbottum">
          <span className="copyright">Copyright All Right Reserved</span>
          <span className="footericon">Lorem Ipsum Dolor Sit Amet</span>
          <div  className="footericon">
            <span>Follow us</span>
            <img className="footericonsize" src={Instagram} />
            <img className="footericonsize" src={Twitter} />
            <img className="footericonsize" src={Facebook} />
            <img className="footericonsize" src={Youtube} />
          </div>
        </div>
      </div>
    </div>
  );
}
