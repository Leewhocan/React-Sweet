// все что внутри функции app для реакта является обьектом

import React from "react";
import "macro-css";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";
import axios from "axios";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";

export const StorageAppContext = React.createContext({}); //точечный экспорт

function App() {
  // useState 5 - начальное значение счетчика, count-счетчик, setcount-установка счетчика в новое значение которому будет равен count

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [Favourite, setFavoirite] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);

  const [count, setCount] = React.useState(5);
  const [cartIsOpen, setCartIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function getData() {
      setIsLoad(true);
      const cartResp = await axios.get(
        "https://634fe3a978563c1d82b2adcc.mockapi.io/sweets"
      );
      const favResp = await axios.get(
        "https://634fe3a978563c1d82b2adcc.mockapi.io/favoirite"
      );

      const cartDrawResp = await axios.get(
        "https://634fe3a978563c1d82b2adcc.mockapi.io/cart"
      );

      setIsLoad(false);

      setCartItems(cartDrawResp.data);
      setFavoirite(favResp.data);
      setItems(cartResp.data);
    }

    getData();
  }, []);

  // почему useEffect а не useState ну потому что useEffect будет перерисовыввать ток один раз при измененеии, usestate при незначительном движении изменении

  const onAddCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://634fe3a978563c1d82b2adcc.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://634fe3a978563c1d82b2adcc.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }

    // console.log(obj);
    // if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
    //   setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    //   axios.delete(
    //     `https://634fe3a978563c1d82b2adcc.mockapi.io/cart/${obj.id}`
    //   );
    // } else {
    //   setCartItems([...cartItems, obj]);
    //   axios.post("https://634fe3a978563c1d82b2adcc.mockapi.io/cart", obj);
    // }

    // setCartItems([...cartItems, obj]); //чтобы реакт работал корректно, мы при помощи ... переносим в новый массив то что уже было и добалвем новый( это нужно именно для реакта )
  };

  const onAddFavourite = async (obj) => {
    console.log(obj);

    if (Favourite.find((favobj) => Number(favobj.id) === Number(obj.id))) {
      axios.delete(
        `https://634fe3a978563c1d82b2adcc.mockapi.io/favoirite/${obj.id}`
      );
      setFavoirite((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const { data } = await axios.post(
        "https://634fe3a978563c1d82b2adcc.mockapi.io/favoirite",
        obj
      );
      setFavoirite((prev) => [...prev, data]);
    }
  };

  const onRemoveCartItems = (id) => {
    axios.delete(`https://634fe3a978563c1d82b2adcc.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  //но лучше конечно так setCartItems(prev=>[...prev,obj]) - чек уроки по useState

  //console.log(cartItems);

  const changeInput = (event) => {
    console.log(event.target.value); //target - ссылка на обьект кторый был инициатором события
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <StorageAppContext.Provider
      value={{
        items,
        cartItems,
        Favourite,
        isItemAdded,
        onAddFavourite,
        onAddCart,
        setCartIsOpen,
        setCartItems,
      }}
    >
      <div className="HeadOfSite">
        {cartIsOpen ? (
          <Drawer
            items={cartItems}
            onCloseCart={() => setCartIsOpen(false)}
            onRemove={onRemoveCartItems}
          />
        ) : null}

        {/*  onClickCart - событие которе передаем анонмную функцию которая вызвает метод setCartIsOpen  */}
        <Header onClickCart={() => setCartIsOpen(true)} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                changeInput={changeInput}
                onAddCart={onAddCart}
                onAddFavourite={onAddFavourite}
                isLoad={isLoad}
              />
            }
          />
          <Route
            path="/favoirite"
            exact
            element={<Favourites onAddFavourite={onAddFavourite} />}
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/aboutus" exact element={<Aboutus />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </StorageAppContext.Provider>
  );
}

export default App;
