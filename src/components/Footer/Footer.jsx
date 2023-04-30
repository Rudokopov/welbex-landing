import "./Footer.css";
import TelegramIcon from "../../images/icons/telegram.png";
import PhoneIcon from "../../images/icons/phone.png";
import WhatsappIcon from "../../images/icons/whatsapp.png";

export default function Footer() {
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
      <ul className="footer-list footer-list_last">
        <h3 className="footer-list__title">контакты</h3>
        <li className="footer-list__item footer-list_last-item">
          <a href="#" className="footer-list__item-link">
            +7 555 555-55-55
          </a>
        </li>
        <li className="footer-list__item footer-list_last-item">
          <a href="#" className="footer-list__item-link">
            <img src={TelegramIcon} alt="телеграмм" />
          </a>
          <a href="#" className="footer-list__item-link">
            <img src={PhoneIcon} alt="телефон" />
          </a>
          <a href="#" className="footer-list__item-link">
            <img src={WhatsappIcon} alt="ватсапп" />
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
}
