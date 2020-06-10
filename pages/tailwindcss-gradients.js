import React from 'react'
import tw from 'twin.macro'
import LayoutDefault from './../layouts/default'

const Gradient = ({ children, ...rest }) => (
  <div tw="text-white w-full pt-24" {...rest}>
    <div tw="bg-black bg-opacity-75 px-3 py-2">tw="{children}"</div>
  </div>
)

const Code = ({ children, ...rest }) => (
  <pre tw="bg-gray-100 px-10 py-7 rounded overflow-auto" {...rest}>
    {children}
  </pre>
)

const H2 = tw.h2`text-2xl xl:text-3xl text-gray-800 tracking-tight`

const Page = () => (
  <LayoutDefault pageTitle="Tailwindcss Gradients">
    <div tw="space-y-10">
      <H2>Examples</H2>
      <div tw="space-y-3">
        <Gradient tw="bg-gradient-r-red">bg-gradient-r-red</Gradient>
        <Gradient tw="bg-gradient-r-red-blue">bg-gradient-r-red-blue</Gradient>
        <Gradient tw="bg-gradient-r-red-green-blue">
          bg-gradient-r-red-green-blue
        </Gradient>
        <Gradient tw="bg-gradient-r-black-white-with-stops">
          bg-gradient-t-black-white-with-stops
        </Gradient>
      </div>

      <H2>Installation</H2>
      <Code tw="bg-green-100">npm i tailwindcss-gradients</Code>
      <Code>
        {`module.exports = {
  theme: {
    linearGradientColors: {
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
  },
  plugins: [
    require('tailwindcss-gradients')
  ],
}`}
      </Code>
    </div>
  </LayoutDefault>
)

export default Page
