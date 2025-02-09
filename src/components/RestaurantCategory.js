import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
//  console.log("RestaurantCategory.data.itemcards:::", data?.itemCards);
//const [showItems, setShowItems] = useState(false);

const handleClick = () =>{
 // setShowItems(!showItems);
 setShowIndex();
}

  return (
    <div>
        {/*Header*/}
        <div className="category-header" onClick={handleClick}>
     <span>{data?.title} ({data?.itemCards?.length})</span>
     <span>⬇️</span>
     </div>
    {/*accordion body*/}
    {showItems && <ItemList items = {data?.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
