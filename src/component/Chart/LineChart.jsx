import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const s = [
  {
    name: "Rahim",
    physics: 85,
    chemistry: 78,
    math: 90
  },
  {
    name: "Karim",
    physics: 70,
    chemistry: 88,
    math: 75
  },
  {
    name: "Amina",
    physics: 92,
    chemistry: 81,
    math: 95
  },
  {
    name: "Sakib",
    physics: 60,
    chemistry: 72,
    math: 68
  },
  {
    name: "Nusrat",
    physics: 88,
    chemistry: 90,
    math: 85
  },
  {
    name: "Tanvir",
    physics: 76,
    chemistry: 69,
    math: 80
  },
  {
    name: "Mim",
    physics: 95,
    chemistry: 94,
    math: 97
  },
  {
    name: "Hasan",
    physics: 55,
    chemistry: 60,
    math: 58
  },
  {
    name: "Jannat",
    physics: 82,
    chemistry: 79,
    math: 88
  },
  {
    name: "Arif",
    physics: 68,
    chemistry: 74,
    math: 70
  }
];

const Linechart = () => {
    return (
        <div>
            <LineChart width={800} height={300} data={s}>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics"></Line>
                <XAxis dataKey={"chemistry"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Linechart;