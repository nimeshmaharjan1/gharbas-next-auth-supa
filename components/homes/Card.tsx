import React from "react";
import { Home } from "../../lib/interfaces";
interface Props {
  home: Home;
}
const Card: React.FC<Props> = ({ home }) => {
  return (
    <div className="card lg:w-96 card-compact bg-base-100 shadow-lg drop-shadow-xl">
      <figure>
        <img src={home.image} alt={home.title} />
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
