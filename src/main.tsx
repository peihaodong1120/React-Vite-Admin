import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化css
import 'reset-css'

// 引入antd文件

// 全局样式文件
import '@/assets/style/glable.scss'
import {BrowserRouter} from 'react-router-dom'
 
// 主组件 组件式路由写法
// import MyRouter from './router'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <MyRouter />
//   </React.StrictMode>,
// )

// 主组件， 编程式路由写法
import App from './App'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
