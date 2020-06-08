import React from 'react'
import tw from 'twin.macro'
import { pluginSupportData } from './../data'
import { Logo, SupportCard } from './../components'

const Container = tw.div`container text-gray-600 md:space-y-10 pb-16 md:pb-24 pt-8 md:pt-16`
const Heading = tw.h1`text-3xl font-bold text-gray-800`
const Introduction = tw.div`space-y-3`
const Content = tw.main`space-y-5`
const Support = tw.main`divide-y`

const Page = () => (
  <Container>
    <Logo />
    <Introduction>
      <Heading>Plugin support</Heading>
      <p>Here's a list of popular plugins and their support level</p>
    </Introduction>
    <Content>
      <Support>
        {pluginSupportData
          .sort((a, b) => b.hasSupport - a.hasSupport)
          .map(SupportCard)}
      </Support>
    </Content>
  </Container>
)

export default Page
