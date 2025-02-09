import React from "react";
import RestaurantCard,{ withPromotedValue } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        try {
        const data = 
        await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const listRests = json.data.cards.slice(3); //to skip first 4 elements in list
        console.log(listRests);
        setListOfRestaurants(listRests);
        setFilteredRestaurant(listRests);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }; 

    if(onlineStatus === false){
        return <h1>You are offline</h1>;
    }

    const PromotedRestaurantCard = withPromotedValue(RestaurantCard);

    return listOfRestaurants.length === 0 ? <Shimer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" 
                        value={searchText}
                        onChange={(e) =>
                        {
                            setSearchText(e.target.value);
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res)=>res.card.card.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200 transition-colors"
                     onClick={() =>{
                        console.log(searchText);

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <label>UserName:</label>
                    <input className="border" value={loggedInUser} 
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <button className="filter-btn"
                 onClick={() =>
                  { 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.card.card.info?.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
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