import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amounts = props.dataPoints.map((point) => point.value);
  const maxValue = Math.max(...amounts);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
