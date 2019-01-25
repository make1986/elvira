import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIgloo,
  faBullseye,
  faChild,
  faBurn,
  faSuitcase,
  faUsers,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp,
  faStar,
  faEdit,
  faHeart,
  faSmile,
  faGem,
  faSun,
  faClock
} from "@fortawesome/free-regular-svg-icons";
import { IMAGES_PREFIX } from "../../../etc/config";

library.add(faIgloo);
export default class Solovyova extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page__container event-page">
        <div
          style={{
            background: `url(${IMAGES_PREFIX}/solo.jpg) 50% 50%/cover no-repeat`
          }}
          className="event-page__top"
        >
          <div className="wrap">
            <h1>Стратегия счастья</h1>
            <p>13 апреля, г. Краснодар</p>
            <a href="https://names.timepad.ru/event/890123/" target="_blank">
              Участвовать
            </a>
          </div>
        </div>
        <div className="event-page__top-slogan">
          <span>Слушай свое сердце и ты найдешь верный путь</span>
        </div>
        <div className="event-page__section1">
          <h2>Что произойдет в результате семинара:</h2>
          <div className="list">
            <div className="list__item">
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>Научишься избавляться от страхов и ограничивающих убеждений</p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faStar} />
              <p>Получишь мотивацию для изменений в жизни </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faEdit} />
              <p>
                Поймешь, что тебя останавливало всё это время, и как это
                преодолеть
              </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faBullseye} />
              <p>
                Научишься контролировать и переключать свое состояние для
                принятия правильных решений
              </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faHeart} />
              <p>
                Научишься наполняться счастьем и удерживать это состояние,
                независимо от событий
              </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faChild} />
              <p>
                Уйдешь наполненным сил и энергией, желанием действовать, не
                откладывая на потом
              </p>
            </div>
          </div>
        </div>
        <div className="event-page__section2">
          <div className="wrap">
            <h2>На этом семинаре</h2>
            <p>
              Мы будем учиться тому, как быть счастливыми. Не ждать этого
              состояния в будущем и не «зависать» в прошлом. Радоваться всем
              ситуациям и обстоятельствам, которые приходят в нашу жизнь. Вместе
              определим, какие чувства, мысли и события тебя мотивируют и как
              этим управлять.
            </p>
          </div>
        </div>
        <div className="event-page__section3">
          <div className="wrap">
            <div className="img">
              <img src={`${IMAGES_PREFIX}/tat.jpg`} />
            </div>
            <div className="info">
              <h3>Спикер</h3>
              <h2>Татьяна Соловьева</h2>
              <p>
                — ученица Тони Роббинса, Фрэнка Пьюселика, Брайна Трейси и др.
                мировых тренеров;
              </p>
              <p>— успешный опыт управления бизнесом более 10 лет;</p>
              <p>— бизнес-тренер «Центра поддержки предпринимательства»;</p>
              <p>
                — основатель и идеолог благотворительного проекта «Живу с
                Культурой» и социального проекта «Живу с Победой»;
              </p>
              <p>— автор популярного планировщика «Здесь и Сейчас»;</p>
              <p>— более 3000 учеников прошедших офлайн и онлайн обучение.</p>
            </div>
          </div>
        </div>
        <div className="event-page__section4">
          <h2>Этот семинар для тех, кто хочет:</h2>
          <div className="list">
            <div className="list__item">
              <FontAwesomeIcon icon={faBurn} />
              <p>Зарядиться энергией и мотивацией</p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faSmile} />
              <p>Проработать страхи и ограничивающие убеждения</p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faGem} />
              <p>Начать действовать вне зависимости от обстоятельств</p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faSun} />
              <p>Входить в ресурсное состояние и оставаться в нем постоянно</p>
            </div>
          </div>
        </div>
        <div className="event-page__section5">
          <h2>Пакеты</h2>
          <div className="list">
            <div className="list__item">
              <h4>Базовый</h4>
              <h3>3 400₽</h3>
              <p>Свободная рассадка</p>
              <p>Пакет участника</p>
              <p>Кофе брейк</p>
              <a href="https://names.timepad.ru/event/890123/">Записаться</a>
            </div>
            <div className="list__item">
              <h4>Премиум</h4>
              <h3>5 400₽</h3>
              <p>Первые ряды</p>
              <p>Еженедельник Татьяны Соловьевой «Здесь и сейчас»</p>
              <p>Пакет участника</p>
              <p>Кофе брейк</p>
              <a href="https://names.timepad.ru/event/890123/">Записаться</a>
            </div>
          </div>
        </div>
        <div className="event-page__section4">
          <h2>Формат обучения</h2>
          <div className="list">
            <div className="list__item">
              <FontAwesomeIcon icon={faClock} />
              <p>
                Восемь часов живого общения с 11:00 до 19:00 с перерывом на обед
              </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faSuitcase} />
              <p>Разбор вопросов и реальных кейсов участников</p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faUsers} />
              <p>
                Работа в группе единомышленников с практическими заданиями и
                упражнениями
              </p>
            </div>
            <div className="list__item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Адрес проведения: ул. Гаврилова 1А </p>
            </div>
          </div>
        </div>
        <div className="event-page__section6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nvcWKQbIUvo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
