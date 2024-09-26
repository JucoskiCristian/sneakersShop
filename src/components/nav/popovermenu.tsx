import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

interface PopoverMenuProps {
  data: { name: string; href: string }[]
  name: string
}

export function PopoverMenu({ data, name }: PopoverMenuProps) {
  return (
    <Popover className="relative group">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
        {name}
        <ChevronDown
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400 group-data-[open]:rotate-180"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-violet-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-4">
          {data.map(item => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-violet-50"
            >
              <div className="flex-auto">
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}
