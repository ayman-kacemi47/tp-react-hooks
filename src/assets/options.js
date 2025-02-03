import en_flag from "./en_flag.svg";
import fr_flag from "./fr_flag.svg";
import ar_flag from "./ar_flag.svg";

export  const options = [
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