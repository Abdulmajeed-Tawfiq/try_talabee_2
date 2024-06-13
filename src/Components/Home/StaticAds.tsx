import { useTranslation } from "react-i18next";

type TStaticAds={
  LeftText : string;
  RightText : string;
  Link : string;
}

const StaticAds : React.FC<TStaticAds> = ({LeftText, RightText, Link}) => {
  const { t } = useTranslation();

  return (
    <div className="static_ads container">
        <p className="upper_text"> {t(LeftText)} </p>
        <p className="lower_text"> {t(RightText)}  </p>
    </div>
  )
}

export default StaticAds