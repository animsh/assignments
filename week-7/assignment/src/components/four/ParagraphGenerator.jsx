import React, { useState } from "react";

const ParagraphGenerator = () => {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];

  const [inputValue, setInputValue] = useState("");
  const [paragraph, setParagraph] = useState("");

  const generateParagraph = (numWords) => {
    let result = [];
    for (let i = 0; i < numWords; i++) {
      result.push(words[i % words.length]);
    }
    setParagraph(result.join(" ") + ".");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numWords = parseInt(inputValue, 10);
    if (!isNaN(numWords) && numWords > 0) {
      generateParagraph(numWords);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div style={{ minWidth: "1080px" }}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: "8px", minWidth: "320px", marginRight: "16px" }}
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Generate</button>
      </form>
      <p>{paragraph}</p>
    </div>
  );
};

export default ParagraphGenerator;
