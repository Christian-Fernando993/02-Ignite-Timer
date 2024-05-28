'use client'

import Image from 'next/image'
import Logo from '@/assets/Logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <Image src={Logo} alt="" />
      <nav className="flex gap-2">
        <Link
          href="/"
          title="Timer"
          className="w-12 h-12 flex justify-center items-center text-gray-100 border-t-2 border-b-2 border-t-transparent border-b-transparent hover:border-b-[#00875F]"
        >
          <Timer size={24} />
        </Link>
        <Link
          href="/Historico"
          title="Historico"
          className="w-12 h-12 flex justify-center items-center text-gray-100 border-t-2 border-b-2 border-t-transparent border-b-transparent hover:border-b-[#00875F] active:text-green-[#00875F]"
        >
          <Scroll size={24} />
        </Link>
      </nav>
    </header>
  )
}
