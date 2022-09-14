import React from 'react'
import Layout from './../layouts/default'
import 'twin.macro'
import { Icon } from '../components'

const Page = () => {
  return (
    <Layout pageTitle="Tailwind plugin support">
      <span tw="px-8 py-4 text-gray-800 bg-amber-50 border border-amber-200 inline-block rounded">
        In twin.macro@rc.4, full plugin support was added so any tailwindcss
        plugin can now be used 🎉
        <br />
        <a
          href="https://github.com/ben-rogerson/twin.macro/releases/tag/3.0.0-rc.4"
          target="_blank"
          tw="text-amber-600 hover:text-amber-700"
        >
          Release notes
        </a>
      </span>
      <div tw="mt-10">
        A good list of plugins can be found at
        <a
          target="_blank"
          href="https://github.com/aniftyco/awesome-tailwindcss#plugins"
          tw="text-black"
        >
          <Icon.github tw="inline-block ml-2 mr-1" />
          awesome-tailwindcss
        </a>
        .
      </div>
    </Layout>
  )
}

export default Page
