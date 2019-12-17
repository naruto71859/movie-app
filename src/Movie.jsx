import React from "react";
import Rating from "./Rating";
//Film: is an object that contain n properties called ....
export default function Movie({ Film = Film  }) {
  // destroying methode react   le 2eme Film est l'objet par defaut

  const {
    Title = "No Title added ",
    link = "http://tny.im/kdS",
    Year = "",
    rating = 0
  } = Film;
  // this is an exemple of those line in more easiest way const {exp} = exp
  // creation d'un objet qui contien les meme props que Film q'on va l'utilise comme objet par defaut
  // si l'utilisateur de fait pas entrer le titre ou l'url d'un film



  // ★ ☆


  return (
    <div className="col-4">
      <div
        className="card border-secondary mb-3 col-4"
        style={{ maxWidth: "28rem", height: "45rem" }}
      >
        <div className="card-header row bg-info"> 
        
        <Rating
            rate={rating}
        />
        
        </div>

        <div className="card-body text-secondary">
          <img
            src={link} // we could write props.Film.link if we didnt write the declaration above in line 3
            alt="200*200"
            width="100%"
            height="550px"
          />
          <h5 className="card-title mt-3 text-center">{Title}</h5>
          <p className="card-text">Date of release {Year}</p>
        </div>
      </div>



    </div>
  );
}
