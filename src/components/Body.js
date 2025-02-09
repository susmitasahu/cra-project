import React from "react";
import RestaurantCard,{ withPromotedValue } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const PromotedRestaurantCard = withPromotedValue(RestaurantCard);

    useEffect(() => {
        console.log("useEffect called");//this called 2nd after render element,so api calls inside this
        fetchData();
    }, []);

    const fetchData = async () =>{
        try {
        const data = 
        await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const listRests = json.data.cards.slice(3); //to skip first 4 elements in list
        console.log(listRests);
        setlistOfRestaurants(listRests);
        setFilteredRestaurant(listRests);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }; 
    console.log("Body render called");//this call first

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>You are offline</h1>;
    }

    return listOfRestaurants.length === 0 ? <Shimer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=>res.card.card.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}/>
                    <button onClick={() =>{
                        console.log(searchText);

                    }}>Search</button>
                </div>
                <button className="filter-btn"
                 onClick={() =>
                  { 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.card.card.info?.avgRating > 4
                    );
                    setlistOfRestaurants(filteredList);
                  }
                  }>
                Top Rated Restaurant</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
            {filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.card.card.info?.id}
              to ={"/restaurants/"+restaurant.card.card.info?.id}>

                {restaurant.card.card.info?.promoted ?
                ( <PromotedRestaurantCard resData={restaurant} /> ) :
               ( <RestaurantCard  resData={restaurant} />)}

            </Link>
            ))}
            </div>
        </div>
    )
};

export default Body;