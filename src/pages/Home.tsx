import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div>
      <h2 className="p-6 text-center text-4xl">
        Engage and Connect, Anytime, Anywhere
      </h2>
      <p className="p-4 text-center text-primary">
        <Link to={'/posts'}>Check our posts!</Link>
      </p>
    </div>
  )
}

export default Home
