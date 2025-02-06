import Link from 'next/link'
import { useState } from 'react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <span 
      className="text-gray-300 hover:text-white transition-colors cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-white">数灵伙伴</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#" onClick={scrollToFeatures}>特性</NavLink>
            <NavLink href="/documents">文档</NavLink>
            <NavLink href="/price">定价</NavLink>
            <NavLink href="/download">下载</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar