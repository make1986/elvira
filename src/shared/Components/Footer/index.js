import React from "react";

import Subscribe from "./Components/Subscribe";

export default function Footer({ addError }) {
  return (
    <div className="footer">
      <Subscribe addError={addError} />
      <div className="foot">
        <div className="foot__left">
          <p>Names. Люди, которые вдохновляют ®</p>
        </div>
        <div className="foot__right">
          <p>
            По вопросам проведения мероприятий, а так же по вопросам
            сотрудничества, звоните <strong>8 903 410 77 34</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
