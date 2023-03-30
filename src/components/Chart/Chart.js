import React from 'react';

import ChartBar from './ChartBar';
// import './Chart.css';
import { ChartDivTag } from './chartStyles';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    // <div className='chart'>
    <ChartDivTag>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      </ChartDivTag>
    // </div>
  );
};

export default Chart;
