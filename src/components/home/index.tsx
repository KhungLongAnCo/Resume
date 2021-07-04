import React from "react"
import Projects from "components/projects"
import * as classes from "./home.module.scss"

const Home = () => (
    <div className={classes.wrap}>
      Home
      <Projects />
    </div>
  )

export default Home
