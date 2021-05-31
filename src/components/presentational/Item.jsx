//R34c7
import React, { useContext } from "react";

//Custom Components
import ItemCount from "../functional/ItemCount";
import ItemContext from "../functional/ItemContext";
import "./Item.css";

const Item = (props) => {
  // const [productID, setproductID] = useContext(ItemContext);
  const myItemID = props.itemID;
  return (
    <article className="product-container">
      <div className="product__image-container">
        {/* <a href="#"> */}
          <img
            src={props.image}
            alt={`${props.name}`}
            // onClick={() => {
            //   setproductID({ productID } === {myItemID}); }}
            
          />
        {/* </a> */}
      </div>
      <h6 className="product__name">{props.name}</h6>
      <p className="product__price">${props.price}</p>
      <div className="product__counter-container">
        <ItemCount initial={1} stock={props.stock} />
      </div>
    </article>
  );
};

export default Item;
