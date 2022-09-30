import "macro-css"
import "./index.scss"

function App() {
  return (
    <div className="HeadOfSite">

      <header className="d-flex justify-between align-center p-15">
        <div className="d-flex align-center">
          <a href="https://www.flaticon.com/free-icons/sweets"><img width={50} height={50} src="/img/sweets.png"/></a>
          
          
          <div className="HeaderInf">
           <h3 className="text-uppercase">REACT SWEET</h3>
            <p>Лучший магазин сладостей в РФ</p>
          </div>
        </div>
        <ul className="clear d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/icon_shop.png" />
          <span>1230 руб</span>
          </li>
        <li>
          <img width={18} height={18} src="/img/user-icon.png" />
        </li>
      </ul>
      </header>
      <div className="List">
        <h1 className="mb-40">Все сладости</h1>
        <div className="d-flex justify-between p-30 ">
        <div className="card">
          <img width={140} height={120} src="/img/sweets/sweets1.png" alt="sweets"/>
          <h5>Мармелад Jelly Belly.Bean Boozled Game (ассорти вкусов)</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1200 рублей</b>
            </div>
            <button className="button">
              <img height={10} width={10} src="/img/plus.png"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={140} height={120} src="/img/sweets/sweets1.png" alt="sweets"/>
          <h5>Мармелад Jelly Belly.Bean Boozled Game (ассорти вкусов)</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1200 рублей</b>
            </div>
            <button className="button">
              <img height={10} width={10} src="/img/plus.png"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={140} height={120} src="/img/sweets/sweets1.png" alt="sweets"/>
          <h5>Мармелад Jelly Belly.Bean Boozled Game (ассорти вкусов)</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1200 рублей</b>
            </div>
            <button className="button">
              <img height={10} width={10} src="/img/plus.png"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={140} height={120} src="/img/sweets/sweets1.png" alt="sweets"/>
          <h5>Мармелад Jelly Belly.Bean Boozled Game (ассорти вкусов)</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1200 рублей</b>
            </div>
            <button className="button">
              <img height={10} width={10} src="/img/plus.png"/>
            </button>
          </div>
        </div>
        </div>
    
        
        

      </div>
    </div>
    
  );
}

export default App;
