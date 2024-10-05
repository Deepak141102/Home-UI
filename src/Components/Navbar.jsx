import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Flag from "react-flagkit";
import { counterContext } from "../Context/context";
import Cart from "./Cart";

const Navbar = () => {
  const value = useContext(counterContext);
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();
  const [showCart, setShowCart] = useState(false);
  const country = {
    india: "IN",
    korean: "KR",
    american: "US",
  };

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    // Mapping of languages to their respective i18n codes
    const langMap = {
      india: "hi",
      korean: "ko",
      american: "en",
    };

    // Use the selected language to get the corresponding i18n code, defaulting to 'en'
    const langCode = langMap[selectedLang] || "en";
    i18n.changeLanguage(langCode);
  };

  const [opt, setOpt] = useState("all");

  const handleSelect = (e) => {
    setOpt(e.target.value);
  };

  return (
    <>
      <nav className=" bg-gradient-to-r flex items-center p-2">
        <img
          src="/barabari_logo-CW6k3Oea.png"
          alt="Barabari Logo"
          className="w-[2.7vw] ml-3"
        />

        <div className="w-1/2 flex items-center ml-24">
          <select
            name="all"
            id="list"
            className={`border border-r-black h-8 rounded-l-sm transition-all duration-300 ${
              opt === "all" ? "w-16" : "w-1/5"
            }`}
            value={opt}
            onChange={handleSelect}
          >
            <option value="all">{t("all")}</option>
            <option value="Education">{t("edu")}</option>
            <option value="Courses">{t("course")}</option>
            <option value="Branches">{t("Branches")}</option>
            <option value="More">{t("More")}</option>
          </select>

          <input
            type="text"
            id="search"
            className="w-[30vw] h-8 pl-2 focus:outline-yellow-200 focus:border"
            placeholder={t("searchbar")}
            onChange={(e) => value.setSearchTerm(e.target.value)}
          />

          <div className="bg-yellow-400 flex items-center cursor-pointer justify-center border border-l-black w-10 h-8 rounded-r-sm">
            <IoSearch />
          </div>
        </div>

        <div className="w-1/2 flex items-center mb-4 justify-end space-x-14">
          <div className="flex">
            {lang && <Flag country={country[lang]} className="mr-2" />}
            <select
              name="lang"
              id="use-lang"
              onChange={handleLangChange}
              value={lang}
              className="px-3 py-[4px] rounded-sm font-semibold"
            >
              <option value="">Lang</option>
              <option value="india">हिंदी</option>
              <option value="korean">Korean</option>
              <option value="american">English (US)</option>
            </select>
          </div>

          <div
            className="inline-flex flex-col items-center justify-center relative bottom-[4px] cursor-pointer"
            onClick={() => setShowCart(!showCart)} // Toggle cart visibility on click
          >
            <h1 className="text-yellow-300 font-semibold -mb-2">{value.count}</h1>
            <BsCart2 className="text-white" size={24} />
          </div>

          <div className="flex items-center">
            <button className="border-[2px] border-white font-semibold text-base text-white px-5 py-1 rounded-lg mr-8 hover:bg-white hover:text-black transition-colors duration-500">
              {t("login")}
            </button>
            <button className="border-[2px] border-white font-semibold text-base text-white px-4 py-1 rounded-lg mr-8 hover:bg-white hover:text-black transition-colors duration-500">
              {t("signup")}
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-purple-500 flex justify-between items-center p-2">
        <ul className="flex justify-center space-x-6 mr-3">
          <li className="text-white font-sans hover:text-yellow-100 cursor-pointer">
            {t("home")}
          </li>
          <li className="text-white font-sans hover:text-yellow-100 cursor-pointer">
            {t("education")}
          </li>
          <li className="text-white font-sans hover:text-yellow-100 cursor-pointer">
            {t("about")}
          </li>
          <li className="text-white font-sans hover:text-yellow-100 cursor-pointer">
            {t("contactUs")}
          </li>
        </ul>
      </div>
      {showCart && (
        <div className="absolute right-0 top-16 bg-white shadow-lg p-5 w-64">
          <Cart />
        </div>
      )}
    </>
  );
};

export default Navbar;
