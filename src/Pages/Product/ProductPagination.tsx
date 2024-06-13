import React from 'react';
import { Pagination } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductPagination = ({data}:any) =>{
  
  const [t]= useTranslation()
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = parseInt(new URLSearchParams(location.search).get("page") || "1" || data?.current_page);
  const pageSize = parseInt(new URLSearchParams(location.search).get("per_page") || data?.per_page);

  const onChange = (page: number, pageSize?: number) => {
    navigate(`?page=${page}&per_page=${pageSize || data?.per_page}`, { replace: true });
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    navigate(`?page=${current}&per_page=${pageSize}`, { replace: true });
  };
  return  (


    <div className='ProductPagination'>
      <Pagination  
      className='text-center mt-3 paginateStyle'
      total={data?.total}
      showTotal={(total: any) => `${t("Total")} ${data?.total} ${t("items")}`}
      pageSize={pageSize}
      pageSizeOptions={[5 ,8, 24]}
      defaultCurrent={currentPage}
      current={currentPage}  
      onChange={onChange}
      onShowSizeChange={onShowSizeChange}
      showSizeChanger
      />
    </div>
  );
  
}
export default ProductPagination;