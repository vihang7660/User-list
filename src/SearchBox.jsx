import { useState } from "react";

export default function SearchBox({ setList, users }) {
  const [inputText, setInputText] = useState("");
  function handleChange(e) {
    setInputText(e.target.value);
    setList(
      users.filter((user) =>
        user.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus={true}
        onChange={handleChange}
        value={inputText}
        type="text"
      />
    </form>
  );
}
