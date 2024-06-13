import { FC } from 'react'
import Home from '../assets/icons/Home'
import Following from '../assets/icons/Following'
import { NavLink } from 'react-router-dom'
import { mergeClasses } from '../utils'

const Navbar: FC = () => {
  return (
    <aside className="border-r border-r-bridge-in-black-05-opacity">
      <nav className="p-6">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return mergeClasses(
                  'flex gap-2 p-3 hover:text-primary',
                  isActive ? 'text-primary' : '',
                )
              }}
              to={'/posts'}
            >
              <Home /> Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return mergeClasses(
                  'flex gap-2 p-3 hover:text-primary',
                  isActive ? 'text-primary' : '',
                )
              }}
              to={'/users'}
            >
              <Following /> Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar
