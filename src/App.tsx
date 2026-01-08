import { Routes, Route } from "react-router-dom";
import FirstFloorIndex from "./Components/FirstFloor/FirstFloorIndex";
import SecondFloorIndex from "./Components/SecondFloor/SecondFloorIndex";
import "./App.css";
import TopIndex from "./Components/Top/TopIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopIndex />}></Route>
        <Route path="/firstfloor" element={<FirstFloorIndex />}></Route>
        <Route path="/secondfloor" element={<SecondFloorIndex />}></Route>
      </Routes>
    </>
  );
}

export default App;
