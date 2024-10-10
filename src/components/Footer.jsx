import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="w-full max-w-[1240px] mx-auto border-t-[1px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 py-[48px] border-b border-gray-500">
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-bold text-2xl">Funiro.</h1>
            <p className="text-gray">{t("footer.footer-text")}</p>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-medium text-gray">{t("footer.links.links")}</h1>
            <nav className="flex flex-col gap-[20px] font-medium">
              <a href="/">{t("footer.links.home")}</a>
              <a href="/shop">{t("footer.links.shop")}</a>
              <a href="/blog">{t("footer.links.blog")}</a>
              <a href="/contact">{t("footer.links.contact")}</a>
            </nav>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-medium text-gray">{t("footer.help.help")}</h1>
            <nav className="flex flex-col gap-[20px] font-medium">
              <a href="#">{t("footer.help.payment")}</a>
              <a href="#">{t("footer.help.returns")}</a>
              <a href="#">{t("footer.help.privacy")}</a>
            </nav>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-medium text-gray">
              {t("footer.newsletter.newsletter")}
            </h1>
            <label className="flex items-center gap-[11px]">
              <input
                type="text"
                placeholder={t("footer.newsletter.email")}
                className="outline-none border-b border-gray-400 focus:border-black w-full sm:w-auto"
              />
              <button className="border-b border-gray-400 focus:border-black">
                {t("footer.newsletter.subscribe")}
              </button>
            </label>
          </div>
        </div>
        <p className="my-[38px] text-center lg:text-left">
          {t("footer.newsletter.reverved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
