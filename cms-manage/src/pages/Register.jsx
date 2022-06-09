import React from "react";
// 引入ant内容
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// 引入less
import './less/login.less';
// 引入图片
import loginpic from '../assets/logo.png'
// 引入跳转link
import { Link, useNavigate } from 'react-router-dom'
// 引入接口
import { RegisterApi } from '../request/api'

export default function Register() {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const res = await RegisterApi({
            username: values.username,
            password: values.password
        }) 
        if (res.errCode === 0) {
            message.success('注册成功!');
            // 跳到登录页
            setTimeout(() => navigate('/login'), 1500)
            
        } else {
            message.error('用户已经存在!');
        }
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

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请确认你的密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次密码输入不一样，请检查!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="请再次输入密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Link to='/login'>已有账号？前往注册</Link>
                    </Form.Item>

                    <Form.Item
                       
                    >
                        <Button block size="large" type="primary" htmlType="submit">
                            立即注册
                        </Button>
                    </Form.Item>
                
                </Form>
           </div>
        </div>
    )
}