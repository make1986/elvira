import React from "react";
import axios from "axios";

import config from "../../../../etc/config";

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.Submit = this.Submit.bind(this);
    this.Change = this.Change.bind(this);
  }
  Change(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  Submit(event) {
    event.preventDefault();
    let { name, email } = this.state;
    if (!name || !email) {
      this.props.addError("Должны быть указаны все поля!");
    } else {
      axios
        .post(`${config.API_PREFIX}/api/addsubscriber`, { name, email })
        .then(data => {
          if (data.status === 200) {
            this.props.addError(`${name}, вы успешно подписались на рассылку!`);
          }
        });
    }
  }
  render() {
    return (
      <div className="subscribe">
        <h4>Получайте новости о предстоящих мероприятиях</h4>
        <form onSubmit={this.Submit}>
          <input
            onChange={this.Change}
            type="text"
            name="name"
            placeholder="Имя"
            value={this.state.name}
          />
          <input
            onChange={this.Change}
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <button type="submit">Подписаться</button>
        </form>
        <p>
          Нажимая "Подписаться", вы соглашаетесь на рассылку о предстоящих
          мероприятиях
        </p>
      </div>
    );
  }
}
