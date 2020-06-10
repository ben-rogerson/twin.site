import React from 'react'
import Head from 'next/head'
import tw, { css } from 'twin.macro'
import { LogoWhite } from './../components'

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
    <LogoWhite />
  </div>
)

export default IndexPage
