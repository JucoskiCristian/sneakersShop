import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

interface MobileMenuitemProps {
  data: { name: string; href: string }[]
  name: string
}

export function MobileMenuitem({ data, name }: MobileMenuitemProps) {
  return (
    <div className="space-y-2 py-6">
      <Disclosure as="div" className="-mx-3">
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-violet-50">
          {name}
          <ChevronDown
            aria-hidden="true"
            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
          />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
          {data.map(item => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-violet-50"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}
