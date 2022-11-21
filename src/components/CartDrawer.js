import Info from "./Info";
import React from "react";
import { StorageAppContext } from "../App";
import axios from "axios";

function Drawer({ items = [], onCloseCart, onRemove }) {
  const { cartItems, setCartItems } = React.useContext(StorageAppContext);
  const [isOreder, setIsorder] = React.useState(false);
  const [isLoad, setIsLoad] = React.useState(false);

  const onClickOrder = () => {
    setIsLoad(true);
    axios.post("https://634fe3a978563c1d82b2adcc.mockapi.io/orders", {
      items: cartItems,
    });
    setIsorder(true);
    setCartItems([]);
    setIsLoad(false);
    cartItems.forEach((item) => {
      axios.delete(
        `https://634fe3a978563c1d82b2adcc.mockapi.io/cart/${item.id}`
      );
    });
  };
  const Drawerprice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className="overlay_shadow">
      <div className="dragger d-flex flex-column">
        <div className="p-30">
          <h2 className="d-flex justify-between mb-30">
            Корзина{" "}
            <img
              onClick={onCloseCart}
              className="cu-p"
              height={30}
              width={30}
              src="/img/rejected.png"
            ></img>
          </h2>
          {items.length > 0 ? (
            <div>
              <div className="Items">
                {items.map((obj) => (
                  <div className="cartItem d-flex flex-wrap align-center mb-20">
                    <div
                      style={{ backgroundImage: `url(${obj.ImgUrl})` }}
                      className="cartItemImg"
                    ></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title})</p>
                      <b>{obj.price}</b>
                    </div>

                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="/img/rejected.png"
                      height={25}
                      width={25}
                    ></img>
                  </div>
                ))}
              </div>

              <div className="total-block">
                <ul>
                  <li className="d-flex">
                    <span>Итого:</span>
                    <div></div>
                    <b>{Drawerprice} руб.</b>
                  </li>
                  <li className="d-flex">
                    <span>Налог 5%</span>
                    <div></div>
                    <b>{(Drawerprice * 5) / 100} руб.</b>
                  </li>
                </ul>
                <button disabled={isLoad} onClick={onClickOrder}>
                  Оформить заказ
                </button>
              </div>
            </div>
          ) : (
            <Info title={isOreder ? "Заказ оформлен!" : "Корзина пуста"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
