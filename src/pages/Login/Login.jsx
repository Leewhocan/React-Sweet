import Styles from "./Login.module.scss";
function Login({ onAddFavourite }) {
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <div className={Styles.titlenik}>Регистрация</div>
        <form className={Styles.forma} action="#">
          <div className={Styles.userdet}>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>ФИО</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="ФИО"
                required
              />
            </div>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>Имя пользователя</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="Логин"
                required
              />
            </div>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>Эл.Почта</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="Почта"
                required
              />
            </div>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>Телефонный номер</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="Тел :+7"
                required
              />
            </div>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>Пароль</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="Пароль"
                required
              />
            </div>
            <div className={Styles.inputbox}>
              <span className={Styles.details}>Подтвердите пароль</span>
              <input
                className={Styles.iinput}
                type="text"
                placeholder="Подтвердите пароль"
                required
              />
            </div>
          </div>
          <div className={Styles.butn}>
            <input
              className={Styles.inputbtn}
              type="submit"
              value="Регистрация"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
