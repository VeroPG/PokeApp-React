import { useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onSearch, clearList }) => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    const temporizador = setTimeout(() => {
      if (inputValue !== previousInputValue.current) {
        onSearch(inputValue);
        previousInputValue.current = inputValue;
      }
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, [inputValue, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h1>Search Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="pokemon-name"
          placeholder="Search Pokemon"
          label="Name"
          className="inputSearch"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />

        <button type="submit">Send</button>
        <button onClick={clearList}>Reset</button>
      </form>
    </>
  );
};

export default Form;
