import { InventoryLabelChart } from '../cmps/DashboardCmps/inventoryLabelChart'
import { PriceLabelChart } from '../cmps/DashboardCmps/priceLabelChart'

export function DashboardPage() {
  return (
    <section className="dashboard-page">
      <div className="chart-wrapper">
        <PriceLabelChart />
      </div>
      <div className="chart-wrapper">
        <InventoryLabelChart />
      </div>
    </section>
  )
}
