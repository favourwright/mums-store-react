import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

interface Props {
  className?: string
}
const SideNav = ({ className }: Props)=>{
  const loction = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const mainNavList = [
    { name:'home', path:'/', icon:'clarity:store-solid' },
    { name:'search', path:'/search', icon:'iconamoon:search' },
    { name:'favorite', path:'/favorite', icon:'ph:heart' },
    { name:'cart', path:'/cart', icon:'solar:bag-4-outline' },
  ]
  const mainNavElems = mainNavList.map((nav, i)=>(
    <Link
      key={i} to={nav.path}
      className={`${(loction.pathname===nav.path && '!text-secondary dark:!text-white')}
      text-secondary/50 dark:text-white/50 flex items-center gap-8`}>
      <Icon icon={nav.icon} className={'text-2xl'} />
      <span className='sm:hidden text-xl uppercase'>{nav.name}</span>
    </Link>
  ))
  
  // close menu when location changes
  useEffect(()=>setIsOpen(false), [location.pathname])

  return (
    <nav
      className={`${className} flex sm:flex-col items-center justify-between
      sm:w-[128px] sm:min-w-[128px] border-b sm:border-r border-complementary/20
      dark:border-complementary/10
      px-layout-mobile-x sm:px-0 py-2 sm:py-layout-y`}>
      <div className='min-h-[33.33%] '>
        <Link to="/">
          <Icon icon="solar:bolt-bold" className='text-3xl dark:text-primary' />
        </Link>
      </div>

      <div onClick={()=>setIsOpen(prev=>!prev)} className='sm:hidden relative z-30'>
        <Icon
          icon={ isOpen ? 'iconamoon:close-light' : 'solar:hamburger-menu-line-duotone' }
          className='text-5xl'
        />
      </div>
      
      <div
        className='fixed sm:static flex-1 flex flex-col z-20 inset-0
        pointer-events-none overflow-y-auto'>
        <div
          onClick={()=>setIsOpen(false)}
          className={`${isOpen ? 'pointer-events-auto backdrop-blur-sm' : 'pointer-events-none'}
          absolute inset-0 sm:hidden bg-transparent`}>
          {/* menu overlay */}
        </div>
        <div
          className={`${isOpen && 'translate-y-0'}
          -translate-y-full sm:translate-y-0
          transition-all duration-300 px-layout-mobile-x sm:px-0 py-4 sm:py-0
          flex flex-1 flex-col sm:items-center justify-between
          absolute sm:static inset-x-0 top-0 pointer-events-auto
          bg-white dark:bg-secondary sm:bg-transparent gap-8
          border-b sm:border-none !border-secondary/10 dark:!border-white/10`}>
          <div className='flex flex-col gap-8 sm:gap-12'>
            { mainNavElems }
          </div>
          
          <Link
            to="/me"
            className={`sm:w-12 sm:h-12 rounded-full
            sm:bg-secondary/10 hover:sm:bg-secondary/20 dark:sm:bg-white/10 hover:sm:dark:bg-white/20
            text-secondary/50 dark:text-white/50 sm:text-inherit dark:sm:text-inherit
            sm:border border-transparent transition-all duration-300
            flex items-center sm:justify-center gap-8
            ${(loction.pathname==='/me' && '!border-secondary dark:!border-white !text-secondary dark:!text-white')}`}>
            <Icon icon="ph:user" className='text-2xl' />
            <span className='sm:hidden text-xl uppercase'>Account</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default SideNav