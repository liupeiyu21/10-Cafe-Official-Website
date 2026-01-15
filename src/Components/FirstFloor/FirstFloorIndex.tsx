import FreePaper from "./FreePaper";
import Seat from "./Seat";
import FirstFloorFirstView from "./FirstFloorFirstView";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import TopNav from "../Top/TopNav";
const FirstFloorIndex = () => {
  return (
    <>
      <TopNav />
      <FirstFloorFirstView />
      <Greenbar active="1F" />
      <Seat />
      <FreePaper />
      <TopFooter />
    </>
  );
};
export default FirstFloorIndex;
