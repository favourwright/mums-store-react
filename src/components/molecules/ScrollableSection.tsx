import { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode | ReactNode[]
}

const ScrollSection = ({ className, children }: Props) => {
  return (
    <div
      className={`${className} [&>*]:flex-none overflow-x-auto
      grid [overscroll-behavior-inline:contain] [&>*]:snap-start grid-flow-col
      [scroll-snap-type:inline_mandatory] relative hide-scrollbar`}>
      { children }
    </div>
  )
}

export default ScrollSection