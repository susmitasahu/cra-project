
import { useContext } from "react";

import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo } = resData?.card.card.info || {};
    const { deliveryTime } = resData?.card.card.info?.sla || {};
    return( 
        <div className="m-4 p-4 w-[200px]" style={{backgroundColor:"#f0f0f0"}}>
            <img className="rounded-lg"
             alt="res-logo"
             src={CDN_URL+cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};

//higher order component
export const withPromotedValue = (RestaurantCard) =>{
    return(props)=>{
    return(<div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>   
    </div>
    );
    };
};
export default RestaurantCard;