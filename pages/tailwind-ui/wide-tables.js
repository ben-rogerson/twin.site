import React from 'react'
import Main from './../../Layouts/TailwindUi'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="flex flex-col">
      <div tw="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div tw="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table tw="min-w-full">
            <thead>
              <tr>
                <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th tw="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody tw="bg-white">
              <tr>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="flex items-center">
                    <div tw="flex-shrink-0 h-10 w-10">
                      <img
                        tw="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div tw="ml-4">
                      <div tw="text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </div>
                      <div tw="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="text-sm leading-5 text-gray-900">Director</div>
                  <div tw="text-sm leading-5 text-gray-500">
                    Human Resources
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span tw="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="/" tw="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="flex items-center">
                    <div tw="flex-shrink-0 h-10 w-10">
                      <img
                        tw="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div tw="ml-4">
                      <div tw="text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </div>
                      <div tw="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="text-sm leading-5 text-gray-900">Director</div>
                  <div tw="text-sm leading-5 text-gray-500">
                    Human Resources
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span tw="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="/" tw="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="flex items-center">
                    <div tw="flex-shrink-0 h-10 w-10">
                      <img
                        tw="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div tw="ml-4">
                      <div tw="text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </div>
                      <div tw="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div tw="text-sm leading-5 text-gray-900">Director</div>
                  <div tw="text-sm leading-5 text-gray-500">
                    Human Resources
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span tw="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="/" tw="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td tw="px-6 py-4 whitespace-no-wrap">
                  <div tw="flex items-center">
                    <div tw="flex-shrink-0 h-10 w-10">
                      <img
                        tw="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div tw="ml-4">
                      <div tw="text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </div>
                      <div tw="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap">
                  <div tw="text-sm leading-5 text-gray-900">Director</div>
                  <div tw="text-sm leading-5 text-gray-500">
                    Human Resources
                  </div>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap">
                  <span tw="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  Owner
                </td>
                <td tw="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="/" tw="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Main>
)
