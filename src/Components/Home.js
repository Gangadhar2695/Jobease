import Need from "../Components/Need/Need.js";
import Categories from "./Categories/Categories.js";
import Landingpage from "../Components/Landingpage/Landingpage.js";
import ScrolledBanner from "../Components/Scrolledbanner/ScrolledBanner.js";
import Sorting from "../Components/Sorting/Sorting.js";
import Follow from "../Components/Follow/Follow.js";

import Jobs from "./Jobs/jobs.js";

const Home = () => {

  return (

    <>
    
      <div className="home">
        <Landingpage />
        <Categories />
        <ScrolledBanner />
        <Sorting />
        <Follow />
        <Jobs />
        <Need />
      </div>

    </>
  );
}

export default Home;