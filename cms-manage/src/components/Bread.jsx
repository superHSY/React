// 引入图标
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd';
import React,  {useState, useEffect}from "react";

// 获取路由的路劲
import { useLocation } from 'react-router-dom';

export default function Bread() {
    // 路径
    const {pathname} = useLocation()

    const [breadName, setBreadName] = useState('')
    
    // 获取路径变换后的名称

    // 监听路由的路径
    useEffect(() => {
        switch(pathname) {
            case "/listtable":
                setBreadName('查看文章列表');
                break;
            case "/edit":
                setBreadName('文章编辑');
                break;
            case "/means":
                setBreadName('修改资料');
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item >{breadName}</Breadcrumb.Item>
        </Breadcrumb>
    )
}