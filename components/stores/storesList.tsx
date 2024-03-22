'use client'
import { Fragment, useState } from 'react'
import { SignedIn } from '@clerk/clerk-react'
import { SignInButton, SignedOut } from '@clerk/nextjs'
import { Stores } from './stores'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

export default function StoresList() {
    const [sideMenu, setSideMenu] = useState('');

    const colors : { [id: string] : { bg: string, shadow: string } } = {
        cyan: {
            bg: 'bg-cyan-500',
            shadow: 'shadow-cyan-500 hover:shadow-cyan-500'
        },
        green: {
            bg: 'bg-green-500',
            shadow: 'shadow-green-500 hover:shadow-green-500'
        },
        red: {
            bg: 'bg-red-500',
            shadow: 'shadow-red-500 hover:shadow-red-500'
        },
        yellow: {
            bg: 'bg-yellow-500',
            shadow: 'shadow-yellow-500 hover:shadow-yellow-500'
        },
        blue: {
            bg: 'bg-blue-500',
            shadow: 'shadow-blue-500 hover:shadow-blue-500'
        },
        purple: {
            bg: 'bg-purple-500',
            shadow: 'shadow-purple-500 hover:shadow-purple-500'
        },
    }

    // Temporary Stores
    const stores : Stores = [
        {
            id: '1',
            name: 'Walmart',
            description: 'Walmart Store this is a longer message for this tile it could be crazy huge if they were nuts whenthey tpyed it in',
            color: 'cyan',
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
            name: 'Natural Grocers',
            description: 'Walmart Store',
            color: 'blue',
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
        },
        {
            id: '3',
            name: 'Trader Joes',
            description: 'Not a walmart Store',
            color: 'purple',
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
        },
        {
            id: '4',
            name: 'Trader Joes',
            description: 'Not a walmart Store',
            color: 'purple',
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
        },
        {
            id: '5',
            name: 'Trader Joes',
            description: 'Not a walmart Store',
            color: 'purple',
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
        <>
            <div className="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {stores.map((store) => (
                    <button type="button" key={store.id} className={`text-start py-5 px-3 m-2 border rounded-lg transition-shadow shadow-md ${colors[store.color].shadow} hover:shadow-lg bg-white`} onClick={() => setSideMenu(store.id)}>
                        <div className="flex">
                            <div className={`inline-block h-12 w-12 rounded-full ring-2 ring-white text-center text-xl pt-2.5 flex-grow-0 flex-shrink-0 ${colors[store.color].bg}`}>{store.name.slice(0, 1)}</div>
                            <div className="ps-3 flex-auto">
                                <p className="text-lg font-semibold leading-6 text-gray-900 text-wrap">{store.name}</p>
                                <p className="mt-1 truncate text-sm leading-5 text-gray-500 text-wrap">{store.description}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <Transition.Root show={sideMenu !== ''} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setSideMenu('')}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                        Panel title
                                    </Dialog.Title>
                                </div>
                                <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        className="relative rounded-md text-gray-800 hover:gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                                        onClick={() => setSideMenu('')}
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6 text-black">CONTENT: {sideMenu}</div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
  