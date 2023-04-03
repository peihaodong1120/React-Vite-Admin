import {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import type { MenuProps } from 'antd';
import {Menu} from 'antd'
import {  
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number];

// 配置菜单列方法
function getItem(
  label: React.ReactNode, // 菜单名名称
  key: React.Key, // 菜单的key
  icon?: React.ReactNode, // 菜单图标
  children?: MenuItem[], // 子菜单
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// 设置的菜单列表
const list: MenuProps['items'] = [
    getItem('首页', '/home', <UserOutlined/>),
    getItem('其他', '/about', <VideoCameraOutlined />),
    getItem('管理', 'admin', <UploadOutlined />, [
        getItem('管理1', '/admin1'),
        getItem('管理2', '/admin2')
    ]),
]


const SiderMenu =() =>{
    const currentRoute = useLocation()
    const [menuList] = useState(list)
    const [defaultSelectedKeys] = useState([currentRoute.pathname])
    const [defaultOpenKeys] = useState([currentRoute.pathname])
    const navigateTo = useNavigate()
    console.log();
    
    const handleMenuClick = (e:{key:string}) =>{
        navigateTo(e.key as string)
    }

    return (
        <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}  // 默认展开菜单
        defaultSelectedKeys={defaultSelectedKeys} // 默认选中的菜单
        items={menuList} // 菜单列表数据
        onClick={(e)=>{handleMenuClick(e)}}
      />
    ) 
}

export default SiderMenu