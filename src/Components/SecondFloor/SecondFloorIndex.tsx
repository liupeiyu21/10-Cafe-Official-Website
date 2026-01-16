import SecondFloorFirstView from "./SecondFloorFirstView";
import SecondFloorSofa from "./SecondFloorSofa";
import SecondFloorTable from "./SecondFloorTable";
import SecondFloorCounter from "./SecondFloorCounter";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import TopNav from "../Top/TopNav";
import TopSNSLinks from "../Top/TopSNSLinks";

const SecondFloorIndex = () => {
  return (
    <>
      <TopNav />
      <SecondFloorFirstView />
      <Greenbar active="2F" />
      <SecondFloorTable />
      <SecondFloorSofa />
      <SecondFloorCounter />
      <TopSNSLinks />
      <TopFooter />
    </>
  );
};
export default SecondFloorIndex;
