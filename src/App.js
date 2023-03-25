import React, { useState } from "react";
import Heder from "./component/Heder";
import "antd/lib/style";
import "../src/style/Style.css";
import Title from "./component/Title";
import FoodOrder from "./component/FoodOrder";
import quoteIcon1 from '../src/assests/quoteicon1.svg'
import quoteIcon2 from '../src/assests/quoteicon2.svg'
import quoteIcon3 from '../src/assests/quoteicon3.svg'


import { Button } from "antd";
import FoodOption from "./component/FoodOption";
import CartProduct from "./component/CartProudct";
import ChefProfile from "./component/ChefProfile";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = ()=> {
    setIsOpen(!isOpen)
  }
  console.log('open',isOpen)
  return (
    <>
    {/* <div className="" style={{display: `${isOpen ? 'flex' : 'none'}`}}> */}
    {isOpen && <Sidebar handleOpen={handleOpen}/>}
    {/* </div> */}
    <div style={{display: `${isOpen ? "none" : "block"}`}}>
      <div className="headertitle">
        <Heder handleOpen={handleOpen} />
        <Title />
      </div>
      <div className="maincss">
        <div className="foodwrapper">
          <FoodOrder />
        </div>
        <div className="quote">
        <div className="shipping">
          <div className="quoteIcon">
          <img src={quoteIcon1} />
          </div>
          <div className="quotetext">
            <span className="quotetitle">Free shipping</span>
            <span className="quotesubtitle">
              sing up for update and get free shipping
            </span>
          </div>
        </div>
        <div className="delivery">
          <div className="quoteIcon">
          <img src={quoteIcon2} />
          </div>
          <div className="quotetext">
            <span className="quotetitle">On time</span>
            <span className="quotesubtitle">
              Fastest Delivery brings you foodies.
            </span>
          </div>
        </div>
        <div className="quality">
          <div  className="quoteIcon">
          <img src={quoteIcon3} />
          </div>
          <div className="quotetext">
            <span className="quotetitle">Free Delivery</span>
            <span className="quotesubtitle">
              sing up for free 5 delivery
            </span>
          </div>
        </div>
      </div> 
        <div className="category">
          <div className="btncontainer">
        <Button className="foodcategorubtn" type="primary" shape="round">
          Pizza sets
        </Button>
        <Button className="foodcategorubtn" type="primary" shape="round">
          burgers
        </Button>
        <Button className="foodcategorubtn" type="primary" shape="round">
          sauses
        </Button>
        </div>
        <div className="btncontainer">
        <Button className="foodcategorubtn" type="primary" shape="round">
          soups
        </Button>
        <Button className="foodcategorubtn" type="primary" shape="round">
          fries
        </Button>
        </div>
      </div>
        <div className="foodoptionwrapper">
        <FoodOption />
        <FoodOption />
        <FoodOption />
        <FoodOption />
      </div>

      <div className="product">
        <div className="productleft">
          Popular Burger
        </div>
        <div className="productright">
          All Products
        </div>
      </div> 
         <div className="foodoptionwrapper">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
        <div className="product">
        <div className="productleft">
          Our Talentd Chefs
        </div>
        <div className="productright">
          All Products
        </div>
      </div>
        <div className="chefprofile">
      <ChefProfile/>
      <ChefProfile/>
      <ChefProfile/>
      <ChefProfile/>
      </div>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;
