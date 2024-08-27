'use client'

import { SignedIn } from '@clerk/clerk-react'
import { SignInButton, SignedOut } from '@clerk/nextjs'

export default function LoginBanner() {
    return (
      <div className="bg-white">
        <div className="mx-auto">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 lg:py-0 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Meal Mapper
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Manage your groceries better.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
  