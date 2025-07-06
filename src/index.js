//引入react核心库
import React from 'react'
//引入react-dom
import ReactDOM from 'react-dom/client'
//引入路由组件
import { BrowserRouter } from 'react-router-dom'
//引入App组件
import App from './App'




//渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
