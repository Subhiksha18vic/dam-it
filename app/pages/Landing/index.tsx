import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function Landing() {
  const features = [
    {
      name: 'Polygon Chain',
      description:
        'Scalable and secure blockchain for building and scaling Ethereum applications.',
    },
    {
      name: 'IPFS via Filecoin',
      description:
        'A peer-to-peer hypermedia protocol and a system for storing and sharing files of every Brand and its metadata.',
    },
    {
      name: 'Biconomy - Social Login',
      description:
        'A decentralized social login solution that allows users to login to your dApp using their social media accounts.',
    },
    {
      name: 'Lens Protocol',
      description:
        'A decentralised social graph For Reviews and Ratings of your Brand.',
    },
    {
      name: 'Push Chat',
      description: 'A decentralized push notification service in realtime',
    },
    {
      name: 'Valist',
      description: 'A easy App Deployment and management service',
    },
    {
      name: 'ENS',
      description: 'A decentralized domain name service for every Brand',
    },
    {
      name: 'Covalent',
      description:
        'A decentralized API for blockchain data and Brand NFT metadata is retrieved',
    },
    {
      name: 'The Graph',
      description: 'A decentralized protocol for indexing and querying data',
    },
  ];

  const steps = [
    {
      id: 'Step 1',
      name: 'Sign In using Biconomy',
      href: '/signin',
      status: 'complete',
    },
    {
      id: 'Step 2',
      name: 'Search Other Brand Listings',
      href: '/brands',
      status: 'complete',
    },
    {
      id: 'Step 3',
      name: 'Create your Brand(NFT)',
      href: '/create-listing',
      status: 'complete',
    },
    {
      id: 'Step 4',
      name: 'View your Brand',
      href: '/view-listing',
      status: 'complete',
    },
  ];

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#landing" className="-m-1.5 p-1.5">
                <span className="sr-only">Decentradial</span>
                <img className="h-12 md:px-24" src="logo.png" alt="" />
              </a>
            </div>

            <div className=" lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="/signin"
                className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Login
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="flex align-items">
                <div className="md:px-24 md:py-12">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-left sm:text-6xl ">
                    Create your own <br /> Brand Resource Center on Web3
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-left mr-20">
                    A comprehensive built-in Digital Asset Management Software{' '}
                    <br /> that enables users to bulk upload, store, centralise,
                    track, and customize all your brand assets and unlimited
                    files in a single click.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-start">
                    <a
                      href="/signin"
                      className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white text-left shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                    >
                      Sign in to get started
                      <span className="text-red-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
                <img
                  className="object-cover shadow-2xl h-96"
                  src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBkaXJlY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" py-14 sm:py-12 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-red-600">
              About Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get closer to managing your digital assets by 'DAMing it in a
              single click'
            </p>
            <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
              Most Brands have their own whitelabel branding page with brand
              guidelines and assets for download. From looking for lost logos to
              customize them following the brand guidelines, it is arduous to
              have and track them all under one roof. DAM provides a solution by
              letting you define your brand collateral based on your
              organisation’s guidelines making it flexible-to-use. Additionally,
              it paves the way for creative martech allowing you to view other
              brand's templates. It's unrivaled benefit is that each brand will
              be minted as NFTs.
            </p>
          </div>
          <div className=" py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-red-600">
                  Technologies Used
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  To make it more powerful than ever
                </p>{' '}
              </div>
              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
                  {features.map(feature => (
                    <div
                      key={feature.name}
                      className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                    >
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">
                          {feature.name}
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className=" py-24 sm:py-32 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="sm:text-center">
              <h2 className="text-lg font-semibold leading-8 text-red-600">
                How it works
              </h2>
              <p className="mt-2 text-3xl mb-28 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Follow the steps to get started
              </p>{' '}
            </div>
            <nav aria-label="Progress">
              <ol
                role="list"
                className="space-y-4 md:flex md:space-y-0 md:space-x-8"
              >
                {steps.map(step => (
                  <li key={step.name} className="md:flex-1">
                    {step.status === 'complete' ? (
                      <a
                        href={step.href}
                        className="group flex flex-col border-l-4 border-red-600 py-2 pl-4 hover:border-red-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                      >
                        <span className="text-sm font-medium text-red-600 group-hover:text-red-800">
                          {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    ) : step.status === 'current' ? (
                      <a
                        href={step.href}
                        className="flex flex-col border-l-4 border-red-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                        aria-current="step"
                      >
                        <span className="text-sm font-medium text-red-600">
                          {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    ) : (
                      <a
                        href={step.href}
                        className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                      >
                        <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          {step.id}
                        </span>
                        <span className="text-sm font-medium">{step.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-red-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-red-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 py-5" id="footer">
        Built with ❤️ for
        <br /> <span className="fw-bold">ETH India</span>
      </div>
    </div>
  );
}
