import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

interface MenuItem {
  key: string;
  name: string;
  href: string;
}

interface DropDownProps {
  menuItems: MenuItem[];
  title: string;
}

const DropDown: React.FC<DropDownProps> = ({ menuItems, title }) => {
  const renderMenuItems = () => {
    return menuItems?.map((item) => (
      <Menu.Item key={item.key}>
        <a target="_blank" rel="noopener noreferrer" href={item.href}>
          {item.name}
        </a>
      </Menu.Item>
    ));
  };

  const menu = <Menu>{renderMenuItems()}</Menu>;

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Space>
        <span>{title}  </span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default DropDown;
