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
        getItem('设置2', 'system2', null, [
          getItem('设置2-1', '/system/system2/page2-1'),
        ])
    ]),
]

// 通过当前key找到父级的key， 没有父级，他会返回undefind
function getFirstOpenKeys(key:string, arr: any[]): string | undefined {  
   let res
   for(let i = 0; i < arr.length; i++) {
    //  有children
    if (arr[i].children && arr[i].children.length > 0 ) {
      // key与children中的元素的key有相等， 则返回父key
      if (arr[i].children.find((item:{key:string}) => item.key === key)) {  
        res = arr[i].key
        return res
      }else {
        // 没有，递归继续找
        res =  getFirstOpenKeys(key,arr[i].children)
        if (res) {
          return res
        }
      }
    }
   }
   // 都没有，返回undefined
   return res
}


const SiderMenu =() =>{
    const currentRoute = useLocation() // 当前路由信息
    const [menuList] = useState(list) // 菜单列表数据
    // 要想做到在二级菜单时刷新页面，默认也能展开菜单。每次刷新拿到当前展开菜单的父级key
    const [openKeys, setOpenKeys] = useState(['']) // 默认展开菜单
    let firstOpenKey  = getFirstOpenKeys(currentRoute.pathname, menuList) || currentRoute.pathname

    useEffect(() =>{
      setOpenKeys([firstOpenKey])
    }, [])
    console.log();
    
    // 使用hook进行编程式路由导航
    const navigateTo = useNavigate()
    // 点击菜单跳转
    const handleMenuClick = (e:{key:string}) =>{
        navigateTo(e.key as string)
    }
    // 菜单展开收缩
    const handleOpenChange = (keys:string[]) =>{
      // 最新展开时菜单永远在数组的最后一个元素，点击的时候，删除第一个元素就实现了，只保持当前菜单是展开的
      // if (openKeys.length > 1) openKeys.shift()
      // console.log('菜单展开收缩',openKeys);
      setOpenKeys(keys)
    }

    return (
        <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentRoute.pathname]} // 默认选中的菜单
        openKeys={openKeys} // 当前展开的 SubMenu 菜单项 key 数组
        items={menuList} // 菜单列表数据
        onClick={(e)=>{handleMenuClick(e)}} // 菜单点击
        onOpenChange={(openKeys)=>handleOpenChange(openKeys)} // 菜单展开收缩时触发
      />
    ) 
}

export default SiderMenu