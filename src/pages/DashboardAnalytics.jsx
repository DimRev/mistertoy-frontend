import React from 'react'
import { PriceLabelChart } from '../cmps/DashboardCmps/priceLabelChart'
import { InventoryLabelChart } from '../cmps/DashboardCmps/InventoryLabelChart'
import { SaleMonthChart } from '../cmps/DashboardCmps/SaleMonthChart'
export function DashboardAnalytics({}) {
  return (
    <section className='dashboard-analytics'>
      {' '}
      <div className="chart-wrapper price-label">
        <PriceLabelChart />
      </div>
      <div className="chart-wrapper inventory-label">
        <InventoryLabelChart />
      </div>
      <div className="chart-wrapper sale-month">
        <SaleMonthChart />
      </div>
    </section>
  )
}
