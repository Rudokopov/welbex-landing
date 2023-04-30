import "./Header.css";
import Logo from "../../images/icons/logo_welbex.png";
import TelegramIcon from "../../images/icons/telegram.png";
import PhoneIcon from "../../images/icons/phone.png";
import WhatsappIcon from "../../images/icons/whatsapp.png";

export default function Header() {
  return (
    <section className="header-container">
      <div className="header-logo__container">
        <img src={Logo} className="header-logo" alt="логотип"></img>
        <p className="header-logo__description">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <ul className="header-list">
        <li className="header-list__item">Услуги</li>
        <li className="header-list__item">Виджеты</li>
        <li className="header-list__item">Интеграции</li>
        <li className="header-list__item">Кейсы</li>
        <li className="header-list__item">Сертификаты</li>
      </ul>
      <ul className="header-list">
        <li className="header-list__item">+7 555 555-55-55</li>
        <li className="header-list__item">
          <img src={TelegramIcon} alt="телеграм" />
        </li>
        <li className="header-list__item">
          <img src={PhoneIcon} alt="телефон" />
        </li>
        <li className="header-list__item">
          <img src={WhatsappIcon} alt="ватсапп" />
        </li>
      </ul>
    </section>
  );
}
