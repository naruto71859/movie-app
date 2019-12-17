import "./App.css";

import React, { Component } from "react";
import Movie from "./Movie";
import Movie_after_filter from "./Movie_after_filter";
import PopUp from "./PopUp";
import RatingFilter from "./RatingFilter";
import NameFilter from "./NameFilter";

export default class App extends Component {
  state = {
    Film: [
      {
        Title: "How It Ends",
        Year: " 2018",
        id: 1,
        rating: 1,
        selected: false
      },
      {
        Title: "Taken 2",
        Year: " 2012",
        link: "https://tinyurl.com/wa7m6ct",
        id: 2,
        rating: 4,
        selected: false
      },
      {
        Title: "Jumanji : Bienvenue dans la jungle",
        Year: " 2017",
        link: "https://tinyurl.com/t8gbzdn",
        id: 3,
        rating: 3,
        selected: false
      },
      {
        Title: "X-Men: Days of Future Past",
        Year: " 2014",
        link: "https://tinyurl.com/wzo9kb4",
        id: 4,
        rating: 3,
        selected: false
      },
      {
        Title: "Joker",
        Year: " 2019",
        link: "https://tinyurl.com/u4pr43p",
        id: 5,
        rating: 5,
        selected: false
      },
      {
        Title: "showshank-Redumption",
        Year: " 1994",
        link: "https://shorturl.at/xFIKP",
        id: 6,
        rating: 5,
        selected: false
      }
    ],
    Modeltitle: "",
    Modelyear: "",
    Modelrating: 0,

    minRating: 0,

    searchValue: ""
  };

  addMovie = event => {
    event.preventDefault();
    this.setState({ minRating: 0 });
    let x = this.state.Film.length + 1;
    this.setState({
      Film: this.state.Film.concat({
        id: x,
        slected: false,
        Title: this.state.Modeltitle,
        Year: this.state.Modelyear,
        rating: this.state.Modelrating
      })
    });

    this.setState({
      Modeltitle: "",
      Modelyear: "",
      Modelrating: ""
    });
  };

  titleValue = event => {
    // this finction is using value of the input from the child because the use of event.target.value
    this.setState({ Modeltitle: event.target.value });
    console.log(this.state.Modeltitle);
  };

  yearValue = event => {

    this.setState({ Modelyear: event.target.value });
    console.log(this.state.Modelyear);
  };

  ratingValue = event => {
    event.preventDefault();
    this.setState({ Modelrating: event.target.value });
    console.log(this.state.Modelrating);
  };

  moviesTodisplay = () => {
    return this.state.Film.filter(
      el =>
        el.rating >= this.state.minRating && // executing the filter && the search in the same time
        el.Title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
  };
  onTextchange = text => {
    this.setState({ searchValue: text });
    console.log(text);
  };
  render() {
    return (
      <div className="">
        <div className=" d-flex justify-content-around m-5 ">
          <NameFilter
            onTextchange={this.onTextchange}
            searchValue={this.state.searchValue}
          />
          <RatingFilter
            minRating={this.state.minRating}
            newList={newrating => this.setState({ minRating: newrating })} // l'info est arrivée au parent (main component) ou se situt le state grace à des function
          />
        </div>
        <div className="m-5 ">
          {
            <Movie_after_filter
              MovieList={this.moviesTodisplay()} //  we are exporting the
              Modeltitle={this.state.Modeltitle} // we are exporting a variable in the state
              Modelyear={this.state.Modelyear}
              Modelrating={this.state.Modelrating}
              titleValue={this.titleValue} // we are exporting the function to a child Movie_after_filter
              yearValue={this.yearValue}
              ratingValue={this.ratingValue}
              addMovie={this.addMovie}
            />
          }
        </div>
      </div>
    );
  }
}
