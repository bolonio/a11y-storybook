import React from "react"
import ReactDOM from "react-dom"
import { ColorImage } from "./stories/ColorImage"

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react")
  axe(React, ReactDOM, 1000)
}

function App() {
  return (
    <div>
      <ColorImage role="asdfa" />
    </div>
  )
}

export default App
