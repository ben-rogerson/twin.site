import React from 'react'
import Main from '../../layouts/tailwindui'
import 'twin.macro'

export default () => (
  <Main>
    <div tw="w-full h-screen flex items-center justify-center">
      <h1 tw="text-gray-300 text-2xl leading-9 font-extrabold tracking-tight sm:text-6xl sm:leading-10">
        <a href="https://tailwindui.com/preview" tw="text-teal-400">
          {' '}
          Tailwind UI
        </a>{' '}
        +{' '}
        <a
          href="https://github.com/ben-rogerson/twin.macro"
          tw="text-purple-700"
        >
          Twin.macro
        </a>
      </h1>
      <p tw="text-gray-500 mt-2"></p>
    </div>
  </Main>
)
