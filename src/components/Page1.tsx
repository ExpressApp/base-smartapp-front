import React from "react"
import { Link } from "react-router-dom"

export default function Page1() {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Page #1</h1>
      Edit code <code>src/components/Page1.tsx</code>
    </div>
  )
}
