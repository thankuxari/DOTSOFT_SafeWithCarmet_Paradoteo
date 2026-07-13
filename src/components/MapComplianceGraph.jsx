import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import "./mapcompliancegraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

export default function MapComplianceGraph() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        min: 50,
        max: 100,
        ticks: {
          stepSize: 50,
          callback: function (value) {
            return value + "%";
          },
          color: "#7f8c8d",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const data = {
    labels: Array(20).fill(""),
    datasets: [
      {
        data: [
          58, 65, 60, 54, 62, 58, 66, 64, 71, 68, 74, 71, 76, 73, 80, 78, 83,
          81, 84, 86,
        ],
        borderColor: "#27ae60",
        borderWidth: 2.5,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 5,

        fill: true,
        backgroundColor: "rgba(39, 174, 96, 0.08)",
      },
    ],
  };

  return (
    <div className="map-compliance-graph">
      <Line options={options} data={data} />
    </div>
  );
}
