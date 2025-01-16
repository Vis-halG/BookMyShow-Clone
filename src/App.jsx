import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SubNavbar from "./Components/SubNavbar/SubNavbar.jsx"; 
import Carousel from "./Components/Carousel/Carousel.jsx";
import RecommendedMovies from "./Components/RecommendedMovies/RecommendedMovies.jsx";
import Stream from "./Components/Stream/Stream.jsx";
import BestOfLive from "./Components/BestOfLive/BestOfLive.jsx";
import Premiere from "./Components/Premiere/Premiere.jsx";
import YourMusic from "./Components/YourMusic/YourMusic.jsx";
import OutdoorEvents from "./Components/OutdoorEvents/OutdoorEvents.jsx";
import LaughterTherapy from "./Components/LaughterTherapy/LaughterTherapy.jsx";
// import PopularEvents from "./Components/PopularEvents/RecommendedMovies.jsx";
// import TheLatestPlay from "./Components/TheLatestPlay/RecommendedMovies.jsx";
// import TopGame from "./Components/TopGame/RecommendedMovies.jsx";
// import ExploreFun from "./Components/ExploreFun/ExploreFun.jsx";
import TrendingSearches from "./Components/TrendingSearches/TrendingSearches.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Social from "./Components/Social/Social.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Carousel />
      <RecommendedMovies />
      <Stream/>
      <BestOfLive/>
      <Premiere/>  
      <YourMusic/>
      <OutdoorEvents/>
      <LaughterTherapy/>
      {/* <PopularEvents/> */}
      {/* <TheLatestPlay/> */}
      {/* <TopGame/> */}
      {/* <ExploreFun/> */}
      <TrendingSearches/>
      
<Footer/>
<Social/>
    </div>
  );
}

export default App;
