import { useContext, useState } from "react";
import Select from "react-select";
import en_flag from "../assets/en_flag.svg";
import fr_flag from "../assets/fr_flag.svg";
import ar_flag from "../assets/ar_flag.svg";
import { LanguageContext, ThemeContext } from "../App";

export default function LanguageSelector() {

  const { isDarkTheme } = useContext(ThemeContext);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
 
 

  // Language options
  const options = [
    {
      value: "en",
      label: (
        <div   className="text-dark">
          <img src={en_flag} alt="English" width="20" /> English
        </div>
      ),
    },
    {
      value: "fr",
      label: (
        <div   className="text-dark">
          <img src={fr_flag} alt="Français" width="20" /> Français
        </div>
      ),
    },
    {
      value: "ar",
      label: (
        <div   className="text-dark">
          <img src={ar_flag} alt="العربية" width="20" /> العربية
        </div>
      ),
    },
  ];

  return (
    <div className="col-6 col-sm-4 col-lg-2 ms-auto">
      <Select
        options={options}
        value={selectedLanguage} // Bind selected value
        onChange={(option) => setSelectedLanguage(option)} // Update state on selection
      
      />
    </div>
  );
}
