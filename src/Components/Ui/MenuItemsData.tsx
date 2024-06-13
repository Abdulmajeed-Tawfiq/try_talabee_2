//// fake data ////

import { MenuItem } from "../../Layout/app/Types";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
export const menuData: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Moaz',
      icon: <MailOutlined />,
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '5', label: 'Option 5' },
        { key: '6', label: 'Option 6' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '7', label: 'Option 7' },
            {
              key: 'subsub1',
              label: 'Sub-Submenu 1',
              children: [
                { key: '8', label: 'Option 8' },
                { key: '9', label: 'Option 9' },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        { key: '11', label: 'Option 11' },
        {
          key: 'subsub2',
          label: 'Sub-Submenu 2',
          children: [
            { key: '12', label: 'Option 12' },
            { key: '13', label: 'Option 13' },
          ],
        },
        {
          key: 'subsub3',
          label: 'Sub-Submenu 3',
          children: [
            { key: '14', label: 'Option 14' },
            { key: '15', label: 'Option 15' },
          ],
        },
      ],
    },
    {
      key: 'sub5',
      label: 'Navigation Four',
      icon: <SettingOutlined />,
      children: [
        { key: '16', label: 'Option 16' },
        { key: '17', label: 'Option 17' },
        {
          key: 'subsub4',
          label: 'Sub-Submenu 4',
          children: [
            { key: '18', label: 'Option 18' },
            { key: '19', label: 'Option 19' },
          ],
        },
        {
          key: 'subsub5',
          label: 'Sub-Submenu 5',
          children: [
            { key: '20', label: 'Option 20' },
            { key: '21', label: 'Option 21' },
          ],
        },
      ],
    },
    {
      key: 'sub6',
      label: 'Navigation Five',
      icon: <SettingOutlined />,
      children: [
        { key: '22', label: 'Option 22' },
        { key: '23', label: 'Option 23' },
      ],
    },
    {
      key: 'sub7',
      label: 'Navigation Six',
      icon: <SettingOutlined />,
      children: [
        { key: '24', label: 'Option 24' },
        { key: '25', label: 'Option 25' },
      ],
    },
    {
      key: 'sub8',
      label: 'Navigation Seven',
      icon: <SettingOutlined />,
      children: [
        { key: '26', label: 'Option 26' },
        { key: '27', label: 'Option 27' },
      ],
    },
    {
      key: 'sub9',
      label: 'Navigation Eight',
      icon: <SettingOutlined />,
      children: [
        { key: '28', label: 'Option 28' },
        { key: '29', label: 'Option 29' },
      ],
    },
    {
      key: 'sub10',
      label: 'Navigation Nine',
      icon: <SettingOutlined />,
      children: [
        { key: '30', label: 'Option 30' },
        { key: '31', label: 'Option 31' },
      ],
    },
  ];
  

  export const menuItems = [
    {
      key: '1',
      name: '1st menu item',
      href: 'https://www.antgroup.com',
    },
    {
      key: '2',
      name: '2nd menu item',
      href: 'https://www.example.com',
    },
    {
      key: '3',
      name: '1st menu item',
      href: 'https://www.antgroup.com',
    },
    {
      key: '4',
      name: '2nd menu item',
      href: 'https://www.example.com',
    },
    {
      key: '5',
      name: '1st menu item',
      href: 'https://www.antgroup.com',
    },
    {
      key: '6.NavMenus',
      name: '2nd menu item',
      href: 'https://www.example.com',
    },
  ];
  