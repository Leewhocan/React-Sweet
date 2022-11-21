import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { StorageAppContext } from "../../App";
import Styles from "./Header.module.scss";
function Header(props) {
  const { cartItems } = React.useContext(StorageAppContext);

  const Drawerprice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className={Styles.Head}>
      <div className="d-flex align-center">
        <Link to="/">
          <img width={50} height={50} src="/img/sweets.png" />
        </Link>

        <div className="HeaderInf">
          <h3 className="text-uppercase">REACT SWEET</h3>
          <p className={Styles.parg}>Лучший магазин сладостей в РФ</p>
        </div>
      </div>
      <ul className="clear d-flex flex-wrap">
        <li onClick={props.onClickCart} className={Styles.menu}>
          <img width={18} height={18} src="/img/icon_shop.png" />
          <span>{Drawerprice} руб</span>
        </li>
        <Link to="/favoirite">
          <li className={Styles.menu}>
            <img width={18} height={18} src="/img/heartwh.png"></img>
          </li>
        </Link>
        <Link to="/orders">
          <li className={Styles.menu}>
            <img width={18} height={18} src="/img/user-icon.png" />
          </li>
        </Link>
        <Link to="/login">
          <li className={Styles.menu}>
            <img width={18} height={18} src="/img/login.png" />
          </li>
        </Link>
        <Link to="/aboutus">
          <li className={Styles.menu}>
            <img width={18} height={18} src="/img/question.png" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
