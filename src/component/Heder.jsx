import React from "react";
import { Divider,Dropdown, Menu, Space,Button  } from "antd";
import { DownOutlined  } from "@ant-design/icons";
import Map from '../assests/map.svg'
import Food from '../assests/food.svg'
import Shopping from '../assests/shopping.svg'
import Cart from '../assests/cart.svg'
import CartWhite from '../assests/cartwhite.svg'
import Search from '../assests/search.svg'
import User from '../assests/user.svg'
import Heart from '../assests/heart.svg'
import NavMenu from '../assests/menu.svg'

const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );

export default function Heder({handleOpen}) {

  const clickOoenMenu = (e) => {
    handleOpen()
  }

  return (
    <div>

    <div className="headerWrapper">
      {/* <div className="header"> */}
        <div className="first">
          <div className="first1">
        <img className="headerimg" src={Map} />
          <span>Find nearest store?</span>
          </div>
        </div>
        <div className="second">
          <div className="second2">
        <img className="headermainimg" src={Food} />
          <span>PIZZAPIZZA</span>
          </div>
        </div>
        <div className="third">
          <div className="third3">
        <img className="headerimg" src={Shopping} />
          <span>Track your order</span>
          </div>
        </div>
      {/* </div> */}
      <Divider className="divider" />
      {/* <div className="navbarWrapper"> */}
        <div className="navbarLeft">
          <Dropdown className="item" overlay={menu} trigger={["click"]}>
            <a onClick={(e) => {}} >
              <Space>
                Home
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <a className="item" href='#'>Menu</a>
          <a className="item" href='#'>About</a>
          <Dropdown className="item" overlay={menu} trigger={["click"]}>
            <a className="item" onClick={(e) => {}} >
              <Space>
                Shop
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown className="item" overlay={menu} trigger={["click"]}>
            <a className="item" onClick={(e) => {}} >
              <Space>
                Blog
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <a className="item" href='#'>Contact</a>

        </div>
        <div className="nav"  onClick={() => clickOoenMenu()}><img style={{cursor: 'pointer'}} src={NavMenu} /></div>
        <div className="navbarRight">
            
                <img className="icon" src={Search}/>
                <img className="icon" src={User}/>
                <img className="icon" src={Heart}/>
            
            
            <Button className="cartBtn" type="primary" shape="round">
               <img className="icon" style={{marginRight: '8px'}} src={Cart}/> 0 items : $0.00
            </Button>
            
        </div>
        <div className="mobileimg">
        <img  src={CartWhite}/>

        </div>
      {/* </div> */}
    </div>
    </div>
  );
}
