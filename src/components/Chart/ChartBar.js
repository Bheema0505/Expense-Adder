import React from 'react';

// import './ChartBar.css';
import { ChartBarDivTag, ChartBarFillDivTag, ChartBarInnerDivTag, ChartBarLabelDivTag } from './ChartBarStyles';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <ChartBarDivTag>
      <ChartBarInnerDivTag>
        <ChartBarFillDivTag
          style={{ height: barFillHeight }}
        ></ChartBarFillDivTag>
      </ChartBarInnerDivTag>
      <ChartBarLabelDivTag>{props.label}</ChartBarLabelDivTag>
    </ChartBarDivTag>
  );
};

export default ChartBar;
