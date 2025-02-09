import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  //useEffect(() => {
    //console.log("ResturantMenu render");
    //fetchMenu();
  //}, []);

  const resInfo = useRestaurantMenu(resId);

  const [ showIndex,setShowIndex] = useState(0);

 // const fetchMenu = async () => {
    //https://www.swiggy.com/city/bhubaneswar/greenchillyz-surya-nagar-rest106218?restaurant_id=106218
    //http://localhost:3000/restaurants/106218 -> hit this in browser to get the menu
   // const data = await fetch(MENU_API + resId);
    //const json = await data.json();
    //console.log(json);
    //const listRests = json.data.cards.slice(3);
    //setresInfo(json.data.cards);
  //};
  //console.log("resInfo: 4:");
  //console.log(resInfo ? resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards : null);
  //const name = resInfo ? resInfo?.card?.card?.info?.name : "Loading...";
  //const {name, cuisines, costForTwo } = resInfo ? resInfo[4]?.card?.card?.carousel?.info : {name: "Loading...", cuisines: "Loading...",costForTwo:"Loading..."};
  const { itemCards} = resInfo ? resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : "Loading...";
  console.log("itemCards",itemCards);
 // console.log("itemCards",resInfo ? resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards : "Loading...");

  const categories =
  resInfo ? resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => {
    //  console.log("card type",c.card?.card?.["@type"]);
      return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    }
  ) : "Loading...";
 console.log("categories",categories);
  return resInfo == null
    ? <Shimmer />
    : <div className="menu">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item, index) => (
            <li key={index}>
              <div className="menu-item">
                <h3>{item.card.info.name}</h3>
                <p>{item.card.info.price}</p>
                {/*build accordion*/}
                {categories.map((category,index) => ( 
                  <RestaurantCategory key={category?.card?.card?.title} 
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>;
};
export default ResturantMenu;
