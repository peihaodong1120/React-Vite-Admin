import React, {  useState } from 'react';
import {  Tabs } from 'antd';
import './style/navTabs.module.scss'

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = new Array(4).fill(null).map((_, index) => {
  const id = String(index + 1);
  return { label: `页面 ${id}`, key: id };
});

const navTabs =() =>{
    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);

    // tabs改变，改变activeKey的状态
    const onChange = (key: string) => {
      setActiveKey(key);
    };
  
  
    const remove = (targetKey: TargetKey) => {
      const targetIndex = items.findIndex((item) => item.key === targetKey);
      const newPanes = items.filter((pane) => pane.key !== targetKey);
      if (newPanes.length && targetKey === activeKey) {
        const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
        setActiveKey(key);
      }
      setItems(newPanes);
    };

    return (
        <div className='navTabs'>
            <Tabs
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={remove}
                items={items}
            />
        </div>
     
    )
}


export default navTabs