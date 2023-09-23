import { useState } from "react"

export default function () {
  const [isTopOfContainer, setIsTopOfContainer] = useState(true)
  const [isBottomOfContainer, setIsBottomOfContainer] = useState(false)
  const [isMaxRightOfContainer, setIsMaxRightOfContainer] = useState(false)
  const [isMaxLeftOfContainer, setIsMaxLeftOfContainer] = useState(true)
  const [isOverflowingX, setIsOverflowingX] = useState(false)
  const [isOverflowingY, setIsOverflowingY] = useState(false)

  // used any type because I don't know what type the event is
  const detectScrollLimits = (e: any) => {
    const target = e.target as HTMLElement
    const { scrollTop, scrollHeight, offsetHeight, scrollLeft, scrollWidth, offsetWidth } = target
    const isAtBottom = scrollTop + offsetHeight >= scrollHeight
    const isAtTop = scrollTop === 0
    const isInbetween = !isAtBottom && !isAtTop
    const isAtMaxRight = scrollLeft + offsetWidth >= scrollWidth
    const isAtMaxLeft = scrollLeft === 0
    const isInbetweenX = !isAtMaxRight && !isAtMaxLeft

    if(isInbetween) setIsTopOfContainer(false)
    if(isAtTop) setIsTopOfContainer(true)
    if(isInbetween) setIsBottomOfContainer(false)
    if(isAtBottom) setIsBottomOfContainer(true)
    if(isAtMaxRight) setIsMaxRightOfContainer(true)
    if(isAtMaxLeft) setIsMaxLeftOfContainer(true)
    if(isInbetweenX) setIsMaxRightOfContainer(false)
    if(isInbetweenX) setIsMaxLeftOfContainer(false)
    // this is currently not so useful because function is called on scroll event
    // so it isn't accurate on first load
    if(scrollWidth > offsetWidth) setIsOverflowingX(true)
    if(scrollWidth <= offsetWidth) setIsOverflowingX(false)
    if(scrollHeight > offsetHeight) setIsOverflowingY(true)
    if(scrollHeight <= offsetHeight) setIsOverflowingY(false)
  }
  return {
    isTopOfContainer,
    isBottomOfContainer,
    isMaxRightOfContainer,
    isMaxLeftOfContainer,
    isOverflowingX,
    isOverflowingY,
    detectScrollLimits
  }
}