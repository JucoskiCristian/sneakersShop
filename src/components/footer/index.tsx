import { Facebook, Instagram, Linkedin, PhoneCall, Youtube } from 'lucide-react'
import { LinkGroup } from './linkgroup'
import { LinkItem } from './linkitem'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className="max-w-full flex mx-auto bg-violet-400 pb-5 pt-10 lg:pb-5 ">
      <div className="flex flex-wrap mx-auto max-w-7xl">
        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div className="w-full">
            <a
              href="/#"
              className="mb-3 w-20 h-auto inline-block max-w-[160px]"
            >
              <img src={logo} alt="Logo" />
            </a>
            <p className="mb-7 text-base text-gray-900">
              Wear innovation. Feel the difference. Live the experience.
            </p>
            <p className="flex items-center text-sm font-medium ">
              <span className="mr-3 text-violet-900">
                <PhoneCall />
              </span>
              <span className="text-gray-900">+012 (345) 678 99</span>
            </p>
          </div>
        </div>

        <LinkGroup header="Resources">
          <LinkItem link="/#" label="Our Products" />
          <LinkItem link="/#" label="User Flow" />
          <LinkItem link="/#" label="User Strategy" />
        </LinkGroup>
        <LinkGroup header="Company">
          <LinkItem link="/#" label="About" />
          <LinkItem link="/#" label="Success History" />
          <LinkItem link="/#" label="Privacy Policy" />
        </LinkGroup>
        <LinkGroup header="Quick Links">
          <LinkItem link="/#" label="Contact & Support" />
          <LinkItem link="/#" label="Our Services" />
          <LinkItem link="/#" label="Know Our Team" />
        </LinkGroup>

        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-gray-900">
              Follow Us On
            </h4>
            <div className="mb-6 flex items-center">
              <a
                href="#"
                className="mr-3 flex h-9 w-9 items-center justify-center text-violet-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="mr-3 flex h-9 w-9 items-center justify-center text-violet-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="mr-3 flex h-9 w-9 items-center justify-center text-violet-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Youtube />
              </a>
              <a
                href="#"
                className="mr-3 flex h-9 w-9 items-center justify-center text-violet-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Linkedin />
              </a>
            </div>
            <p className="text-base text-body-color">
              <span className="text-violet-800 pr-0.5">&copy;2024</span>
              Sneakers Shop
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
