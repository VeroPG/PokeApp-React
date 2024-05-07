import {Routes, Route } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import Details from "./Details";
import Home from "./Home";
import New from "./New";


const Main = () => {
  return (
    <>
      <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/pokemon/:id" element={<Details />} />
            <Route path="/search" element={<SearchComponent />} />
          </Routes>
      </main>
    </>
  );
};

export default Main;
