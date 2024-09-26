'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  ChevronDown,
  ShoppingBag,
  SquareMenu,
  SquareX,
  User,
} from 'lucide-react'
import { PopoverMenu } from './popovermenu'

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

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 mt-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <SquareMenu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <PopoverMenu name="Nike" data={nike} />
          <PopoverMenu name="Adidas" data={adidas} />
          <PopoverMenu name="Puma" data={puma} />
          <PopoverMenu name="All Star" data={allstar} />
        </PopoverGroup>
        <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          <a href="#">
            <User />
          </a>
          <a href="#">
            <ShoppingBag />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-11 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <SquareX aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...nike].map(item => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
