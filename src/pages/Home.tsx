import { ScrollableSection, ProductCard } from '../components'
const Home = () => {
  const prodList = Array(10).fill(0).map((_, i) => <ProductCard key={i} />)

  return (
    <div className='w-full py-layout px-10'>
      <div className=''>
        <h1 className='text-6xl font-bold inline-flex flex-col font-vastago'>
          <span>LET'S FIND THE</span>
          <span className='bg-secondary dark:bg-primary text-primary dark:text-secondary rounded-lg px-2'>BEST EQUIPMENT</span>
          <span>FOR YOU</span>
        </h1>
      </div>

      <div>
        <ScrollableSection className='gap-8 my-16'>
          {prodList}
        </ScrollableSection>
      </div>


      <div className='text-6xl text-secondary/10 dark:text-white/10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla asperiores quisquam tempore aliquid ipsam officia inventore, tenetur adipisci reiciendis nesciunt alias voluptate sint error quas consectetur saepe. Architecto, iure!
      </div>
    </div>
  )
}

export default Home