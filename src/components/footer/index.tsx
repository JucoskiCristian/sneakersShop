import { Facebook, Instagram, Linkedin, PhoneCall, Youtube } from 'lucide-react'
import { LinkGroup } from './linkgroup'
import { LinkItem } from './linkitem'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto pb-5 pt-10 lg:pb-5 ">
      <div className="flex flex-wrap">
        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div className="w-full">
            <a
              href="/#"
              className="mb-3 w-20 h-auto inline-block max-w-[160px]"
            >
              <img src={logo} alt="Logo" />
            </a>
            <p className="mb-7 text-base text-body-color dark:text-dark-6">
              Sed ut perspiciatis undmnis is iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <p className="flex items-center text-sm font-medium text-dark dark:text-white">
              <span className="mr-3 text-gray-900">
                <PhoneCall />
              </span>
              <span className="text-gray-900">+012 (345) 678 99</span>
            </p>
          </div>
        </div>

        <LinkGroup header="Resources">
          <LinkItem link="/#" label="SaaS Development" />
          <LinkItem link="/#" label="Our Products" />
          <LinkItem link="/#" label="User Flow" />
          <LinkItem link="/#" label="User Strategy" />
        </LinkGroup>
        <LinkGroup header="Company">
          <LinkItem link="/#" label="About TailGrids" />
          <LinkItem link="/#" label="Contact & Support" />
          <LinkItem link="/#" label="Success History" />
          <LinkItem link="/#" label="Setting & Privacy" />
        </LinkGroup>
        <LinkGroup header="Quick Links">
          <LinkItem link="/#" label="Premium Support" />
          <LinkItem link="/#" label="Our Services" />
          <LinkItem link="/#" label="Know Our Team" />
          <LinkItem link="/#" label="Download App" />
        </LinkGroup>

        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-gray-900">
              Follow Us On
            </h4>
            <div className="mb-6 flex items-center">
              <a
                href="javascript:void(0)"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-gray-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Facebook />
              </a>
              <a
                href="javascript:void(0)"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-gray-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Instagram />
              </a>
              <a
                href="javascript:void(0)"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-gray-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Youtube />
              </a>
              <a
                href="javascript:void(0)"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-gray-900 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <Linkedin />
              </a>
            </div>
            <p className="text-base text-body-color dark:text-dark-6">
              &copy; 2024 Sneakers Shop
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
