import { Icon } from '@iconify/react';

interface Props {
  className?: string
  children: JSX.Element | JSX.Element[]
}

const ScrollSection = ({ className, children }: Props) => {
  const controlList = [
    { name:'prev', icon:'solar:arrow-left-line-duotone', onClick:()=>{} },
    { name:'next', icon:'solar:arrow-right-line-duotone', onClick:()=>{} },
  ]
  const controls = controlList.map(({ onClick, icon }, i)=>(
    <button
      key={i}
      onClick={onClick}
      className='rounded-full bg-secondary/10 hover:bg-secondary/20
      dark:bg-white/10 hover:dark:bg-white/20 transition-all duration-300
      flex items-center justify-center p-1 px-3 pointer-events-auto'>
      <Icon icon={icon} className='text-4xl' />
    </button>
  ))

  return (
    <div className="relative">
      <div
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