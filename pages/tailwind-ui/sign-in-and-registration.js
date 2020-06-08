import React from 'react'
import Main from './../../Layouts/TailwindUi'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div tw="max-w-md w-full">
        <div>
          <img
            tw="mx-auto h-12 w-auto"
            src="/static/workflow-mark-on-white.svg"
            alt="Workflow"
          />
          <h2 tw="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p tw="mt-2 text-center text-sm leading-5 text-gray-600">
            Or{' '}
            <a
              href="/"
              tw="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form tw="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div tw="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                tw="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div tw="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                tw="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div tw="mt-6 flex items-center justify-between">
            <div tw="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                tw="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="remember_me"
                tw="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div tw="text-sm leading-5">
              <a
                href="/"
                tw="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div tw="mt-6">
            <button
              type="submit"
              className="group"
              tw="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span tw="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  tw="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </Main>
)
