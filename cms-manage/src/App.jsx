import React from 'react'
import { Outlet } from 'react-router-dom';
// 引入antd
import { Layout } from 'antd';
// 引入组件
import Header from './components/Header';


const { Sider, Content } = Layout;

export default function App() {
  return (
    <Layout id='app'>
      <Header />
      <Layout>
        <Sider>Sider</Sider>
        <Content>
        <div>
          <Outlet />
        </div>
        </Content>
      </Layout>
      <footer>Respect | Copyright &copy;
              2022 Author xxxx
      </footer>
    </Layout>
    
  )
}
