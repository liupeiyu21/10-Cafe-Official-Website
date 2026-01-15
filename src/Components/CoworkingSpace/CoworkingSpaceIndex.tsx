import About from "./About";
import Manual from "./Manual";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import Price from "./Price";
import CWSFirstView from "./CWSFirstView";

const CoworkingSpaceIndex = () => {
  return (
    <>

      <CWSFirstView />
      <Greenbar active="CWS" />
      <About />
      <Price />
      <Manual />
      <TopFooter />
    </>
  );
};
export default CoworkingSpaceIndex;
