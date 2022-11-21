import Styles from "./Aboutus.module.scss";
function Aboutus() {
  return (
    <div className={Styles.body}>
      <section className={Styles.aboutus}>
        <div className={Styles.main}>
          <img
            className={Styles.react}
            width={200}
            height={167}
            src={require("./3.png")}
          />
          <div className={Styles.textab}>
            <h1 className={Styles.h1}>О нас</h1>
            <p className={Styles.p}>
              REACT SWEET-интернет-магазин иностранных сладостей и напитков, не
              представленных широко на российском рынке. В нашем магазине вы
              найдете популярные вкусности из Америки, Европы и Азии. Заходите в
              наш онлайн-каталог и побалуйте себя вкусняшками, которые пробовали
              в путешествии за границей, но которых нет в обычных сетевых
              супермаркетах!
            </p>
            <button className={Styles.btn} type="button">
              {" "}
              Написать нам
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
