import React from 'react'
import { pluginSupportData } from './../data'
import LayoutDefault from './../layouts/default'
import { SupportCard } from './../components'
import { sort } from 'timsort'

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

const multiSort = (a, b) => {
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
}

const Page = () => {
  // TODO: Cache this data and sort once
  sort(pluginSupportData, multiSort)
  return (
    <LayoutDefault pageTitle="Tailwind plugin support">
      {pluginSupportData.map(SupportCard)}
    </LayoutDefault>
  )
}

export default Page
