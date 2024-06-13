////  search comp  ////

import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { useGetAllProductWithSearch } from '../../api/Product';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import useSearchResults from '../../Hooks/useSearchResults';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  // const { data } = useGetAllProductWithSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const [t] = useTranslation();
  const [search] = useSearchParams()
  // const names = data?.data?.map((item: any) => item?.product_translations[0]?.name);

  const [query, setQuery] = useState<string | null>(search.get('search'));
  // const results = useSearchResults(names, query);

  const handleSearch = (value: string) => {
    setQuery(value || null);
  };

  // const onSelect = (value: string) => {
  //   const selectedItem = data?.data?.find((item: any) => item?.product_translations[0]?.name === value);
    
  //   if (selectedItem) {
  //     navigate(`/product/${selectedItem.id}`);
  //   }
  // };

  const onSearchSubmit = (value: string) => {
    
      setQuery(value);
      navigate(`/products?search=${value}`);
    
  };


  // const options = results.map((name: any) => ({
  //   value: name,
  //   label: (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       <span>{name}</span>
  //     </div>
  //   ),
  // }));


  return (
    <AutoComplete
      className='InputAutoComplete'
      // options={options}
      // onSelect={onSelect} 
      value={query}
      onSearch={handleSearch}
    >
      <Input.Search size='large' placeholder={t(`Search here`)} enterButton onSearch={onSearchSubmit} />
    </AutoComplete>
  );
};

export default App;
