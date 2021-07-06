import React from "react"
import ParticlesProps from "react-particles-js"
import gitHubImg from "assets/images/common/github.jpg"
import reactImg from "assets/images/common/react.png"
import gatsbyImg from "assets/images/common/gatsby.png"

const Particles = () => (
  <ParticlesProps
    params={{
      particles: {
        number: {
          value: 8,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          speed: 1,
          out_mode: "out",
        },
        shape: {
          type: ["image", "circle"],
          image: [
            {
              src: gatsbyImg,
              height: 20,
              width: 23,
            },
            {
              src: gitHubImg,
              height: 20,
              width: 20,
            },
            {
              src: reactImg,
              height: 20,
              width: 20,
            },
            {
              src: reactImg,
              height: 20,
              width: 20,
            },
          ],
        },
        color: {
          value: "#CCC",
        },
        size: {
          value: 30,
          random: false,
          anim: {
            enable: true,
            speed: 4,
            size_min: 10,
            sync: false,
          },
        },
      },
      retina_detect: false,
    }}
  />
)

export default Particles
