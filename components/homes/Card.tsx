import React from "react";
import { Home } from "../../lib/interfaces";
interface Props {
  home: Home;
}
const Card: React.FC<Props> = ({ home }) => {
  return (
    <div className="card bg-base-100 shadow-lg drop-shadow-xl">
      <figure>
        <img src={home.image} alt={home.title} style={{ height: "262px" }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{home.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
