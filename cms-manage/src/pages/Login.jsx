import React from "react";
// 引入ant内容
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// 引入less
import './less/login.less';
// 引入图片
import loginpic from '../assets/logo.png'
// 引入跳转link
import {Link} from 'react-router-dom'

export default function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
           <div className="login_box">
               <img src={loginpic} alt=""/>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined />} placeholder="请输入用户名"/>
                    </Form.Item>

                    <Form.Item
                    name="password"
                    
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Link to='/register'>还没账号？立即注册</Link>
                    </Form.Item>

                    <Form.Item
                       
                    >
                        <Button block size="large" type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                
                </Form>
           </div>
        </div>
    )
}