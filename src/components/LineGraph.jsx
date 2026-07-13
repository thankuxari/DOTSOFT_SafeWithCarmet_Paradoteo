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
import "./linegraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export default function LineGraph() {
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
      x: { display: false }, 
      y: {
        display: false,
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [40, 50, 45, 60, 55, 60, 65, 55, 68, 70, 75, 69],
        borderColor: "#1b4d79",
        borderWidth: 2.5,
        borderJoinStyle: "round",
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="line-graph">
      <Line options={options} data={data} />
    </div>
  );
}
