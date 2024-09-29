'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { Search, ShoppingBag, SquareMenu, SquareX } from 'lucide-react'
import { PopoverMenu } from './popovermenu'

import logo from '../../assets/image.png'
import { MobileMenuitem } from './mobilemenuitem'
import { ShoppingBagMenu } from './shoppingbagmenu'

const nike = [
  {
    name: 'Air Jordan',
    href: '#',
  },
  {
    name: 'Air Max',
    href: '#',
  },
  {
    name: 'Air Force',
    href: '#',
  },
  {
    name: 'Dunk',
    href: '#',
  },
  {
    name: 'Kobe',
    href: '#',
  },
]

const adidas = [
  {
    name: 'Adi2000',
    href: '#',
  },
  {
    name: 'Campus',
    href: '#',
  },
  {
    name: 'Gazele',
    href: '#',
  },
  {
    name: 'Samba',
    href: '#',
  },
  {
    name: 'Superstar',
    href: '#',
  },
]

const puma = [
  {
    name: 'Cali',
    href: '#',
  },
  {
    name: 'CA Pro',
    href: '#',
  },
  {
    name: 'Ease Rider',
    href: '#',
  },
  {
    name: 'Palermo',
    href: '#',
  },
  {
    name: 'Suede',
    href: '#',
  },
]
const allstar = [
  {
    name: 'Cano Alto',
    href: '#',
  },
  {
    name: 'Cano baixo',
    href: '#',
  },
  {
    name: 'Run Star',
    href: '#',
  },
  {
    name: 'Move',
    href: '#',
  },
  {
    name: 'Chuck Taylor',
    href: '#',
  },
]
export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)

  function closeCartMenu() {
    setCartMenuOpen(false)
  }

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 mt-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src={logo} className="h-20 w-auto bg-cover" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <SquareMenu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <PopoverMenu name="Nike" data={nike} />
          <PopoverMenu name="Adidas" data={adidas} />
          <PopoverMenu name="Puma" data={puma} />
          <PopoverMenu name="All Star" data={allstar} />
        </PopoverGroup>
        <div className="hidden gap-6 lg:flex lg:flex-1 lg:justify-end">
          <a href="#">
            <Search />
          </a>
          <button
            type="button"
            className=""
            onClick={() => setCartMenuOpen(true)}
          >
            <ShoppingBag />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-11 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition duration-500 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-20 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <SquareX aria-hidden="true" className="h-6 w-auto" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <MobileMenuitem name="Nike" data={nike} />
              <MobileMenuitem name="Adida" data={adidas} />
              <MobileMenuitem name="Puma" data={puma} />
              <MobileMenuitem name="All Star" data={allstar} />
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <Dialog
        open={cartMenuOpen}
        onClose={setCartMenuOpen}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <ShoppingBagMenu setMenuClose={closeCartMenu} />
      </Dialog>
    </header>
  )
}
