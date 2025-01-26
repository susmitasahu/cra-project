
import React from "react";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const { resData } = props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo } = resData?.card.card.info || {};
    const { deliveryTime } = resData?.card.card.info?.sla || {};
    return( 
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
             alt="res-logo"
             src={CDN_URL+cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;