import React from 'react'
import tw from 'twin.macro'

const Container = tw.div`p-8 pl-64 bg-gray-50 h-screen`

const menuItems = [
  { slug: 'avatars', title: 'avatars' },
  { slug: 'cta-sections', title: 'cta sections' },
  { slug: 'description-lists', title: 'description-lists' },
  { slug: 'dropdowns-with-dividers', title: 'dropdowns-with-dividers' },
  { slug: 'dropdowns', title: 'dropdowns' },
  { slug: 'feature-sections', title: 'feature-sections' },
  { slug: 'headers', title: 'headers' },
  { slug: 'hero-sections', title: 'hero-sections' },
  { slug: 'input-groups', title: 'input-groups' },
  { slug: 'modals', title: 'modals' },
  { slug: 'navbars', title: 'navbars' },
  { slug: 'page-headings', title: 'page-headings' },
  { slug: 'pagination', title: 'pagination' },
  { slug: 'sign-in-and-registration', title: 'sign-in-and-registration' },
  { slug: 'stacked-layouts', title: 'stacked-layouts' },
  { slug: 'wide-tables', title: 'wide-tables' },
]

const Menu = () => (
  <div tw="absolute z-50 top-0 left-0 bottom-0 w-56 border-r shadow-sm text-white bg-white">
    <div tw="py-1">
      {menuItems.map(item => (
        <a
          key={item.slug}
          href={`/tailwind-ui/${item.slug}`}
          tw="text-gray-700 block px-4 py-2 text-sm leading-5 focus:outline-none hocus:bg-purple-500 hocus:text-white"
        >
          {item.title}
        </a>
      ))}
    </div>
  </div>
)

export default ({ children, ...rest }) => (
  <Container {...rest}>
    <Menu />
    <div>{children}</div>
  </Container>
)
