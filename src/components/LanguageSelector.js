import { useContext, useState } from "react";
import Select from "react-select";

import { LanguageContext, ThemeContext } from "../App";
import useLocalStorage from "../hooks/useLocalStorage";
import { options } from "../assets/options";

export default function LanguageSelector() {

  const { isDarkTheme } = useContext(ThemeContext);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
 
 



  const {setItem} = useLocalStorage("lang");

  return (
    <div className="col-6 col-sm-4 col-lg-2 ms-auto">
      <Select
        options={options}
        value={selectedLanguage} // Bind selected value
        onChange={(option) => {

          setItem(option.value);
          setSelectedLanguage(option)
        }} // Update state on selection
      
      />
    </div>
  );
}
