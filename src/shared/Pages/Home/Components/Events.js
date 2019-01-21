import React from "react";

import OneEvent from "./OneEvent";

const speakers = [
  {
    id: 0,
    name: "Татьяна Соловьева",
    img: "solov.jpg",
    city: "г. Краснодар",
    date: "11 марта",
    area:
      "Сертифицированный тренер по программе Тони Роббинса «Академия лидерства», бизнесвумен, основатель благотворительного фонда, специалист по психологии лидерства и НЛП.",
    themes: [
      {
        name: "Стратегия счастья",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      }
    ],
    desc:
      "Мы будем учиться тому, как быть счастливыми. Не ждать этого состояния в будущем и не «зависать» в прошлом. Радоваться всем ситуациям и обстоятельствам, которые приходят в нашу жизнь. Вместе определим, какие чувства, мысли и события тебя мотивируют и как этим управлять.",
    link: "/solotatiana"
  },
  {
    id: 1,
    name: "Валентина Паевская",
    img: "paevs.jpg",
    city: "г. Краснодар",
    date: "11-14 марта",
    area:
      'Практикующий детский психолог, автор семинаров для родителей и проекта #УзнайКакЛучшеДляРебенка. Автор книг "Я плохая мама? Как воспитать ребенка, не имея на это времени" и "Детская ревность. Особенности воспитания нескольких детей в семье".',
    themes: [
      {
        name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      },
      {
        name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      },
      {
        name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      },
      {
        name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      },
      {
        name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
        date: "11 марта",
        address: "ул. Красная, 25 (гостиница Какаято)"
      }
    ],
    desc:
      "Простые и доходчивые семинары о воспитании детей. Вы поймете, что быть родителем легко. Быть хорошей мамой – не значит отказаться от собственных желаний и стремлений. Вы сможете успешно совмещать все свои роли. Знания, полученные на встрече, легко применимы в жизни и дают результат.",
    link: "/paevskaya"
  }
];

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: "none"
    };
  }
  render() {
    const { opened } = this.state;
    return (
      <div className="home-page__events" id="events">
        {speakers.map(speak => <OneEvent key={speak.id} data={speak} />)}
      </div>
    );
  }
}
