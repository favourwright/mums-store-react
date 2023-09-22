import { Routes, Route } from 'react-router-dom'
import { Nav } from './components'
import {
  Home,
  Account,
  Favorite,
  Cart,
  Search,
} from './pages'

function App() {

  return (
    <div
      className="h-[100dvh] flex flex-col sm:flex-row
      bg-white dark:bg-secondary text-secondary dark:text-white">
      <Nav />
      <main className='flex-1 overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/me" element={<Account />} /> 
          <Route path="/favorite" element={<Favorite />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/search" element={<Search />} /> 
        </Routes>
      </main>
    </div>
  )
}

export default App
