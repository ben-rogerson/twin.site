const pluginSupportData = [
  {
    name: 'Typography',
    url: 'https://github.com/tailwindcss/typography',
    isOfficialPlugin: true,
    hasSupport: true,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/tailwindcss/typography',
      },
    ],
  },
  {
    name: 'Tailwind UI',
    url: 'https://tailwindui.com/documentation',
    isOfficialPlugin: true,
    hasSupport: true,
    links: [
      {
        title: 'Components',
        url:
          'https://github.com/ben-rogerson/twin.site/tree/master/pages/tailwind-ui',
      },
      { title: 'Demo', url: '/tailwind-ui' },
      { title: 'Website', url: 'https://tailwindui.com/documentation' },
    ],
  },
  {
    name: 'Custom forms',
    url: 'https://github.com/tailwindcss/custom-forms',
    isOfficialPlugin: true,
    hasSupport: true,
    links: [
      { title: 'CodeSandbox', url: '' },
      { title: 'Demo', url: 'https://tailwind-custom-forms-twin.netlify.app' },
      { title: 'GitHub', url: 'https://github.com/tailwindcss/custom-forms' },
    ],
  },
  {
    name: 'Aspect Ratio',
    url: 'https://github.com/webdna/tailwindcss-aspect-ratio',
    hasSupport: true,
    links: [
      { title: 'CodeSandbox', url: '' },
      {
        title: 'GitHub',
        url: 'https://github.com/webdna/tailwindcss-aspect-ratio',
      },
    ],
  },
  {
    name: 'Typography',
    url: 'https://github.com/benface/tailwindcss-typography',
    hasSupport: true,
    links: [
      { title: 'CodeSandbox', url: '' },
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
    links: [
      { title: 'CodeSandbox', url: '' },
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
