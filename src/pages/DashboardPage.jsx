import { InventoryLabelChart } from "../cmps/DashboardCmps/inventoryLabelChart";
import { PriceLabelChart } from "../cmps/DashboardCmps/priceLabelChart";

export function DashboardPage() {



  return (
    <section className="dashboard-page">
      <PriceLabelChart />
      <InventoryLabelChart />
    </section>
  )
}
