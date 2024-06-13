import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className="flex h-14 border-b border-bridge-in-black-05-opacity p-4">
      <Link to="/">
        <img className="h-6" src="/images/BRIDGE-IN.png" alt="bridge-in logo" />
      </Link>
    </header>
  )
}

export default Header
