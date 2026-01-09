import TopFirstView from "./TopFirstView";
import TopFooter from "./TopFooter";
import FloorSection from "./FloorSection";
import TopMenuSection from "./TopMenuSection";
import TopSeasonalSwiper from "./TopSeasonalSwiper";
import TopEventSection from "./TopEventSection";
import TopNews from "./TopNews";


const TopIndex = () => {
    return (
        <>
            <TopFirstView />
            <TopNews />
            <FloorSection />
            <TopMenuSection />
            <TopSeasonalSwiper />
            <TopEventSection />
            <TopFooter />
            
        </>
    );
}

export default TopIndex;