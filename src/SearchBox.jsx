import { useState } from "react";

export default function SearchBox({ handleSearch }) {
  const [inputText, setInputText] = useState("");
  function handleChange(e) {
    setInputText(e.target.value);
    handleSearch(e.target.value);
  }

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Enter user's first name"
        autoFocus={true}
        onChange={handleChange}
        value={inputText}
        type="text"
      />
    </form>
  );
}
