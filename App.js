import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Learn Javascript the hard way", rating: "4/5" },
    { name: "The JavaScript: The good parts", rating: "4.8/5" },
    { name: "Head First : JavaScript", rating: "4.9/5" }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      name: "The Fountainhead",
      rating: "4.7/5"
    },
    {
      name: "Animal Farm",
      rating: "4.9/5"
    },
    {
      name: "To kill a Mockingbird",
      rating: "5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "4.8/5"
    },
    {
      name: "The Magic of Thinking Big",
      rating: "4.9/5"
    },
    {
      name: "Thinking Fast and Slow",
      rating: "4.6/5"
    }
  ],
  Autobiography: [
    {
      name: "My experiments with Truth",
      rating: "4.5/5"
    },
    {
      name: "Wings of Fire",
      rating: "4/5"
    },
    {
      name: "Playing it my Way",
      rating: "4.5/5"
    },
    {
      name: "The Long Walk to Freedom",
      rating: "4.9"
    },
    {
      name: "This is Going to Hurt",
      rating: "4.8"
    }
  ],
  Nonfiction: [
    {
      name: "The Dairy of a Young Girl",
      rating: "4.1/5"
    },
    {
      name: "The Warmth of Other Suns",
      rating: "4.7"
    },
    {
      name: "Freakonomics",
      rating: "4.5"
    },
    {
      name: "The Warmth of the other Suns",
      rating: "4.8"
    },
    {
      name: "The Art of War",
      rating: "4.6"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Great Books </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
