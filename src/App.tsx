import { Routes, Route } from 'react-router-dom'
import { Nav } from './components'
import {
  Home,
  Account,
  Favorite,
  Cart,
  Search,
} from './pages'
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="h-[100dvh] flex flex-col sm:flex-row
      bg-white dark:bg-secondary text-secondary dark:text-white">
      <Nav />
      <main className='flex-1 overflow-y-auto'>
        <div className='relative'>
          <button className='absolute right-0' onClick={handleThemeSwitch}>dark mode</button>
        </div>
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
