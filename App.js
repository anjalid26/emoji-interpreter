import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning face",
  "☺️": "Smiling face",
  "🥲": "Smiling face with tear",
  "😅": "Grinning face with sweat",
  "🤣": "Rolling on the floor laughing",
  "😉": "Winking face",
  "🤩": "Star struck",
  "😘": "Kissing face",
  "😋": "Face savouring food",
  "🤗": "Hugging face",
  "🤭": "Blushing face",
  "🤔": "Thinking face",
  "🤫": "Shushing face",
  "😑": "Expressionless face",
  "😏": "Smirking face",
  "😒": "Unamused face",
  "🤥": "Lying face",
  "😌": "Relieved face",
  "😴": "Sleeping face",
  "🤧": "Sneezing face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }

    setMeaning(meaning);
    // console.log(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    // console.log(meaning);
  }

  return (
    <div className="App">
      <h1 className="h1"> Emoji Interpreter! </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3 className="h3"> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            className="span"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
