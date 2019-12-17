import React from "react";
import Rating from "./Rating";

export default function RatingFilter(props) {
  return (
    <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <Rating 
      onChangeRating={(Newlist ) =>  props.newList(Newlist)}   // information passe du child vers le parent à travers des function avec des paramétre  
      rate={props.minRating} />
    </div>
  );
}
