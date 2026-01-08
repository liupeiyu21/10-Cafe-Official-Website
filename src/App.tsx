import { Routes, Route } from "react-router-dom";
import FirstFloorIndex from "./Components/FirstFloor/FirstFloorIndex";

import "./App.css";
import TopIndex from "./Components/Top/TopIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/firstfloor" element={<FirstFloorIndex />}></Route>
        <Route path="/" element={<TopIndex />}></Route>
      </Routes>
    </>
  );
}

export default App;
