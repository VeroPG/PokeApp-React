import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import  "./styles/styles.scss"
import Footer from "./components/Footer";
import { PokeContext } from "./context/PokeContext";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <BrowserRouter>
        <PokeContext.Provider value={{ pokemons, setPokemons }}>
          <Header />
          <Main />
          <Footer />
        </PokeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
