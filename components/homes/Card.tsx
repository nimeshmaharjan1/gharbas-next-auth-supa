import React from "react";
import { Home } from "../../lib/interfaces";
interface Props {
  home: Home;
}
const Card: React.FC<Props> = ({ home }) => {
  console.log(home);
  return (
    <div className="card bg-base-100 shadow-lg drop-shadow-xl">
      <figure>
        <img src={home.image} alt={home.title} style={{ height: "262px" }} />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h1>{home.title}</h1>
        </div>
        <div className="rating rating-lg rating-half">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-orange-400"
          />
          <input
            type="radio"
            name="rating-1"
            className=" mask mask-star bg-orange-400"
          />
        </div>
        <p>Can accomodate {home.maxGuests} guests</p>
        <p>with {home.beds} bedrooms</p>
        <p className="text-white text-lg">
          <span className="font-bold">${home.price}</span> per night
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
