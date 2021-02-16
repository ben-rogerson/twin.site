import React from 'react'
import Head from 'next/head'
import tw, { css } from 'twin.macro'
import { Logo } from './../components'

const IndexPage = () => (
  <div
    css={[
      tw`flex justify-center items-center h-screen`,
      css`
        background: linear-gradient(#db00ff, #0047ff);
      `,
    ]}
  >
    <Head>
      <title>Twin - Use Tailwind classes within css-in-js libraries</title>
    </Head>
    <div tw="bg-white py-20 px-28 rounded shadow-inner">
      <Logo tw="block -ml-1 w-40 sm:w-40" />
    </div>
  </div>
)

export default IndexPage
