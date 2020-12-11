const pluginSupportData = [
  {
    name: 'Typography',
    url: 'https://github.com/tailwindcss/typography',
    isOfficialPlugin: true,
    hasSupport: true,
    hasV2Support: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/tailwindcss/typography',
      },
    ],
  },
  {
    name: '@tailwindcss/forms',
    url: 'https://github.com/tailwindlabs/tailwindcss-forms',
    isOfficialPlugin: true,
    hasV2Support: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/tailwindlabs/tailwindcss-forms',
      },
    ],
  },
  {
    name: '@tailwindcss/aspect-ratio',
    url: 'https://github.com/webdna/tailwindcss-aspect-ratio',
    hasSupport: true,
    hasV2Support: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/webdna/tailwindcss-aspect-ratio',
      },
    ],
  },
  {
    name: '@tailwindcss/typography',
    url: 'https://github.com/benface/tailwindcss-typography',
    hasSupport: true,
    hasV2Support: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/benface/tailwindcss-typography',
      },
    ],
  },
  {
    name: 'Gradients',
    url: 'https://github.com/benface/tailwindcss-gradients',
    hasSupport: true,
    hasV2Support: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/benface/tailwindcss-gradients',
      },
    ],
  },
  {
    name: 'Dark Mode',
    url: 'https://github.com/ChanceArthur/tailwindcss-dark-mode',
    hasSupport: false,
  },
  {
    name: 'Theming',
    url: 'https://github.com/innocenzi/tailwindcss-theming',
    hasSupport: false,
  },
  {
    name: 'Interaction Variants',
    url: 'https://github.com/benface/tailwindcss-interaction-variants',
    hasSupport: false,
  },
  {
    name: 'Children',
    url: 'https://github.com/benface/tailwindcss-children',
    hasSupport: false,
  },
  {
    name: 'Important',
    url: 'https://github.com/chasegiunta/tailwindcss-important',
    hasSupport: false,
    notes: (
      <>
        Alternative: Use the trailing bang to selectively add important to each
        class, eg: <code>tw`flex!`</code>
      </>
    ),
  },
]

const githubLink = 'https://github.com/ben-rogerson/twin.macro'
const discordLink = 'https://discord.gg/n8ZhNSb'

export { pluginSupportData, githubLink, discordLink }
