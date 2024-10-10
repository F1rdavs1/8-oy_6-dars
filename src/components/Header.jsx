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
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="flex flex-wrap items-center justify-between max-w-[1440px] mx-auto px-4 sm:px-8 py-4 sm:py-6">
      <Link to="/" className="flex-shrink-0">
        <img
          src={HeaderLogo}
          alt="Header Logo"
          className="w-[150px] sm:w-[185px] h-auto cursor-pointer"
        />
      </Link>

      <div className="hidden sm:flex space-x-6 sm:space-x-[75px] mt-4 sm:mt-0">
        <Link to="/" className="font-medium text-sm sm:text-[16px] leading-6">
          {t("header.home")}
        </Link>
        <Link
          to="/shop"
          className="font-medium text-sm sm:text-[16px] leading-6"
        >
          {t("header.shop")}
        </Link>
        <Link
          to="/contact"
          className="font-medium text-sm sm:text-[16px] leading-6"
        >
          {t("header.contact")}
        </Link>
        <Link
          to="/blog"
          className="font-medium text-sm sm:text-[16px] leading-6"
        >
          {t("header.blog")}
        </Link>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-[45px] mt-4 sm:mt-0">
        <img
          src={Avatar}
          alt="Avatar"
          className="w-6 sm:w-auto cursor-pointer"
        />
        <img
          src={Search}
          alt="Search"
          className="w-6 sm:w-auto cursor-pointer"
        />
        <img src={Like} alt="Like" className="w-6 sm:w-auto cursor-pointer" />
        <img
          src={Basket}
          alt="Basket"
          className="w-6 sm:w-auto cursor-pointer"
        />
      </div>

      <select
        className="mt-4 sm:mt-0 rounded-md bg-yellow-300 text-green-800 px-2 py-1"
        onChange={handleLanguageChange}
      >
        <option disabled selected>
          {t("header.language")}
        </option>
        <option value="uz">Uz</option>
        <option value="en">En</option>
      </select>
    </header>
  );
};

export default Header;
