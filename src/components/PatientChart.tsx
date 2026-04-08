import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/** Represents a vital value measurement */
interface Vital {
  value: number;
}

/** Represents a single diagnosis record */
interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: Vital;
    diastolic: Vital;
  };
}

/** Props for the patient chart */
interface PatientChartProps {
  history: DiagnosisHistory[];
}

/**
 * Displays a responsive, accessible line chart
 * for the patient's systolic and diastolic blood pressure
 * over the last six recorded months.
 */
const PatientChart: React.FC<PatientChartProps> = ({ history }) => {
  // Take the most recent six months and reverse for chronological display
  const chartHistory = [...history].slice(-6);

  /** Define chart style constants */
  const chartColors = {
    systolic: "#E66F7F",
    diastolic: "#986BFF",
    grid: "rgba(0, 0, 0, 0.1)",
  };

  /** Prepare chart data */
  const data: ChartData<"line"> = {
    labels: chartHistory.map((h) => `${h.month.slice(0, 3)}. ${h.year % 100}`),
    datasets: [
      {
        label: "Systolic",
        data: chartHistory.map((h) => h.blood_pressure.systolic.value),
        borderColor: chartColors.systolic,
        backgroundColor: chartColors.systolic,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: chartColors.systolic,
        pointBorderColor: "#FFF",
      },
      {
        label: "Diastolic",
        data: chartHistory.map((h) => h.blood_pressure.diastolic.value),
        borderColor: chartColors.diastolic,
        backgroundColor: chartColors.diastolic,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: chartColors.diastolic,
        pointBorderColor: "#FFF",
      },
    ],
  };

  /** Chart display options */
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (items) => `Month: ${items[0].label}`,
          label: (item) => `${item.dataset.label}: ${item.formattedValue} mmHg`,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          color: "#4B5563",
          font: { size: 12 },
        },
        title: {
          display: true,
          text: "Blood Pressure (mmHg)",
          color: "#374151",
          font: { size: 13, weight: "600" },
        },
        grid: {
          color: chartColors.grid,
        },
      },
      x: {
        ticks: {
          color: "#4B5563",
          font: { size: 12 },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[220px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default PatientChart;
