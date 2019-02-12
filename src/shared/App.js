import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import { IMAGES_PREFIX, API_PREFIX } from "../etc/config";

import P404 from "./Pages/404";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import DiscBut from "./Components/DiscBut";
import Discount from "./Components/Discount";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssload: false,
      error: "",
      media: "",
      burger: false,
      discount: false
    };
    this.addError = this.addError.bind(this);
    this.HeaderWithProps = this.HeaderWithProps.bind(this);
    this.FooterWithProps = this.FooterWithProps.bind(this);
    this.defineDevice = this.defineDevice.bind(this);
    this.openBurger = this.openBurger.bind(this);
    this.openDiscount = this.openDiscount.bind(this);
  }
  componentDidMount() {
    this.setState({ cssload: true });
    this.defineDevice();
    window.addEventListener("resize", this.defineDevice);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.defineDevice);
  }
  defineDevice() {
    let { clientWidth } = document.body;
    this.setState({ media: clientWidth });
  }
  addError(err) {
    this.setState({ error: err }, function() {
      if (this.state.error) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
  }

  HeaderWithProps(props) {
    return (
      <Header
        {...props}
        addError={this.addError}
        media={this.state.media}
        openBurger={this.openBurger}
        image={IMAGES_PREFIX}
      />
    );
  }
  FooterWithProps(props) {
    return <Footer {...props} addError={this.addError} image={IMAGES_PREFIX} />;
  }
  openBurger() {
    this.setState({ burger: !this.state.burger });
  }

  openDiscount() {
    this.setState({ discount: !this.state.discount }, function() {
      if (this.state.discount) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
  }

  render() {
    const { error, cssload, media, burger, discount } = this.state;
    const { addError, openBurger, openDiscount } = this;
    return (
      <div className="page">
        <Route component={this.HeaderWithProps} />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => (
                <C addError={addError} {...props} {...rest} media={media} />
              )}
            />
          ))}
          <Route render={props => <P404 {...props} />} />
        </Switch>
        <Route component={this.FooterWithProps} />
        <DiscBut openDiscount={openDiscount} />
        {discount ? (
          <Discount addError={addError} openDiscount={openDiscount} />
        ) : (
          ""
        )}
        {error ? <Error ok={addError} error={error} /> : ""}
        {!cssload ? (
          <div
            style={{
              backgroundColor: "#fff",
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              height: "100vh",
              zIndex: "1000"
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
