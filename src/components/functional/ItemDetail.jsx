//R34c7
import React, { useEffect, useState } from "react";

//Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

//Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Custom Components
import ItemZoomed from "../presentational/ItemZoomed";
import productDetailList from "../container/productosDetail.js";

import "./ItemList.css";
const ItemDetail = (props) => {
  const productId = Number(props.id);
  const [items, setItems] = useState([]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productDetailList);
    }, 2000);
  });

  const myAlert = (message) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Atención</p>,
      footer: "{ window.brandName }",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>{message}</p>);
    });
  };

  const loadProducts = async () => {
    try {
      const result = await getItems;
      setItems(result);
    } catch (error) {
      myAlert(
        "Atención, no se pudo obtener la lista de productos. Por favor reintente en unos instantes."
      );
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product-list-container">
      {items.length ? (
        <>
          {items
            .filter((item) => item.itemID === productId)
            .map((item) => {
              return (
                <div key={item.itemID}>
                  <ItemZoomed
                    image={item.image}
                    name={item.name}
                    descr={item.descr}
                    color={item.color}
                    brand={item.brand}
                    price={item.price}
                    stock={item.stock}
                  />
                </div>
              );
            })}
        </>
      ) : (
        <p>{<CircularProgress />}</p>
      )}
    </div>
  );
};

export default ItemDetail;
