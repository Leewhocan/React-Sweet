import Card from "../components/Card";
import React from "react";
import { StorageAppContext } from "../App";
function Favourites({ onAddFavourite }) {
  const { Favourite } = React.useContext(StorageAppContext);

  return (
    <div className="List">
      <div className="d-flex align-center justify-between mb-40 mt-20 Search-block">
        <h1 className="pl-10">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap p-30">
        {Favourite.map((item) => (
          <Card //возвращает html элементы но сам по себе не является html элментом он обьект(react компонент) поэтому его свойства могут быть любыми в то время как, у html тега есть только твои свойства и точка, ты не можешь тегу задать свойство со своим именем
            id={item.id}
            title={item.title}
            price={item.price}
            ImgUrl={item.ImgUrl} //вообще здесь можно добавить еще например onClick который будет содержать в себе условный console.log (obj ) и в карточке, я могу уже props.onClick что вызвоет console log тогда где я использовал props.onClick
            isFav={true}
            onFavourite={onAddFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
