import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'

const MainLayout: FC = () => {
  return (
    <div className="bg-bridge-in-white text-bridge-in-black">
      <Header />
      <main className="grid grid-cols-[1fr_2fr_1fr]">
        <Navbar />
        <div className="h-screen max-h-[calc(100vh-56px)] overflow-auto">
          <Outlet />
        </div>
        <SocialMedia />
      </main>
    </div>
  )
}

export default MainLayout
