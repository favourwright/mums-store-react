import { ScrollableSection, ProductCard } from '../components'
const Home = () => {
  const prodList = Array(10).fill(0).map((_, i) => (
    <ProductCard
      id={i.toString()}
      name='APPLE AIRPODS PRO 3'
      rating={4.9}
      price={20999}
      image='https://lagmall.com.ng/wp-content/uploads/2022/07/19A53F15-33E2-4933-BEE9-F50279BDD4E0.jpeg'
      key={i} />
  ))

  return (
    <div className='w-full py-layout'>
      <section className='px-10'>
        <h1 className='text-clamp leading-tight font-bold inline-flex flex-col font-vastago'>
          <span>LET'S FIND THE</span>
          <span className='bg-secondary dark:bg-primary text-primary dark:text-secondary rounded-lg px-2'>BEST EQUIPMENT</span>
          <span>FOR YOU</span>
        </h1>
      </section>

      <section className=''>
        <ScrollableSection className='gap-8 px-10 py-20 scroll-px-10'>
          {prodList}
        </ScrollableSection>
      </section>


      <div className='text-6xl text-secondary/10 dark:text-white/10 px-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla asperiores quisquam tempore aliquid ipsam officia inventore, tenetur adipisci reiciendis nesciunt alias voluptate sint error quas consectetur saepe. Architecto, iure!
      </div>
    </div>
  )
}

export default Home