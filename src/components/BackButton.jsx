import { NavLink } from "react-router-dom"

export default function BackButton() {
  return (
    <button>
      <NavLink to="/">Regresar a Casa</NavLink>
    </button>
  )
}