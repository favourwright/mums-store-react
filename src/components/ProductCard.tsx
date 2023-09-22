import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

interface Props {
  className?: string
  id: string
  image: string
  name: string
  rating: number
  price: number
  currency?: string
}
const ProductCard = ({ className, id, image, name, rating=(0.0), price, currency='₦' }: Props)=>{
  const priceWithDecimals = price.toLocaleString('en-US')
  const handleFavorite = ()=>{
    console.log('favoriting...')
    setIsFavorited((prev)=>(!prev))
  }

  const [isFavorited, setIsFavorited] = useState(false)
  const secondaryBtnList = [
    { name:'cart', icon:'solar:bag-4-outline', onClick:()=>{} },
    { name:'favorite', icon: isFavorited?'ph:heart-fill':'ph:heart', onClick:()=>handleFavorite() },
  ]
  
  // favorte & add to cart buttons
  const secondaryBtns = secondaryBtnList.map(({ onClick, icon }, i)=>(
    <button
      key={i}
      onClick={onClick}
      className='w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20
      dark:bg-white/10 hover:dark:bg-white/20 transition-all duration-300
      flex items-center justify-center'>
      <Icon icon={icon} className='text-lg' />
    </button>
  ))

  return (
    <div
      className={`${className} group w-[250px] h-[320px]
      after:absolute after:inset-0 after:border after:border-secondary/10 after:dark:border-white/10
      hover:after:border-transparent hover:after:bg-complementary/30 hover:after:dark:bg-complementary/10
      after:rounded-3xl after:transition-all after:duration-300 hover:after:shadow-2xl relative
      hover:after:shadow-black/10 hover:dark:after:shadow-black/20 hover:after:scale-105
      `}
      title={name}>
      <div
        className='w-full h-full relative flex flex-col gap-3 z-10
        group-hover:scale-105 transition-all duration-300'>
        <div
          className="h-[140px] text-9xl m-1.5 bg-secondary/5 dark:bg-white/5
          rounded-2xl text-center overflow-hidden relative">
          <img
            src={image} alt={name}
            className="h-full w-full object-center object-cover"
          />
          <Link to={`?product/${id}`} className='absolute inset-0 z-10'></Link>
        </div>

        <div className="px-5 pb-5 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="truncate opacity-80 group-hover:opacity-100">{name}</div>
            <div className="opacity-50">{rating} Rating</div>
          </div>

          <div className="flex items-center gap-1 justify-between">
            <div
              className="font-vastago text-2xl font-semibold
              text-secondary dark:text-primary
              opacity-80 group-hover:opacity-100 truncate"
              title={currency+priceWithDecimals}>
              {currency}{priceWithDecimals}
            </div>
            <div className='flex gap-2'>
              {secondaryBtns}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard