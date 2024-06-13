import { FC } from 'react'
import { UserI } from '../@types'
import Avatar from './ui/Avatar'

interface UserProps {
  user: UserI
}

const User: FC<UserProps> = ({ user }) => {
  const firstLetterFromEmail = user.email[0]
  return (
    <section className="flex gap-3 p-6">
      <Avatar className="bg-green-600">{firstLetterFromEmail}</Avatar>
      <div className="flex-grow">
        <header className="border-b border-bridge-in-black-05-opacity pb-4">
          <div>
            <p className="font-bold">{user.email}</p>
            <p className="text-bridge-in-black-50-opacity">@{user.username}</p>
          </div>
        </header>
        <main className="pt-4">
          <p className="flex gap-6">
            <span className="font-bold">{user.company.name}</span>
            <span className="text-primary">{user.website}</span>
          </p>
          <p>{user.company.catchPhrase}</p>
        </main>
      </div>
    </section>
  )
}

export default User
