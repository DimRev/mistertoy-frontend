import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { dashboardService } from '../../services/dashboard.service';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'avg price per label',
    },
  },
};

const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
];

export function PriceLabelChart() {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: 'price',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    dashboardService.query().then(({ pricePerLabel }) => {
      setData({
        labels,
        datasets: [
          {
            label: 'price',
            data: labels.map((label) => pricePerLabel[label]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      });
    });
  }, []);

  return <Bar className="price-label-chart" options={options} data={data} width={500} height={500} />;
}
