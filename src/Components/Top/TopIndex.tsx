import TopFirstView from "./TopFirstView";
import TopFooter from "./TopFooter";
import FloorSection from "./FloorSection";
import TopMenuSection from "./TopMenuSection";
import TopSeasonalSwiper from "./TopSeasonalSwiper";


const TopIndex = () => {
    return (
        <>
            <TopFirstView />
            <FloorSection />
            <TopMenuSection />
            <TopSeasonalSwiper />
            <TopFooter />
            
        </>
    );
}

export default TopIndex;