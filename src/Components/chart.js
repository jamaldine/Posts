import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
const Chart = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <>
      {/*<Doughnut
        data={state}
        width={10}
        height={5}
        options={{
            maintainAspectRatio: false,
          title: {
            display: true,
            text: "Doughnut chart",
            fontSize: 15,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
    />*/}
      <Pie
        data={state}
        width={300}
        height={250}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "STATISTIC of posts by number of comments",
            fontSize: 15,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
};

export default Chart;
