import TopFirstView from "./TopFirstView";
import TopFooter from "./TopFooter";
import FloorSection from "./FloorSection";
import TopMenuSection from "./TopMenuSection";
import TopSeasonalSwiper from "./TopSeasonalSwiper";
import TopEventSection from "./TopEventSection";


const TopIndex = () => {
    return (
        <>
            <TopFirstView />
            <FloorSection />
            <TopMenuSection />
            <TopSeasonalSwiper />
            <TopEventSection />
            <TopFooter />
            
        </>
    );
}

export default TopIndex;