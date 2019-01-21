import React from "react";

export default function Error({ error, ok }) {
  return (
    <div className="error">
      <div>
        <p>{error}</p>
        <div onClick={() => ok("")} className="button">
          Ок
        </div>
      </div>
    </div>
  );
}
