import Card from "../../components/Card";
import React from "react";

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  changeInput,
  onAddCart,
  onAddFavourite,
  isLoad,
}) {
  const Arrayy = [{}, {}, {}, {}, {}, {}];

  const renderCart = () => {
    return (
      isLoad
        ? Arrayy
        : items.filter((item) => item.name.toLowerCase().includes(searchValue))
    ).map((item, index) => (
      <Card
        id={item.id}
        parentId={item.id}
        title={item.name}
        price={item.price}
        ImgUrl={item.ImgUrl}
        onPlus={(obj) => onAddCart(obj)}
        onFavourite={(obj) => onAddFavourite(obj)}
        isLoad={isLoad}
      />
    ));
  };
  return (
    <div className="List">
      <div className="d-flex align-center flex-wrap justify-between mb-40 mt-20 Search-block">
        <h1 className="pl-10">
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все сладости "}
        </h1>
        <div className="searchBlock d-flex">
          <img src="/img/search.svg" width={26} height={20} alt="Search" />
          {searchValue ? (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              height={30}
              width={30}
              src="/img/rejected.png"
            ></img>
          ) : null}

          <input
            onChange={changeInput}
            value={searchValue}
            className="innpm"
            placeholder="Поиск"
          />
        </div>
      </div>

      <div style={{ gap: 60 }} className="d-flex flex-wrap p-30">
        {renderCart()}
      </div>
    </div>
  );
}

export default Home;
