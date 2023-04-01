// 编程式路由
import {Navigate} from 'react-router-dom'
// 路由懒加载
import {lazy, Suspense} from 'react'
const About = lazy(()=>import('@/views/About'))
const User = lazy(()=>import('@/views/User'))

import MainLayout from '@/Layout/index'
import Loading from '@/components/Loading'
// import About from '@/views/About'
// import User from '@/views/User'

// 在react中使用路由懒加载，要使用Suspense组件包裹住懒加载组件，并且Suspense组件要指定一个默认组件
const lazyComponent = (ele:JSX.Element) =>{
    return (
        <Suspense fallback={<Loading/>}> 
           {ele}
        </Suspense>
    )
}


const routers = [
    {
        path:'/',
        element: <Navigate to={'/home'}></Navigate> // 路由重定向
    },
    {
        path:'/home',
        element: <MainLayout />
    },
    {
        path:'/about',
        element: lazyComponent(<About/>)
    },
    {
        path:'/user',
        element: lazyComponent(<User/>)
    }
]


export default routers