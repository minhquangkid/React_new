import React from "react";
import ExpensesChart from "../Expenses/ExpenseChart";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  // nhận 12 đối số là 12 tháng
  // hàm Math.max sẽ trả về giá trị lớn nhất trong () chẳng hạn như (1,2,4,7,0) .Lưu ý rằng nó ko nhận đối số là 1 mảng mà phải tách rời nên ta phải dùng toán tử spread tức là dấu ...
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
