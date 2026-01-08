import About from "./About";
import Manual from "./Manual";
import FirstFloorFirstView from "../FirstFloor/FirstFloorFirstView";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import Price from "./Price";
const CoworkingSpaceIndex = () => {
  return (
    <>
      <FirstFloorFirstView />
      <Greenbar active="CWS" />
      <About />
      <Price />
      <Manual />
      <TopFooter />
    </>
  );
};
export default CoworkingSpaceIndex;
