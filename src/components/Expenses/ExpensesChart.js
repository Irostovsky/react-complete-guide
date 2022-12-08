import Chart from "../Chart/Chart";

const monthAmount = (month, items) => {
  const itemsForMonth = items.filter(
    (item) => item.date.toLocaleString("en-US", { month: "short" }) == month
  );
  const amountsForMonth = itemsForMonth.map((item) => item.amount);
  return amountsForMonth.reduce((acc, value) => acc + value, 0);
};

const ExpensesChart = (props) => {
  const moment = require("moment");
  moment.locale("en");
  const months = moment.monthsShort();

  const maxValue = props.items
    .map((item) => item.amount)
    .reduce((acc, value) => acc + value, 0);

  const chartDataPoints = months.map((month) => {
    return {
      label: month,
      value: monthAmount(month, props.items),
    };
  });
  return <Chart dataPoints={chartDataPoints} maxValue={maxValue} />;
};

export default ExpensesChart;
