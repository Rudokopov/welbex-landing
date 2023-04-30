import React from "react";
import "./Header.css";
import Logo from "../../images/icons/logo_welbex.png";
import TelegramIcon from "../../images/icons/telegram.png";
import PhoneIcon from "../../images/icons/phone.png";
import WhatsappIcon from "../../images/icons/whatsapp.png";

export default function Header(props) {
  const { isMobile } = props;
  return (
    <section className="header-container">
      {isMobile ? (
        <div className="header-logo__container">
          <a href="#">
            <img src={Logo} className="header-logo" alt="логотип"></img>
          </a>
          <p className="header-logo__description">
            крупный интегратор CRM в Росcии и ещё 8 странах
          </p>
        </div>
      ) : (
        ""
      )}

      <ul className="header-list">
        <li className="header-list__item">
          <a className="header-list__item-link" href="#">
            Услуги
          </a>
        </li>
        <li className="header-list__item">
          <a className="header-list__item-link" href="#">
            Виджеты
          </a>
        </li>
        <li className="header-list__item">
          {" "}
          <a className="header-list__item-link" href="#">
            Интеграции
          </a>
        </li>
        <li className="header-list__item">
          <a className="header-list__item-link" href="#">
            Кейсы
          </a>
        </li>
      </ul>
      {isMobile && (
        <ul className="header-list">
          <li className="header-list__item">
            <a className="header-list__item-link" href="#">
              +7 555 555-55-55
            </a>
          </li>
          <li className="header-list__item">
            <a className="header-list__item-link" href="#">
              <img src={TelegramIcon} alt="телеграм" />
            </a>
          </li>
          <li className="header-list__item">
            <a className="header-list__item-link" href="#">
              <img src={PhoneIcon} alt="телефон" />
            </a>
          </li>
          <li className="header-list__item">
            <a className="header-list__item-link" href="#">
              <img src={WhatsappIcon} alt="ватсапп" />
            </a>
          </li>
        </ul>
      )}
    </section>
  );
}
