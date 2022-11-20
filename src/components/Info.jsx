import React from "react";
import { StorageAppContext } from "../App";
const Info = ({ title }) => {
  const { setCartIsOpen } = React.useContext(StorageAppContext);
  return (
    <div className="EmptyCart d-flex align-center  flex-column flex">
      <h2>
        <b>{title}</b>
      </h2>
      <button onClick={() => setCartIsOpen(false)} className="btnCart cu-p">
        <img
          src="/img/arrowleft.png"
          width={10}
          height={10}
          className="mr-10"
        ></img>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
