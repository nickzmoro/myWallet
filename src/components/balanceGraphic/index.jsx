import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BalanceChart({ income, expenses }) {
  const data = {
    labels: ["Entradas do Mês", "Saídas do Mês"],
    datasets: [
      {
        label: "Quantia",
        data: [income, expenses],
        backgroundColor: ["#3BFF88", "#DA5733"], // verde para entradas, vermelho para saídas
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
