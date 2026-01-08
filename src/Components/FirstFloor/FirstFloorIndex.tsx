import FreePaper from "./FreePaper";
import Seat from "./Seat";
import FirstFloorFirstView from "./FirstFloorFirstView";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
const FirstFloorIndex = () => {
  return (
    <>
      <FirstFloorFirstView />
      <Greenbar active="1F" />
      <Seat />
      <FreePaper />
      <TopFooter />
    </>
  );
};
export default FirstFloorIndex;
