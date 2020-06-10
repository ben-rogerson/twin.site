import React from 'react'
import Head from 'next/head'
import tw, { css } from 'twin.macro'
import { createGlobalStyle } from 'styled-components'
import { githubLink, discordLink } from './../data'
import { Logo, Icon } from './../components'

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`bg-twin`}
  }
  ::selection {
    ${tw`bg-twin text-white`}
  }
`

const Link = tw.a`inline-block text-gray-700 hocus:text-twin`

const DefaultLayout = ({ pageTitle, title, children }) => (
  <>
    <Head>
      <title>
        {(pageTitle && `${pageTitle} | Twin`) ||
          'Twin - Use Tailwind classes within css-in-js libraries'}
      </title>
    </Head>
    <GlobalStyle />
    <div
      css={[
        tw`absolute left-0 top-0 right-0 left-0 right-0 h-8 md:h-16`,
        css`
          background: linear-gradient(#db00ff, #fff);
          opacity: 0.15;
        `,
      ]}
    />
    <div tw="text-gray-600 space-y-12 md:space-y-15 px-1/12 sm:px-15 xl:px-24 py-8 md:py-16 bg-white">
      <header tw="flex items-center relative z-10">
        <Logo />
        <div tw="w-full text-right space-x-8 items-center">
          <Link
            href={discordLink}
            target="_blank"
            tw="text-3xl sm:text-4xl -mb-1"
            aria-label="Discord link"
          >
            {Icon.discord}
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            tw="text-2xl sm:text-3xl"
            aria-label="Github link"
          >
            {Icon.github}
          </Link>
        </div>
      </header>
      <main tw="space-y-12 md:space-y-15">
        <div tw="pt-10">
          <h1 tw="text-3xl xl:text-4xl text-gray-800 tracking-tight">
            {title || pageTitle}
          </h1>
        </div>
        <div tw="md:divide-y">{children}</div>
      </main>
    </div>
  </>
)

export default DefaultLayout
