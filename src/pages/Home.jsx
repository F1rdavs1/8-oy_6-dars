import { useState, useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [productCard, setProductCard] = useState(8);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleShowMore = () => {
    setProductCard((prevCount) => prevCount + 8);
  };

  const handleShowLess = () => {
    setProductCard(8);
  };

  return (
    <>
      <div className="home-hero-bg relative">
        <div className="bg-[#FFF3E3] pt-[62px] pb-[37px] w-full max-w-[643px] pl-[20px] sm:pl-[39px] rounded-[10px] absolute top-[100px] sm:top-[153px] right-[20px] sm:right-[58px]">
          <h3 className="font-semibold text-[14px] sm:text-[16px] leading-[24px] text-[#333333]">
            {t("home.title")}
          </h3>
          <h2 className="mt-[4px] mb-[17px] w-full max-w-[440px] font-bold text-[36px] sm:text-[52px] leading-[40px] sm:leading-[65px] text-[#B88E2F]">
            {t("home.text")}
          </h2>
          <p className="mb-[20px] sm:mb-[46px] w-full max-w-[507px] font-medium text-[16px] sm:text-[18px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="font-bold text-[14px] sm:text-[16px] leading-[24px] py-[16px] sm:py-[24px] px-[30px] sm:px-[72px] bg-[#B88E2F] uppercase text-white">
            {t("home.button-text")}
          </button>
        </div>
      </div>

      <div className="mx-auto px-4 w-full max-w-[1183px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mt-8">
          {t("browse.title")}
        </h1>
        <p className="text-center font-normal text-[18px] sm:text-[20px] leading-[30px] text-[#666666] mb-[32px] sm:mb-[62px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-between gap-6">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="relative p-4 rounded-lg cursor-pointer w-[100%] sm:w-auto"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-w-[321px] bg-[#dbdbdb] h-[280px] sm:h-[480px] rounded-lg object-contain"
              />
              <h2 className="text-lg sm:text-xl font-bold mt-[20px] sm:mt-[30px] text-center">
                {product.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-4 w-full max-w-[1250px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center my-8">
          {t("our-products.title")}
        </h1>
        <div className="flex flex-wrap gap-[20px] justify-center">
          {products.slice(0, productCard).map((product) => (
            <div
              key={product.id}
              className="relative p-4 border rounded-lg cursor-pointer bg-[#DBDBDB] w-[100%] max-w-[285px]"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-36 sm:h-48 rounded-lg object-contain"
              />
              {product.discountPercentage > 0 && (
                <div className="absolute top-2 right-2 bg-red-400 rounded-full text-white font-medium size-12 flex items-center justify-center">
                  -{product.discountPercentage.toFixed()}%
                </div>
              )}
              <h2 className="font-bold text-[14px] leading-[28.8px] text-[#3A3A3A] mt-4">
                {product.title}
              </h2>
              <p>{product.category}</p>
              <p className="font-bold text-[14px] leading-[28.8px] text-[#3A3A3A]">
                Rp {product.price}$
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2 mb-[15px]">
          {productCard < products.length && (
            <button
              className="py-[12px] px-[20px] sm:px-[74px] border rounded-lg font-semibold text-[16px] leading-[24px] text-[#B88E2F] hover:bg-gray-200"
              onClick={handleShowMore}
            >
              {t("our-products.button-text")}
            </button>
          )}
          {productCard > 8 && (
            <button
              className="py-[12px] px-[20px] sm:px-[74px] border rounded-lg font-semibold text-[16px] leading-[24px] text-[#B88E2F] hover:bg-gray-200"
              onClick={handleShowLess}
            >
              {t("our-products.show-less")}
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
