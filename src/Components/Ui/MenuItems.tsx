import React from 'react';
import { Menu } from 'antd';
import { MenuItem } from '../../Layout/app/Types';
import { menuData } from './MenuItemsData';

const { SubMenu } = Menu;



const generateMenuItems = (items: MenuItem[]): React.ReactNode => {
  return items?.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} icon={item.icon} title={item.label}>
          {generateMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key}>
          <a href={`/${item.key}`}>{item.label}</a>
        </Menu.Item>
      );
    }
  });
};

const MenuItems: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return <Menu mode="vertical">{generateMenuItems(items)}</Menu>;
};


const App = () => {
  return <MenuItems items={menuData} />;
};

export default App;
