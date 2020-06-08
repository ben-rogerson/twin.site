import React from 'react'
import Main from '../../layouts/tailwindui'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="bg-gray-50">
      <div tw="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 tw="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span tw="text-indigo-600">Start your free trial today.</span>
        </h2>
        <div tw="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div tw="inline-flex rounded-md shadow">
            <a
              href="/"
              tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div tw="ml-3 inline-flex rounded-md shadow">
            <a
              href="/"
              tw="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </Main>
)
