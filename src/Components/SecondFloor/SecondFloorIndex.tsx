import SecondFloorFirstView from "./SecondFloorFirstView";
import SecondFloorSofa from "./SecondFloorSofa";
import SecondFloorTable from "./SecondFloorTable";
import SecondFloorCounter from "./SecondFloorCounter";
import Greenbar from "../Greenbar";
import TopFooter from "../Top/TopFooter";
import TopNav from "../Top/TopNav";

const SecondFloorIndex = () => {
  return (
    <>
      <TopNav />
      <SecondFloorFirstView />
      <Greenbar active="2F" />
      <SecondFloorTable />
      <SecondFloorSofa />
      <SecondFloorCounter />
      <TopFooter />
    </>
  );
};
export default SecondFloorIndex;
