import React from "react";
import "./index.css";

//Mobile icons
import TelegramIconMob from "../../images/icons/mob/Telegram_mob.png";
import PhoneIconMob from "../../images/icons/mob/Phone_mob.png";
import WhatsappIconMob from "../../images/icons/mob/Whatsapp_mob.png";

type FooterProps = {
  isMobile: boolean;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { isMobile } = props;
  return (
    <section className="footer-container">
      <ul className="footer-list">
        <h3 className="footer-list__title">о компании</h3>
        <li className="footer-list__item">
          <a href="#" className="footer-list__item-link">
            Партнёрская программа
          </a>
        </li>
        <li className="footer-list__item">
          <a href="#" className="footer-list__item-link">
            Вакансии
          </a>
        </li>
      </ul>
      {isMobile ? (
        <>
          <ul className="footer-list">
            <h3 className="footer-list__title">меню</h3>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Расчёт стоимости
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Услуги
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Виджеты
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Интеграции
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Наши клиенты
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <h3 className="footer-list__title"></h3>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Кейсы
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Благодарственные письма
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Сертификаты
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Блог на Youtube
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </>
      ) : (
        <div className="footer-mobile-container">
          <ul className="footer-list">
            <h3 className="footer-list__title">меню</h3>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Расчёт <br /> стоимости
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Услуги
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Виджеты
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Интеграции
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Наши клиенты
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <h3 className="footer-list__title">
              <span className="footer-list__hiden-title">Hiden</span>
            </h3>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Кейсы
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Благодарность <br /> клиентов
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Сертификаты
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Блог на Youtube
              </a>
            </li>
            <li className="footer-list__item">
              <a href="#" className="footer-list__item-link">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </div>
      )}

      <ul className="footer-list footer-list_last">
        <h3 className="footer-list__title">контакты</h3>
        <li className="footer-list__item footer-list_last-item">
          <a href="#" className="footer-list__item-link">
            <span className="footer-list__item-link_cancel_rules_font">
              +7 555 555-55-55
            </span>
          </a>
        </li>
        <li className="footer-list__item footer-list_last-item">
          <a href="#" className="footer-list__item-link">
            <img src={TelegramIconMob} alt="телеграмм" />
          </a>
          <a href="#" className="footer-list__item-link">
            <img src={PhoneIconMob} alt="телефон" />
          </a>
          <a href="#" className="footer-list__item-link">
            <img src={WhatsappIconMob} alt="ватсапп" />
          </a>
        </li>

        <li className="footer-list__item footer-list_last-item">
          <a href="#" className="footer-list__item-link">
            Москва, Путевой проезд 3с1, к 902
          </a>
        </li>
        <li className="footer-list__item footer-list_last-description">
          ©WELBEX 2022. Все права защищены.
        </li>
        <li className="footer-list__item footer-list_last-link">
          <a href="#" className="footer-list__item-link">
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
