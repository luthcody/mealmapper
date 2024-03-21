'use client'

import { SignedIn } from '@clerk/clerk-react'
import { SignInButton, SignedOut } from '@clerk/nextjs'
import { Stores } from './stores'

export default function StoresList() {

    // Temporary Stores
    const stores : Stores = [
        {
            id: '1',
            name: 'Walmart',
            categories: [
                {
                    id: '1',
                    name: 'Grocery'
                },
                {
                    id: '2',
                    name: 'Electronics'
                }
            ]
        },
        {
            id: '2',
            name: 'Target',
            categories: [
                {
                    id: '3',
                    name: 'Grocery'
                },
                {
                    id: '4',
                    name: 'Electronics'
                }
            ]
        }
    ]

    return (
        <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
            <ul role="list" className="divide-y divide-gray-100">
            {stores.map((store) => (
            <li key={store.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={store.id} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{store.id}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{store.id}</p>
                </div>
                </div>
            </li>
            ))}
            </ul>
        </div>
    )
}
  