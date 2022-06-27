import React from 'react'
import { Outlet } from 'react-router-dom';
// 引入antd
import { Layout } from 'antd';
// 引入组件
import Header from './components/Header';
import Aside from './components/Aside'


const { Sider, Content } = Layout;

export default function App() {
  return (
    <Layout id='app'>
      <Header />
      <div className='container'>
        <Aside />
          <div className='container_box'>
            <Outlet />
          </div>
      </div>
      <footer>Respect | Copyright &copy;
              2022 Author xxxx
      </footer>
    </Layout>
    
  )
}
