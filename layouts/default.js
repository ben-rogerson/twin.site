import React from 'react'
import Head from 'next/head'
import tw from 'twin.macro'
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
const TopGradient = tw.div`absolute left-0 top-0 right-0 h-8 md:h-16 bg-gradient-to-b from-electric to-white opacity-15`

const DefaultLayout = ({ pageTitle, title, children, ...rest }) => (
  <>
    <Head>
      <title>
        {(pageTitle && `${pageTitle} | Twin`) ||
          'Twin - Use Tailwind classes within css-in-js libraries'}
      </title>
    </Head>
    <GlobalStyle />
    <TopGradient />
    <div tw="text-gray-600 space-y-12 md:space-y-14 px-[8%] sm:px-16 xl:px-24 py-8 md:py-16 bg-white min-h-screen">
      <header tw="flex items-center relative z-10">
        <Logo tw="w-32 sm:w-36" />
        <div tw="w-full text-right space-x-8 items-center">
          <Link
            href={discordLink}
            target="_blank"
            tw="text-3xl sm:text-4xl -mb-1"
            aria-label="Discord link"
          >
            <Icon.discord />
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            tw="text-2xl sm:text-3xl"
            aria-label="Github link"
          >
            <Icon.github />
          </Link>
        </div>
      </header>
      <main tw="space-y-12 md:space-y-14">
        <div tw="pt-10">
          {typeof title === 'function' ? (
            title
          ) : (
            <h1 tw="text-3xl xl:text-4xl text-gray-800 tracking-tight">
              {title}
            </h1>
          )}
        </div>
        <div {...rest}>{children}</div>
      </main>
    </div>
  </>
)

export default DefaultLayout
