import React from "react";
import Movie from "./Movie";
import PopUp from "./PopUp";

export default function Movie_after_filter(props) {
  return (
    <div className="Movie-list row ">
      {props.MovieList.map(film => (
        <Movie key={film.id} Film={film} />
      ))}

      <PopUp
        Modeltitle={props.Modeltitle} 
        Modelyear={props.Modelyear}
        Modelrating={props.Modelrating}
        titleValue={props.titleValue} // we are exporting the function to a child PopUp
        yearValue={props.yearValue}
        ratingValue={props.ratingValue}
        addMovie={props.addMovie}
      />
    </div>
  );
}
