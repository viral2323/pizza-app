import React from 'react';
import { Divider,Dropdown, Menu, Space,Button  } from "antd";
import { AndroidOutlined,DownOutlined, CloseOutlined  } from "@ant-design/icons";

const menu = (
    <Menu
      items={[
        {
          label: <a href="#">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="#">2nd menu item</a>,
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

export default function Sidebar({handleOpen}){
    return (
        <div className='sidebar'>
            <div className="sidebar_item">
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
        <CloseOutlined className='close_icon' onClick={handleOpen}/>

        </div>
    )
}