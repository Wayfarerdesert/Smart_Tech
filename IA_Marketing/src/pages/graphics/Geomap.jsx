import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import MAP_JSON from "../../data/map-json.const";

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

export default function Map(props) {
  const chartRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(MAP_JSON[props.chosenKey].url)
      .then((response) => response.json())
      .then((value) => {
        setData(
          ChartGeo.topojson.feature(
            value,
            value.objects[MAP_JSON[props.chosenKey].objectsKey]
            //@ts-ignore
          ).features
        );
      });
  }, [props.chosenKey]);

  return (
    <Chart
      ref={chartRef}
      type="choropleth"
      data={{
        labels: data.map(
          (d) => d.properties[MAP_JSON[props.chosenKey].propertiesKey]
        ),
        datasets: [
          {
            outline: data,
            label: "Countries",
            data: data.map((d) => ({
              feature: d,
              value: Math.random() * 10,
            })),
            // backgroundColor: ["#94BA62", "#59A22F", "#1A830C"]
          },
        ],
      }}
      options={{
        showOutline: true,
        showGraticule: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xy: {
            projection: "equalEarth",
            zoom: 0.9,
          },
          // Hide color scale
          // color: {
          //   display: false
          // }
        },
      }}
    />
  );
}
