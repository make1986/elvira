import React from "react";
import axios from "axios";
import config from "../../../etc/config";

class Discount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submit(event) {
    event.preventDefault();
    let { name, email } = this.state;
    let err = [];
    if (!name || !email) {
      this.props.addError("Должны быть указаны все поля!");
    } else {
      axios
        .post(`${config.API_PREFIX}/api/addsubscriber`, { name, email })
        .then(data => {
          if (data.status === 200) {
            this.props.addError(
              `${name}, вы успешно подписались на рассылку! Промокод отправлен на ваш email адрес.`
            );
            this.props.openDiscount();
          }
        });
    }
  }
  render() {
    return (
      <div className="discount">
        <form onSubmit={this.submit}>
          <h2>
            Получите скидку 10% на семинар "Стратегия счастья" за подписку.
          </h2>
          <input
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Имя"
            onChange={this.change}
          />
          <input
            value={this.state.email}
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.change}
          />
          <button type="submit">Подписаться</button>
        </form>
        <span onClick={this.props.openDiscount}>×</span>
      </div>
    );
  }
}

export default Discount;
