import { useRef } from 'react';
import { Icon } from '@iconify/react';
import useScrollLimitDetector from '../utils/useScrollLimitDetector'

interface Props {
  className?: string
  children: JSX.Element | JSX.Element[]
}

const ScrollSection = ({ className, children }: Props) => {
  const {
    isMaxLeftOfContainer,
    isMaxRightOfContainer,
    detectScrollLimits,
  } = useScrollLimitDetector()

  const scrollableContainer = useRef<null | HTMLDivElement>(null)
  const scrollX = (direction: 'prev' | 'next') => {
    const container = scrollableContainer.current as HTMLDivElement
    const scrollBy = window.innerWidth < 768 ? 300 : 1200
    //if screen size is mobile, scroll by 300px
    container.scrollBy({
      left: direction === 'prev' ? -scrollBy : scrollBy,
      behavior: 'smooth',
    })
  }
  const hasEnoughContentToScroll = Array.isArray(children) && children.length > 4 // using 4 as a threshold magic number
  const controlList = [
    { name:'prev', disabled:isMaxLeftOfContainer, icon:'solar:arrow-left-line-duotone' },
    { name:'next', disabled:isMaxRightOfContainer || !hasEnoughContentToScroll, icon:'solar:arrow-right-line-duotone' },
  ]
  const controls = controlList.map(({ icon, disabled, name }, i)=>(
    <button
      key={i}
      onClick={()=>scrollX(name as 'prev' | 'next')}
      disabled={disabled}
      className='rounded-full bg-secondary/10 hover:bg-secondary/20
      dark:bg-white/10 hover:dark:bg-white/20 transition-all duration-300
      flex items-center justify-center p-1 px-3 pointer-events-auto
      disabled:opacity-50 disabled:cursor-not-allowed'>
      <Icon icon={icon} className='text-4xl' />
    </button>
  ))

  return (
    <div className="relative">
      <div
        onScroll={detectScrollLimits}
        ref={scrollableContainer}
        className={`${className} [&>*]:flex-none overflow-x-auto
        grid [overscroll-behavior-inline:contain] [&>*]:snap-start grid-flow-col
        [scroll-snap-type:inline_mandatory] relative hide-scrollbar`}>
        { children }
      </div>
      {/* controls */}
      <div className={`${className} absolute inset-0 pointer-events-none py-6`}>
        <div className="flex justify-between w-full">
          { controls }
        </div>
      </div>
    </div>
  )
}

export default ScrollSection