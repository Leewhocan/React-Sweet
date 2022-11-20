import Card from "../components/Card";
import React from "react";
import { StorageAppContext } from "../App";
import axios from "axios";
function Orders({ onAddFavourite }) {
  const { onAddCart } = React.useContext(StorageAppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://634fe3a978563c1d82b2adcc.mockapi.io/orders"
      );
      console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setIsLoad(false);
    })();
  }, []);
  return (
    <div className="List">
      <div className="d-flex align-center justify-between mb-40 mt-20 Search-block">
        <h1 className="pl-10">Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap p-30">
        {orders.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            ImgUrl={item.ImgUrl} //вообще здесь можно добавить еще например onClick который будет содержать в себе условный console.log (obj ) и в карточке, я могу уже props.onClick что вызвоет console log тогда где я использовал props.onClick
            onPlus={(obj, isAdded) => onAddCart(obj, isAdded)} //откуда здесб obj?????? ответ: из компонента card все что мы там передаем, будет выводиться
            onFavourite={(obj) => onAddFavourite(obj)}
            isLoad={isLoad} //возвращает html элементы но сам по себе не является html элментом он обьект(react компонент) поэтому его свойства могут быть любыми в то время как, у html тега есть только твои свойства и точка, ты не можешь тегу задать свойство со своим именем
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
