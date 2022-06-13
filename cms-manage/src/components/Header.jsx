import React, {useState} from "react";
// 引入图片
import loginImg from '../assets/logo.png'
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
// 引入头像
import defaultAvatar from '../assets/defalut_img.webp'

export default function Header() {

    const [avatar, setAvatar] = useState(defaultAvatar)
    const [username, setUsername] = useState("游客")
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: '修改资料'
            },
            {
                type: 'divider',
            },
            {
              key: '2',
              label: '退出登录'
            },
          ]}
        />
      );

    return (
        <header>
            <img src={loginImg} alt="" className='logo'></img>
            <div className="right">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <Space>
                        <img src={avatar} alt="" className="avatar"/>
                        <span>{username}</span>
                        <CaretDownOutlined />
                    </Space>
                </a>
                </Dropdown>
            </div>
        </header>
    )
}