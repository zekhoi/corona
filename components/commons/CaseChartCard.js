import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { nFormatter } from "../../utils/helper";

export default function CaseChartCard({
  title,
  labels = [],
  datalist = [],
  color = "rgba(75, 135, 255, 1)",
  bgcolor = "rgba(75, 135, 255, 0.2)",
  step = 10,
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  );
  let delayed;
  const options = {
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 1 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
          stepSize: step,
          callback: function (value) {
            return nFormatter(value);
          },
        },
      },
      xAxes: {
        ticks: {
          maxTicksLimit: 5,
        },
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: datalist,
        pointBackgroundColor: color,
        backgroundColor: bgcolor,
        borderColor: color,
        fill: true,
      },
    ],
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="block h-64 px-3 text-center text-gray-600 bg-white rounded-lg shadow-md w-96 2xl:h-72 2xl:w-100">
          <div className="flex justify-start px-5 py-5">
            <a className="font-medium uppercase">Total {title}</a>
          </div>
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
