import React from 'react'
import { PriceLabelChart } from '../cmps/DashboardCmps/priceLabelChart'
import { InventoryLabelChart } from '../cmps/DashboardCmps/inventoryLabelChart'
export function DashboardAnalytics({}) {
  return (
    <section className='dashboard-analytics'>
      {' '}
      <div className="chart-wrapper">
        <PriceLabelChart />
      </div>
      <div className="chart-wrapper">
        <InventoryLabelChart />
      </div>
    </section>
  )
}
