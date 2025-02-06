import Link from 'next/link'
import { useState } from 'react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <span className="text-gray-300 hover:text-white transition-colors">
        {children}
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-white">数灵伙伴</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="/features">特性</NavLink>
            <NavLink href="/evolution">进化系统</NavLink>
            <NavLink href="/battle">对战系统</NavLink>
            <NavLink href="/download">下载</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 