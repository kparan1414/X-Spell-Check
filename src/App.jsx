import { useState } from "react";

const customDictionary = {
  teh: "the",
  fot: "for",
  wrok: "work",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
    // algo for suggested text
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const firstCorrection = correctedWords.find((correctedWord, idx) => {
      return correctedWord !== words[idx];
    });
    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        cols="40"
        rows="5"
        value={text}
        onChange={handleChange}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
