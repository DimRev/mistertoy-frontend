import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { dashboardService } from '../../services/dashboard.service'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Sales/Month',
    },
  },
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function SaleMonthChart() {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: 'On wheels',
        data: [42, 15, 78, 61, 29, 93, 54, 7, 10, 36, 85, 2],
        borderColor: '#b18df2',
        backgroundColor: '#b18df266',
      },
      {
        label: 'Box game',
        data: [77, 49, 8, 96, 18, 63, 30, 91, 55, 72, 4, 67],

        borderColor: '#89541b',
        backgroundColor: '#89541b66',
      },
      {
        label: 'Art',
        data: [12, 39, 20, 83, 50, 17, 88, 3, 74, 9, 45, 28],
        borderColor: '#32c8d9',
        backgroundColor: '#32c8d966',
      },
      {
        label: 'Baby',
        data: [64, 32, 55, 18, 91, 5, 76, 40, 83, 27, 69, 12],
        borderColor: '#82be75',
        backgroundColor: '#82be7566',
      },
      {
        label: 'Doll',
        data: [35, 67, 21, 96, 48, 13, 79, 54, 8, 40, 71, 2],
        borderColor: '#11b9b1',
        backgroundColor: '#11b9b166',
      },
      {
        label: 'Puzzle',
        data: [60, 14, 78, 23, 51, 9, 46, 32, 85, 5, 68, 37],
        borderColor: '#be2e8f',
        backgroundColor: '#be2e8f66',
      },
      {
        label: 'Outdoor',
        data: [13, 82, 47, 26, 69, 38, 61, 5, 94, 20, 73, 11],
        borderColor: '#c555db',
        backgroundColor: '#c555db66',
      },
      {
        label: 'Battery Powered',
        data: [89, 26, 71, 42, 10, 57, 34, 95, 18, 63, 7, 50],
        borderColor: '#4a2644',
        backgroundColor: '#4a264466',
      },
    ],
  })

  //! Connect to real data from DB using the function below
  //TODO Write demo sales data

  // useEffect(() => {
  //   dashboardService.query().then(({ inventoryByLabel, totalByLabel }) => {
  //     setData({
  //       labels,
  //       datasets: [
  //         {
  //           label: 'total inventory',
  //           data: labels.map((label) => totalByLabel[label]),
  //           backgroundColor: 'rgba(12, 255, 12, 0.8)',
  //         },
  //         {
  //           label: 'in stock',
  //           data: labels.map((label) => inventoryByLabel[label]),
  //           backgroundColor: 'rgba(12, 12, 255, 0.8)',
  //         },
  //       ],
  //     })
  //   })
  // }, [])

  return (
    <Line
      className="sale-month-chart"
      options={options}
      data={data}
      width={500}
      height={250}
    />
  )
}
