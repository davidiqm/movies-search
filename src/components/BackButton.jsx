import { NavLink } from "react-router-dom"

export default function BackButton() {
  return (
    <button className="border rounded px-3 py-2 bg-blue-500 text-white">
      <NavLink to="/">Regresar a Casa</NavLink>
    </button>
  )
}