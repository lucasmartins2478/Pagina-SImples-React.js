import React from "react";
import imgCoder from "../../assets/images/undraw_programming_re_kg9v.svg";
import "./style.css";

export class Sections extends React.Component {
  render() {
    return (
      <section>
        <div className="text-info">
          <h1>FRONT END</h1>
          <h2>DEVELOPMENT</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            sunt, id voluptatibus aut ratione temporibus, magnam excepturi
            obcaecati earum autem praesentium distinctio eligendi expedita eum a
            error veniam ipsam illo.
          </p>
          <button className="get-started-btn">Get started now!</button>
        </div>
        <div className="image">
          <img src={imgCoder} alt="" />
        </div>
      </section>
    );
  }
}
