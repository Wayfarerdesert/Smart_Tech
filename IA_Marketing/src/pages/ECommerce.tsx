import CardFour from "../components/CardFour.js";
import CardOne from "../components/CardOne.js";
import CardThree from "../components/CardThree.js";
import CardTwo from "../components/CardTwo.js";
import ChartOne from "../components/ChartOne.js";
import ChartThree from "../components/ChartThree.js";
import ChartTwo from "../components/ChartTwo.js";
import MapOne from "../components/MapOne.jsx";

import ChartFour from "../components/ChartFour.js";

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-5 md:gap-6 2xl:gap-7.5">
        <ChartFour />
      </div>

      <div className="mt-4 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
      </div>
      <div className="mt-4 grid grid-cols-9 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <ChartThree />
      </div>
      <div className="mt-5 md:gap-6 2xl:gap-7.5">
        <MapOne />
      </div>
    </>
  );
};

export default ECommerce;
