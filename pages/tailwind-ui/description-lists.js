import React from 'react'
import Main from './../../Layouts/TailwindUi'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="bg-white shadow overflow-hidden sm:rounded-lg">
      <div tw="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 tw="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <p tw="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div>
        <dl>
          <div tw="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">Full name</dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Margot Foster
            </dd>
          </div>
          <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">
              Application for
            </dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Backend Developer
            </dd>
          </div>
          <div tw="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">
              Email address
            </dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              margotfoster@example.com
            </dd>
          </div>
          <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              $120,000
            </dd>
          </div>
          <div tw="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">About</dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt tw="text-sm leading-5 font-medium text-gray-500">
              Attachments
            </dt>
            <dd tw="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <ul tw="border border-gray-200 rounded-md">
                <li tw="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div tw="w-0 flex-1 flex items-center">
                    <svg
                      tw="flex-shrink-0 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span tw="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div tw="ml-4 flex-shrink-0">
                    <a
                      href="/"
                      tw="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li tw="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div tw="w-0 flex-1 flex items-center">
                    <svg
                      tw="flex-shrink-0 h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span tw="ml-2 flex-1 w-0 truncate">
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div tw="ml-4 flex-shrink-0">
                    <a
                      href="/"
                      tw="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </Main>
)
