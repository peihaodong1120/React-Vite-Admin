// 编程式路由
import {Navigate} from 'react-router-dom'
// 路由懒加载
import {lazy, Suspense} from 'react'
const Home = lazy(()=>import('@/views/Home'))
const About = lazy(()=>import('@/views/About'))
const Admin1 = lazy(()=>import('@/views/Admin/Admin1'))
const Admin2 = lazy(()=>import('@/views/Admin/Admin2'))
const System1 = lazy(()=>import('@/views/System/System1'))
const System2 = lazy(()=>import('@/views/System/System2'))

import MainLayout from '@/Layout/index'
import Loading from '@/components/Loading'



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
        element: <Navigate to={'/home'}/> // 路由重定向
    },
    {
        path:'/',
        element: <MainLayout />,
        children: [
            {
                path:'/home',
                element: lazyComponent(<Home/>)
            },
            {
                path:'/about',
                element: lazyComponent(<About/>)
            },
            {
                path:'/admin/admin1',
                element: lazyComponent(<Admin1/>)
            },
            {
                path:'/admin/admin2',
                element: lazyComponent(<Admin2/>)
            },
            {
                path:'/system/system1',
                element: lazyComponent(<System1/>)
            },
            {
                path:'/system/system2',
                element: lazyComponent(<System2/>)
            }
        ]
    },
]


export default routers