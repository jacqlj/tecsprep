// Ideas for the RadarChart component that displays Technical Concepts and skills
// Mathmematical Competency:
// Behavioral Competency:
// Data Structures:
// Algorithms:
// Problem Solving:

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

import React from 'react';

const SkillChart = () => {
  // Sample data
  const data = [
    { name: 'Mathematics', x: 18 },
    { name: 'Behavioral', x: 25 },
    { name: 'Data Structures', x: 38 },
    { name: 'Algorithms', x: 32 },
    { name: 'Problem Solving', x: 40 },
  ];

  return (
    <RadarChart height={500} width={750} outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis domain={[0, 100]} tick={false} stroke={null} />
      <Radar dataKey="x" strokeWidth="2px" stroke="lightblue" fill="Blue" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default SkillChart;
