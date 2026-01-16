import FreePaper from "./FreePaper";
import Seat from "./Seat";
import FirstFloorFirstView from "./FirstFloorFirstView";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import TopNav from "../Top/TopNav";
import TopSNSLinks from "../Top/TopSNSLinks";
const FirstFloorIndex = () => {
  return (
    <>
      <TopNav />
      <FirstFloorFirstView />
      <Greenbar active="1F" />
      <Seat />
      <FreePaper />
      <TopSNSLinks />
      <TopFooter />
    </>
  );
};
export default FirstFloorIndex;
