import ReactDOM from 'react-dom/client';

// 引入ant design
import './assets/base.less'

// import Login from './pages/Login';
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />,
);
// import ReactDOM from 'react-dom/client'
// import "./assets/base.css"
// import Router from './router'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <Router />,
//     // document.getElementById('root')
// )
