declare module "*.component.svg" {
  import { ComponentType } from "react"

  const content: ComponentType<React.HTMLAttributes<React.ReactSVGElement>>
  export default content
}

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react"
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}
declare module "*.png" {
  const content: string
  export default content
}

declare module "*.jpg" {
  const content: string
  export default content
}
