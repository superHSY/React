// /*
//     App > list = edit = means
//     login
//     register层级为一级
// */

import App from "../App";
import List from "../pages/List";
import Edit from "../pages/Edit";
import Means from "../pages/Means";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 路由组件
const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element = {<App />}>
                <Route path="/list" element = {<List />}></Route>
                <Route path="/edit" element = {<Edit />}></Route>
                <Route path="/means" element = {<Means />}></Route>
            </Route>
        
            <Route path="/login" element = {<Login />}></Route>
            <Route path="/register" element = {<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter

/* 
    App > List + Edit + Means
    Login
    Register
    History模式  --  BrowserRouter
    Hash模式     --  HashRouter
*/

// import App from '../App'
// import Edit from '../pages/Edit'
// import Means from '../pages/Means'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// const BaseRouter = () => (
//     <Router>
//         <Routes>
//             <Route path='/' element={<App />}>
//                 <Route path='/edit' element={<Edit />}></Route>
//                 <Route path='/edit/:id' element={<Edit />}></Route>
//                 <Route path='/means' element={<Means />}></Route>
//             </Route>
//             <Route path='/login' element={<Login />}></Route>
//             <Route path='/register' element={<Register />}></Route>
//         </Routes>
//     </Router>
// )

// export default BaseRouter