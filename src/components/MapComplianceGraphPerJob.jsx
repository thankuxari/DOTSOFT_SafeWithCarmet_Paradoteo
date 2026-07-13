import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./mapcompliancegrapperjob.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels,
);

export default function MapComplianceGraphPerJob() {
  const data = {
    labels: [
      "Ηλεκτρολόγος",
      "Χειριστής κλαρκ",
      "Συγκολλητής",
      "Τεχνικός",
      "Χειριστής γερανού",
    ],
    datasets: [
      {
        data: [78, 64, 91, 86, 55],
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          if (value >= 80) return "#27ae60";
          if (value >= 60) return "#d35400";
          return "#c0392b";
        },
        borderWidth: 0,
        borderRadius: 3,
        borderSkipped: false,
        barThickness: 24,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        align: "end",
        anchor: "end",
        formatter: (value) => `${value}%`,
        font: {
          family: "Inter, sans-serif",
          weight: "700",
          size: 12,
        },
        color: (context) => {
          const value = context.dataset.data[context.dataIndex];
          if (value >= 80) return "#27ae60";
          if (value >= 60) return "#d35400";
          return "#c0392b";
        },
      },
    },
    scales: {
      x: {
        display: false,
        max: 110,
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#7f8c8d",
          font: {
            family: "Inter, sans-serif",
            size: 13,
          },
        },
      },
    },
  };

  return (
    <div className="role-compliance-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}
