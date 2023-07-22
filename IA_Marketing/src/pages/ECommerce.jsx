import CardFour from "../components/CardFour";
import CardOne from "../components/CardOne";
import CardThree from "../components/CardThree";
import CardTwo from "../components/CardTwo";

import PieChart from "./graphics/Piechart";
import DoughnutChart from "./graphics/DoughnutChart";
import RadarChart from "./graphics/RadarChart";
import BarChart from "./graphics/BarChart";
import BarChartII from "./graphics/BarChartII";
import AreaChart from "./graphics/AreaChart";
import GroupedBar from "./graphics/GroupedBar";
import ScatterChart from "./graphics/ScatterChart";
import BubbleChart from "./graphics/BubbleChart";

// Elementos importados para el mapa
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend
} from "chart.js";
import Map from "./graphics/Geomap";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);
// Fin de Elementos importados para el mapa


const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-3 md:gap-6 2xl:gap-7.5">
        {/* <ChartFour /> */}
        <BarChart />
      </div>

      <div className="mt-3 md:gap-6 2xl:gap-7.5">
        <BarChartII />
      </div>

      <div className="mt-3 md:gap-6 2xl:gap-7.5">
        <AreaChart />
      </div>

      <div className="mt-3 grid grid-cols-10 gap-3 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <PieChart />
        <DoughnutChart />
        <RadarChart />
        <GroupedBar />
      </div>

      <div className="mt-3 md:gap-6 2xl:gap-7.5">
        <ScatterChart />
      </div>

      <div className="mt-3 md:gap-6 2xl:gap-7.5">
        <BubbleChart />
      </div>

      <div className="text-center p-10 border border-solid mt-3 bg-white rounded-xl w-full h-full">
        <Map chosenKey="world"/>
      </div>
    </>
  );
};

export default ECommerce;
