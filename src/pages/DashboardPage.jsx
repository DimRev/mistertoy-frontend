import { NavLink, Outlet } from 'react-router-dom'

export function DashboardPage() {
  return (
    <>
      <section className="dashboard-page">
      <section className='dashboard-sidebar'>
        <NavLink to={'/dashboard/analytics'}>Analytics</NavLink>
        <NavLink to={'/dashboard/products'}>Products</NavLink>
        <NavLink>Analytics</NavLink>
      </section>
        <main>
         <Outlet />
        </main>
      </section>
    </>
  )
}
