import About from "./About";
import Manual from "./Manual";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import Price from "./Price";
import CWSFirstView from "./CWSFirstView";
import TopNav from "../Top/TopNav";

const CoworkingSpaceIndex = () => {
  return (
    <>
      <TopNav />
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
