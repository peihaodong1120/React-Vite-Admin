// import { useState } from 'react'
import {useRoutes, Link} from 'react-router-dom'
import routers from './router'

function App() {

  const outlet = useRoutes(routers)
  return (
    <div className="App">
      {/* 路由跳转 */}
      {/* <Link to={'/home'}>home</Link> |
      <Link to={'/about'}>about</Link> |
      <Link to={'/user'}>user</Link> | */}
      {/* react 6新增，编程式路由写法，引入useRoutes hook，使用传入routers数组， jsx语法使用 */}
      {outlet}
      {/* react 6新增，  类似于vue的router-view 组件式路由写法 引入Outlet 组件使用 */}
      {/* <Outlet></Outlet> */}
    </div>
  )
}

export default App
