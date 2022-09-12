import BackButton from "../components/BackButton.jsx"

export default function NotFound() {
  return (
    <div>
      <BackButton />
      <h1 className="title">ERROR 404</h1>
      <br />
      <p className="subtitle">Page Not Found!</p>
    </div>
  )
}