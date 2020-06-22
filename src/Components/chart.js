import React, { useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import Modal from "./modal";
const Chart = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [zoom, setZoom] = useState(false);
  const doughnut = (event) => {
    setZoom(true);
    setAnchorEl("event.currentTarget");
  };

  const state = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
        data: [365, 59, 80],
      },
    ],
  };

  return (
    <>
      {zoom && (
        <Modal handleCloseModal={handleClose} anchorElModal={anchorEl}>
          <Doughnut
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
          />
        </Modal>
      )}
      <Pie
        onElementsClick={doughnut}
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
            display: false,
            position: "right",
          },
        }}
      />
    </>
  );
};

export default Chart;
