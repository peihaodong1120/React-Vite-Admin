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
        getItem('管理1', '/admin/admin1'),
        getItem('管理2', '/admin/admin2')
    ]),
    getItem('设置', 'system', <UploadOutlined />, [
        getItem('设置1', '/system/system1'),
        getItem('设置2', '/system/system2')
    ]),
]


const SiderMenu =() =>{
    const currentRoute = useLocation() // 当前路由信息
    const [menuList] = useState(list) // 菜单列表数据
    const [defaultSelectedKeys] = useState([currentRoute.pathname]) // 默认选中的菜单
    const [defaultOpenKeys] = useState(['admin']) // 默认展开菜单
    const [openKeys, setOpenKeys] = useState(['']) // 默认展开菜单
    const navigateTo = useNavigate()
    // 点击菜单跳转
    const handleMenuClick = (e:{key:string}) =>{
        navigateTo(e.key as string)
    }
    // 菜单展开收缩
    const handleOpenChange = (openKeys:string[]) =>{
      // 最新展开时菜单永远在数组的最后一个元素，点击的时候，删除第一个元素就实现了，只保持当前菜单是展开的
      openKeys.shift()
      setOpenKeys(openKeys)
    }

    return (
        <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}  // 默认展开菜单
        defaultSelectedKeys={defaultSelectedKeys} // 默认选中的菜单
        openKeys={openKeys} // 当前展开的 SubMenu 菜单项 key 数组
        items={menuList} // 菜单列表数据
        onClick={(e)=>{handleMenuClick(e)}} // 菜单点击
        onOpenChange={(openKeys)=>handleOpenChange(openKeys)} // 菜单展开收缩时触发
      />
    ) 
}

export default SiderMenu