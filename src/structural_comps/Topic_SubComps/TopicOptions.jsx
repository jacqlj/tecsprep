// Gets the type of campaign and makes a colored box for it
// Math = green
// Data structures = blue
// Algorithms = orange
// Problem Solving = red
// behavorial = purple

import React from 'react';
import { useState } from 'react';
const TopicOptions = (props) => {
  let color;
  switch (props.color) {
    case 'green':
      color = '#005140';
      break;
    case 'blue':
      color = '#2E3192';
      break;
    case 'orange':
      color = '#ca530b';
      break;
    case 'red':
      color = '#aa1514';
      break;
    case 'purple':
      color = '#5D3FD3';
      break;
    default:
      color = 'white';
  }

  return (
    <div
      style={{
        ...(props.selected ? { backgroundColor: color } : {}),
        outline: `${color} solid 2px`,
        padding: '0.5em 1em',
        borderRadius: '100em',
      }}
      onClick={props.onClick}
    >
      {props.TopicType}
    </div>
  );
};
export default TopicOptions;
