import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import "./biometricsgraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export default function BiometricsGraph() {
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
        min: 40,
        max: 120,
        ticks: {
          display: false,
        },
        grid: {
          display: true,
          color: "rgba(209, 219, 229, 0.3)",
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
        },
      },
    },
  };

  const data = {
    labels: Array(15).fill(""),
    datasets: [
      {
        data: [70, 72, 75, 71, 68, 76, 82, 74, 66, 75, 80, 77, 74, 78, 81],
        borderColor: "#c0392b",
        borderWidth: 2.5,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
      },
      {
        data: [50, 54, 58, 56, 55, 59, 64, 58, 51, 60, 58, 57, 56, 59, 61],
        borderColor: "#d35400",
        borderWidth: 2.5,
        borderDash: [5, 5],
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
      },
    ],
  };

  return (
    <div className="biometrics-trend-graph-container">
      <Line className="biometric-graph" options={options} data={data} />
      <div class="chart-legend">
        <span class="legend-item">
          <span class="dot dot-pulse"></span>
          Παλμοί
        </span>
        <span class="legend-item">
          <span class="dot dot-fatigue"></span>
          Δείκτης κόπωσης
        </span>
      </div>
    </div>
  );
}
