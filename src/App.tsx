import { Routes, Route } from "react-router-dom";
import FirstFloorIndex from "./Components/FirstFloor/FirstFloorIndex";
import SecondFloorIndex from "./Components/SecondFloor/SecondFloorIndex";
import CoworkingSpaceIndex from "./Components/CoworkingSpace/CoworkingSpaceIndex";
import "./App.css";
import TopIndex from "./Components/Top/TopIndex";
import TopNewInformation from "./Components/Top/TopNewsDetail";
import NewsList from "./Components/Top/NewsList";
import ScrollToTop from "./Components/Common/ScrollToTop";
import MenuPage from "./Components/Top/Menu/MenuPageIndex";
import EventsPage from "./Components/Top/EventsPage";
import EventDetailPage from "./Components/Top/EventDetailPage";
import CafeBeansEcIndex from "./Components/CafeBeansEC/CafeBeansEcIndex";
import RecruitIndex from "./Components/Recruit/RecruitIndex";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopIndex />}></Route>
        <Route path="/firstfloor" element={<FirstFloorIndex />}></Route>
        <Route path="/secondfloor" element={<SecondFloorIndex />}></Route>
        <Route path="/coworkingspace" element={<CoworkingSpaceIndex />}></Route>
        <Route path="/news/:slug" element={<TopNewInformation />}></Route>
        <Route path="/newslist" element={<NewsList />}></Route>
        <Route path="/menu/:category" element={<MenuPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />
        <Route path="/cafebeansexindex" element={<CafeBeansEcIndex />}></Route>
        <Route path="/recruitindex" element={<RecruitIndex />}></Route>
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
