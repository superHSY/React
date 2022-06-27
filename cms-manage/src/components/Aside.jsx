import React, {useEffect, useState} from "react";
// 引入react ui
import { Menu } from 'antd';
import { EditOutlined, ReadOutlined, SettingOutlined } from '@ant-design/icons'
// 路由
import {useNavigate, useLocation} from 'react-router-dom'

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

export default function Aside() {
    const location = useLocation()
    const navigate = useNavigate()
    const [defaultKey, setDefaultKey] = useState('/list')

    // 加入空数组模仿Mounted
    useEffect(() => {
        let path = location.pathname
        let key = path.split('/')[1]
        setDefaultKey(key)
    }, [])

    const items = [
        getItem('查看文章列表', 'list', <ReadOutlined />),
        getItem('文章编辑', 'edit', <EditOutlined />,),
        getItem('修改资料', 'means', <SettingOutlined />),
      ];
    const onClick = (e) => {
        navigate('/' + e.key)
        setDefaultKey(e.key)
    };
    return (
        <div>
            <Menu
                onClick={onClick}
                style={{width: 180,}}
                selectedKeys={[defaultKey]}
                mode="inline"
                className="aside"
                items={items}
                theme="dark"
            />
        </div>
    )
}