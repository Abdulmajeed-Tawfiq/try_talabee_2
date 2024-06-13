import React from 'react';
import {Dropdown, Button } from 'antd';
import { AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import MenuItems from './MenuItems';
import { useTranslation } from 'react-i18next';

const DropdownMenu = () => {
  const {t} = useTranslation();
    return (
    <Dropdown overlay={MenuItems} placement="bottomLeft" className='DropdownMenu'trigger={['click']} >
      <Button>
      <AppstoreOutlined />
        {t("Categories")}
         <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownMenu;


//////////// you can use this file when you connect with backend just change the response and api endpoint //////////////////

// import React from 'react';
// import { Dropdown, Button, Menu } from 'antd';
// import { AppstoreOutlined, DownOutlined, MailOutlined } from '@ant-design/icons';
// import { useGetAllCategories } from '../../api/categories';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import type { MenuProps } from 'antd';

// const DropdownMenu = () => {
//   const { data, isError, isLoading } = useGetAllCategories();
//   const navigate = useNavigate();
//   const [t] = useTranslation();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError || !data?.data?.data) {
//     return <div>Error loading categories</div>;
//   }


//   const CategoriesArry = data.data.data.map((item: any) => ({
//     value: item?.category_translations[0]?.name,
//     label: item?.id,
//   }));


//   const items: any = CategoriesArry?.map((item: any) => ({
//     key: item.key,
//     label: (
//       <Link  rel="noopener noreferrer" to={`/Products?category_id=`+item.label}>
//         {item.value}
//       </Link>
//     ),
//     icon: item.icon, // You can include the icon if available
//     disabled: item.disabled,
//     danger: item.danger,
//   }));
  
//   const menu: React.ReactNode = (
//     <Menu>
//       {items.map((menuItem: any) => (
//         <Menu.Item key={menuItem.key} disabled={menuItem.disabled} danger={menuItem.danger}>
//           {menuItem.label}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );
  

//   return (
//     <Dropdown menu={{items}} placement="bottomLeft" className="DropdownMenu" trigger={['click']}>
//       <Button>
//         <AppstoreOutlined />
//         {t("Categories")}
//         <DownOutlined />
//       </Button>
//     </Dropdown>
//   );
// };

// export default DropdownMenu;
