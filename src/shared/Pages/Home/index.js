import React from "react";

import TopSection from "./Components/TopSection";
import Events from "./Components/Events";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page__container home-page">
        <Events />
      </div>
    );
  }
}
