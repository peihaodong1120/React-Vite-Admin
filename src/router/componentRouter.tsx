// 组件式路由
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import App from '@/App'
import Home from '@/views/Home'
import About from '@/views/About'

const MyRouter = () =>{
    return (
        //  路由模式
        <BrowserRouter>
            {/* react6 中，使用routes 替换 switch组件 包裹路由组件 */}
            <Routes>
                {/* 默认访问app组件 */}
                <Route path='/' element={<App />}>
                    {/* react6 路由重定向，/默认访问 home组件 */}
                    <Route path='/' element={<Navigate to={'/home'}/>} ></Route>
                    {/* 组册路由组件 */}
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default MyRouter