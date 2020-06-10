import React from 'react'
import { pluginSupportData } from './../data'
import LayoutDefault from './../layouts/default'
import { SupportCard } from './../components'

const Page = () => (
  <LayoutDefault pageTitle="Tailwind plugin support">
    {pluginSupportData
      .sort((a, b) => b.hasSupport - a.hasSupport)
      .map(SupportCard)}
  </LayoutDefault>
)

export default Page
