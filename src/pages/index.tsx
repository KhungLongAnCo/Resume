import * as React from "react"
import Home from "components/home/index"
import { useState, useMemo } from "react"
import Particles from "components/particles/index"
import * as darkTheme from "../theme/dark.module.scss"
import * as lightTheme from "../theme/light.module.scss"

import "../theme/styles.scss"

// markup
const IndexPage = () => {
  const [theme, setTheme] = useState(false)
  return (
    <main className={theme ? lightTheme.wrap : darkTheme.wrap}>
      <div>
        <Particles />
      </div>
      <Home />
    </main>
  )
}

export default IndexPage
