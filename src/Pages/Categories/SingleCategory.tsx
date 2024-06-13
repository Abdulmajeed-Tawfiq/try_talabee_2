import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "../../api/singleCastegory"
import Layout from "../../Layout/app/Layout";
import LoadingPage from "../Loading/LoadingPage";
import { Button, Collapse, Rate } from "antd";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useImageErrorProduct } from "../../Hooks/useImageError";
import StoreSwiper from "../../Components/Home/StoreSwiper";
import CategorySwiper from "./CategorySwiper";
import SubTitle from "../../Components/Home/SubTitle";
import StoreSection from "../Store/StoreSection";

interface TCategory {
  id: number;
  name: string;
  icon: string
}

function SingleCategory() {
  const { id }: any = useParams();
  const { data, isLoading } = useGetSingleCategory(id);
  const categoryName = data?.data[0]?.name;
  const subCategories = data?.data[1]?.subCategories;
  const featuredStores = data?.data[2]?.featuredStores;

  const { t } = useTranslation();

  return (
    <Layout>
      {isLoading ? <LoadingPage /> :
        <>
          <h2 className="categort_name">
            {categoryName}
          </h2>
          <div className="subCategories">
            <CategorySwiper data={subCategories} />
          </div>
          <div className="featuredStores">
            <StoreSection data={featuredStores} />
          </div>
        </>
      }
    </Layout>
  )
}

export default SingleCategory