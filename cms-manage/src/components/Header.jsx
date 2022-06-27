import React, {useState} from "react";
// 引入图片
import loginImg from '../assets/logo.png'
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
// 引入头像
import defaultAvatar from '../assets/defalut_img.webp'
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState(defaultAvatar)
    const [username, setUsername] = useState("游客")
    
    //模拟加载完成
    useEffect(() => {
      let username1 = localStorage.getItem('username')
      let avatar1 = localStorage.getItem('username')
      setUsername(username1 || '游客')
      if (avatar1) {
        setAvatar('http://47.93.114.103:6688/'+avatar1)
      }
    }, [])
    
    // 退出登录
    const logout = () => {
      localStorage.clear() // 清除
      message.success('退出成功，返回登陆页面')
      setTimeout(() => navigate('/login'), 1500)
    }
    
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
              label:(
                <div onClick={logout}>
                  退出登录
                </div>
                ) 
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