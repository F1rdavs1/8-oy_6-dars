import React from "react";
import HeaderLogo from "../assets/images/header-logo.svg";
import Avatar from "../assets/images/avatar.svg";
import Search from "../assets/images/search.svg";
import Like from "../assets/images/like.svg";
import Basket from "../assets/images/basket.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Tilni tanlaganda changeLanguage funksiyasini chaqiradi
  };

  return (
    <header className="flex items-center w-[1440px] ml-[54px] py-[30px]">
      <Link to="/">
        <img
          src={HeaderLogo}
          alt="Header Logo"
          width={185}
          height={41}
          className="cursor-pointer"
        />
      </Link>
      <div className="space-x-[75px] ml-[266px]">
        <Link to="/" className="font-medium text-[16px] leading-[24px]">
          {t("header.home")} 
        </Link>
        <Link to="/shop" className="font-medium text-[16px] leading-[24px]">
          {t("header.shop")}
        </Link>
        <Link to="/contact" className="font-medium text-[16px] leading-[24px]">
          {t("header.contact")}
        </Link>
        <Link to="/blog" className="font-medium text-[16px] leading-[24px]">
          {t("header.blog")}
        </Link>
      </div>
      <div className="flex items-center space-x-[45px] ml-[158px]">
        <img src={Avatar} alt="Image" className="cursor-pointer" />
        <img src={Search} alt="Image" className="cursor-pointer" />
        <img src={Like} alt="Image" className="cursor-pointer" />
        <img src={Basket} alt="Image" className="cursor-pointer" />
      </div>
      <select onChange={handleLanguageChange}>
        <option value="">Language</option>
        <option value="uz">Uz</option>
        <option value="en">En</option>
      </select>
    </header>
  );
};

export default Header;
