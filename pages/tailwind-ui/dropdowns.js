import React from 'react'
import Main from '../../layouts/tailwindui'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="relative inline-block text-left">
      <div>
        <span tw="rounded-md shadow-sm">
          <button
            type="button"
            tw="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          >
            Options
            <svg
              tw="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div tw="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg">
        <div tw="rounded-md bg-white shadow-xs">
          <div tw="py-1">
            <a
              href="/"
              tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              Account settings
            </a>
            <a
              href="/"
              tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              Support
            </a>
            <a
              href="/"
              tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                tw="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Main>
)
