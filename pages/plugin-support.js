import React from 'react'
import { pluginSupportData } from './../data'
import LayoutDefault from './../layouts/default'
import { SupportCard } from './../components'

const sortBy = [
  {
    prop: 'hasSupport',
    direction: -1,
  },
  {
    prop: 'supportComingSoon',
    direction: 1,
  },
]

const Page = () => {
  const sortedData = pluginSupportData.sort((a, b) => {
    let i = 0,
      result = 0
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i].prop] || -1 < b[sortBy[i].prop] || -1
          ? -1
          : a[sortBy[i].prop] || -1 > b[sortBy[i].prop] || -1
          ? 1
          : 0)
      i++
    }
    return result
  })
  return (
    <LayoutDefault pageTitle="Tailwind plugin support">
      {sortedData.map(SupportCard)}
    </LayoutDefault>
  )
}

export default Page
