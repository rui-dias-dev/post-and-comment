import { FC } from 'react'
import Linkedin from '../assets/icons/Linkedin'
import Facebook from '../assets/icons/Facebook'
import Twitter from '../assets/icons/Twitter'

const SocialMedia: FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="space-y-3 border-l border-bridge-in-black-05-opacity p-6">
      <p className="text-bridge-in-black-50-opacity">
        {currentYear} © BRIDGE IN
      </p>
      <p className="flex gap-4">
        <a
          className="text-bridge-in-black-50-opacity hover:text-primary"
          href="https://www.linkedin.com/company/bridgein/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          className="text-bridge-in-black-50-opacity hover:text-primary"
          href="https://twitter.com/BridgeInPt"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          className="text-bridge-in-black-50-opacity hover:text-primary"
          href="https://www.facebook.com/bridgeinpt/"
          target="_blank"
        >
          <Facebook />
        </a>
      </p>
    </div>
  )
}

export default SocialMedia
