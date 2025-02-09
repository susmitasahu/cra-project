import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("ItemList.items", items);
  return ( <div>
  <ul>
     {items.map(item => <div key={item?.card?.info?.id}>
        <div>
            <button>Add+</button>
        </div>
        <img src = {CDN_URL + item?.card?.info?.imageId} alt = "item" className="item-img"/>
         <div><span>{item?.card?.info?.name}</span>
         <span>- ${item?.card?.info?.price ? item?.card?.info?.price/100 : 100}</span>
         </div>
         <p>{item?.card?.info?.description}</p>
         </div>
         )}
     </ul>
 </div>
  );
};

export default ItemList;
