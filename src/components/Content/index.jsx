import "./index.css";
import React from "react";

export default function Content(props) {
  const { isMobile } = props;
  return (
    <section className="content-container">
      <div className="content-left-side">
        <h1 className="content-left-side__title">
          Зарабатывайте больше
          <br />
          <span className="content-text-marker"> c WELBEX</span>
        </h1>
        <p className="content-left-side__description">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className="content-right-side">
        <h2 className="content-right-side__title">
          Вместе c
          <span className="content-text-marker content-text-marker_description">
            {" "}
            бесплатной
          </span>
          <br />{" "}
          <span className="content-text-marker content-text-marker_description">
            {" "}
            консультацией
          </span>{" "}
          мы дарим:
        </h2>
        {isMobile ? (
          <>
            <ul className="content-right-side__list-container">
              <li className="list-container-item">
                <h3 className="list-container-item__title">Виджеты</h3>
                <p className="list-container-item__description">
                  30 готовых <br /> решений
                </p>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">Dashboard</h3>
                <p className="list-container-item__description">
                  c показателями <br /> вашего бизнеса
                </p>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">Skype Аудит</h3>
                <p className="list-container-item__description">
                  отдела продаж <br /> и CRM системы
                </p>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">35 дней</h3>
                <p className="list-container-item__description">
                  использования <br /> CRM
                </p>
              </li>
            </ul>
            <button className="content-button">Получить консультацию</button>{" "}
          </>
        ) : (
          <>
            <ul className="content-right-side__list-container">
              <li className="list-container-item">
                <h3 className="list-container-item__title">
                  <span className="list-container-item__title-line">–</span>{" "}
                  Skype Аудит
                </h3>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">
                  <span className="list-container-item__title-line">–</span>{" "}
                  Dashboard
                </h3>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">
                  <span className="list-container-item__title-line">–</span> 30
                  Виджетов
                </h3>
              </li>
              <li className="list-container-item">
                <h3 className="list-container-item__title">
                  <span className="list-container-item__title-line">–</span>{" "}
                  месяц amocrm
                </h3>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
