import React from "react";
import FoodImage1 from "../../src/assests/foodimage1.png";
import FoodImage2 from '../../src/assests/foodimage2.png'
import FoodImage3 from '../../src/assests/foodimage3.png'
import { Button } from "antd";
import { useState } from "react";



export default function FoodOrder() {
  const [image,setImage] = useState([FoodImage1,FoodImage2,FoodImage3])
  return (
<>
    {
      image.map((img) => {
        return(
          <div className="food">
          <img className="foodimage" src={img} alt="Image" />
          <div className="imagetext">
            <div className="foodtitle">BISTRO PIZZERIA</div>
            <div className="foodsubtitle">FOOD WITH SMILE</div>
            <Button
              className="foodimgbtn"
              type="primary"
              shape="round"
            >
             Order Now
            </Button>
          
          </div>
          
        </div>
        )
      })
    }

    {/* // <div className="food">
    //   <img className="foodimage" src={FoodImage1} alt="Image" />
    //   <div className="imagetext">
    //     <div className="foodtitle">Lorem Ipsum Dollor</div>
    //     <div className="foodsubtitle">Lorem Ipsum Dollor Sit</div>
    //     <Button
    //       className="foodimgbtn"
    //       type="primary"
    //       shape="round"
    //     >
    //      Order Now
    //     </Button>
      
    //   </div>
      
    // </div> */}
    </>
  );
}
