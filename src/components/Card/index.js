import Styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import { StorageAppContext } from "../../App";
function Card({
  id,
  title,
  price,
  ImgUrl,
  onPlus,
  onFavourite,
  isFav = false,
  added = false,
  isLoad = false,
}) {
  const { isItemAdded } = React.useContext(StorageAppContext);

  const [isFavourite, setIsFavourite] = React.useState(isFav);

  const obj = { id, parentId: id, title, ImgUrl, price };

  const onClickFavouite = () => {
    onFavourite(obj);
    setIsFavourite(!isFavourite);
  };

  const handleClickPlus = () => {
    onPlus(obj); //мы рашеам что будет передваться здесь в качестве параметров
  };

  return (
    <div className={Styles.card}>
      {isLoad ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="168" rx="10" ry="10" width="150" height="15" />
          <rect x="1" y="230" rx="5" ry="5" width="100" height="25" />
          <rect x="0" y="187" rx="5" ry="5" width="80" height="15" />
          <rect x="118" y="230" rx="5" ry="5" width="32" height="32" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
        </ContentLoader>
      ) : (
        <>
          <div className="like ">
            <img
              onClick={onClickFavouite}
              className="cu-p"
              width={27}
              height={27}
              src={isFavourite ? "/img/heartr.png" : "/img/heartwh.png"}
            />
          </div>

          <img width={140} height={120} src={ImgUrl} alt="sweets" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>

            <img
              className={Styles.plus}
              onClick={handleClickPlus}
              height={isItemAdded(id) ? 30 : 17}
              width={isItemAdded(id) ? 30 : 17}
              src={isItemAdded(id) ? "/img/checked.png" : "/img/plus.png"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
