// Import necessary Chart.js components
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale, // For the x-axis (categories)
  LinearScale, // For the y-axis (linear scale)
  LineElement, // For drawing lines in the line chart
  PointElement, // For drawing points in the line chart
  Title, // For chart title
  Tooltip, // For tooltips
  Legend // For legend
);

// Export ChartJS as a default export if needed elsewhere
export default ChartJS;
