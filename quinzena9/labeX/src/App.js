import React from "react"
import GlobalStyle from "./globalStyles"
import Router from "./routes/Router"

function App() {
  return (
    <div className="corpoSite">
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App
