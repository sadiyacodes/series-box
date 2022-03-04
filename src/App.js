import './App.css';
import React, { useState } from "react";


var outputs = {
  Comedy: [
    {
      title: "GILMORE GIRLS",
      genre: "Genre : COMEDY | DRAMA ",
      year: "2000-2007",
      rating: "3.5/5"
      // creator: "Amy Sherman Palladino"
    },
    {
      title: "HIMYM",
      genre: "Genre : COMEDY | DRAMA | SITCOM ",
      rating: "4/5",
      year: "2005-2012"
      // creator: "Created by : Carter Bays, Craig Thomas"
    },
    {
      title: "FRIENDS",
      genre: "Genre : SITCOM",
      rating: "3.5/5",
      year: "1994-2004"
      // creator: "Created by : Kevin S Bright"
    }
  ],

  Thriller: [
    {
      title: "THE WALKING DEAD",
      genre: "Genre : DRAMA | HORROR | THRILLER",
      year: "2010-2022",
      rating: "4/5"
      // creator: "Created by : Robert Kirkman"
    },
    {
      title: "DARK",
      genre: "Genre : CRIME | DRAMA | MYSTERY",
      year: "2017-2020",
      rating: "4.5/5"
      // creator: "Created by : Baran Bo Odar"
    },
    {
      title: "La Casa De Papel",
      genre: "Genre : ACTION | CRIME | THRILLER",
      year: "2017-2021",
      rating: "4/5"
    }
  ],
  Drama: [
    {
      title: "THIS IS US",
      genre: "Genre : DRAMA | HEARTFELT",
      year: "2010-2022",
      rating: "3.5/5"
      // creator: "Created by : Robert Kirkman"
    },
    {
      title: "GREYS' ANATOMY",
      genre: "Genre : DRAMA | INSPIRING ",
      year: "2017-2020",
      rating: "3/5"
      // creator: "Created by : Baran Bo Odar"
    }
  ]
};
const arr = Object.keys(outputs);
export default function App() {
  const [showlist, setList] = useState([]);

  function inputHandler(cat) {
    var showlist = outputs[cat];
    setList(showlist);
  }
  return (
    <div className="App">
      <h1
        style={{
          padding: "1rem",
          fontFamily: "Roboto",
          color: "#E50914"
        }}
      >
        My Series Recommendations
      </h1>
      <hr />

      <div
        style={{
          // fontFamily: "'Noto Serif', serif",
          marginBottom: "20px",
          marginTop: "10px"
        }}
      >
        Click on the below genres to know my current top 3.
      </div>
      <div id="genre-selector">
        {arr.map((cat, index) => {
          return (
            <span id="btn-gaps">
              <button
                className="my-btn"
                key={index}
                onClick={() => inputHandler(cat)}
              >
                {cat}
              </button>{" "}
            </span>
          );
        })}
      </div>

      <div style={{ marginTop: "50px" }}>
        <ul>
          {showlist.map((shows) => (
            <div key={shows.title}>
              <li key={shows.title}>
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontSize: "25px"
                  }}
                >
                  {" "}
                  {shows.title}{" "}
                </h3>

                <div id="content">
                  <div style={{ textAlign: "left", marginTop: "0.2rem" }}>
                    {" "}
                  </div>
                  <div style={{ textAlign: "right", marginTop: "0.2rem" }}>
                    {" "}
                    {shows.genre}{" "}
                  </div>
                  <div style={{ textAlign: "right", marginTop: "0.2rem" }}>
                    {" "}
                    {shows.year}{" "}
                  </div>
                  <div style={{ textAlign: "right", marginTop: "0.2rem" }}>
                    {" "}
                    {shows.creator}{" "}
                  </div>
                  <div style={{ textAlign: "right", marginTop: "0.2rem" }}>
                    My Rating{" "}
                    <span className="my-rating"> {shows.rating} </span>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
