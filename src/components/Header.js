import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { StorageAppContext } from "../App";
function Header(props) {
  const { cartItems } = React.useContext(StorageAppContext);

  const Drawerprice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-15">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={50} height={50} src="/img/sweets.png" />
        </Link>

        <div className="HeaderInf">
          <h3 className="text-uppercase">REACT SWEET</h3>
          <p>Лучший магазин сладостей в РФ</p>
        </div>
      </div>
      <ul className="clear d-flex flex-wrap">
        <li onClick={props.onClickCart} className="mr-30 cu-p ">
          <img width={18} height={18} src="/img/icon_shop.png" />
          <span>{Drawerprice} руб</span>
        </li>
        <Link to="/favoirite">
          <li className="slide mr-30 cu-p ">
            <img width={18} height={18} src="/img/heartwh.png"></img>
          </li>
        </Link>
        <Link to="/orders">
          <li className="slide mr-30">
            <img width={18} height={18} src="/img/user-icon.png" />
          </li>
        </Link>
        <Link to="/login">
          <li className="slide mr-30">
            <img width={18} height={18} src="/img/login.png" />
          </li>
        </Link>
        <Link to="/aboutus">
          <li className="slide mr-30">
            <img width={18} height={18} src="/img/question.png" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
