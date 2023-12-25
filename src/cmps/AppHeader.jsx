import { NavLink } from "react-router-dom";

export function AppHeader(){

  return (
    <header className="app-header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/toy">Toys</NavLink>
    </header>
  )
}