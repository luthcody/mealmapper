'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { UserButton } from '@clerk/nextjs'
import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <footer className="bg-white">
      <div className="mx-auto p-6 lg:px-8" aria-label="Global">

        {/* <div className="flex flex-1 flex-row items-center text-center justify-around max-w-7xl lg:px-8">
            <div className="basis-1/4">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
            </div>
            <div className="basis-1/4 text-sm font-semibold leading-6 text-gray-900">
              Features
            </div>
            <div className="basis-1/4 text-sm font-semibold leading-6 text-gray-900">
              Marketplace
            </div>
            <div className="basis-1/4 text-sm font-semibold leading-6 text-gray-900">
              Company
            </div>
        </div> */}
        <div className="text-center text-xs mt-2 font-semibold text-gray-500">A project by <a href='https://www.codyluth.com' className='underline'>Cody Luth</a></div>

      </div>
    </footer>
  )
}
