import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = resId => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setresInfo(json.data.cards);
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
