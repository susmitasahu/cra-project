import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log("ItemList.items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //dispatch an action
    dispatch(addItem(item));
  }
  return ( 
    <div>
      <ul>
        {items.map(item => (
          <div key={item?.card?.info?.id}>
            <div>
              <button
                className="p-2 m-2 border-gray-300 rounded-lg hover:bg-green-200 transition-colors"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} alt="item" className="item-img"/>
            <div>
              <span>{item?.card?.info?.name}</span>
              <span>- ${item?.card?.info?.price ? item?.card?.info?.price/100 : 100}</span>
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
