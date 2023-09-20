import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom'

interface Props {
  className?: string
}
const SideNav = ({ className }: Props)=>{
  const loction = useLocation()

  const mainNavList = [
    { name:'home', path:'/', icon:'clarity:store-solid' },
    { name:'search', path:'/search', icon:'iconamoon:search' },
    { name:'favorite', path:'/favorite', icon:'ph:heart' },
    { name:'cart', path:'/cart', icon:'solar:bag-4-outline' },
  ]
  const mainNavElems = mainNavList.map((nav, i)=>(
    <Link key={i} to={nav.path}>
      <Icon
        icon={nav.icon}
        className={`text-2xl text-secondary/50 dark:text-white/50
        ${(loction.pathname===nav.path && '!text-secondary dark:!text-white')}`}
      />
    </Link>
  ))

  return (
    <nav
      className={className+ ` flex flex-col items-center justify-between
      w-[128px] min-w-[128px] border-r border-complementary/20
      dark:border-complementary/10 py-layout`}>
      <div>
        <Link to="/">
          <Icon icon="solar:bolt-bold" className='text-3xl dark:text-primary' />
        </Link>
      </div>

      <div className='flex flex-col gap-12'>
        { mainNavElems }
      </div>
      
      <div>
        <Link
          to="/me"
          className={`w-12 h-12 rounded-full
          bg-secondary/10 hover:bg-secondary/20 dark:bg-white/10 hover:dark:bg-white/20
          transition-all duration-300 flex items-center justify-center border border-transparent
          ${(loction.pathname==='/me' && 'border-secondary dark:border-white')}`}>
          <Icon icon="ph:user" className='text-2xl' />
        </Link>
      </div>
    </nav>
  )
}

export default SideNav