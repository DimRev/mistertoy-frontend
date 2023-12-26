import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { dashboardService } from '../../services/dashboard.service'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Total/In-Stock',
    },
  },
}

const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
]



export function InventoryLabelChart() {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: 'total inventory',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'in stock',
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  })

  useEffect(() => {
    dashboardService.query().then(({ inventoryByLabel,totalByLabel }) => {
      setData({
        labels,
        datasets: [
          {
            label: 'total inventory',
            data: labels.map((label) => totalByLabel[label]),
            backgroundColor: 'rgba(122, 255, 122, 0.5)',
          },
          {
            label: 'in stock',
            data: labels.map((label) => inventoryByLabel[label]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      })
    })
  }, [])

  return <Bar options={options} data={data} />
}
