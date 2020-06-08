const pluginSupportData = [
  {
    name: 'Tailwind UI',
    url: 'https://tailwindui.com/documentation',
    isOfficialPlugin: true,
    hasSupport: true,
    notes: 'All free components have been tested',
    links: [
      {
        title: 'React Components',
        url:
          'https://github.com/ben-rogerson/twin.site/tree/master/pages/tailwind-ui',
      },
      { title: 'Demo', url: '/tailwind-ui' },
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
    name: 'Aspect Ratio',
    url: 'https://github.com/webdna/tailwindcss-aspect-ratio',
    hasSupport: true,
    links: [{ title: 'CodeSandbox', url: '' }],
  },
  {
    name: 'Typography',
    url: 'https://github.com/benface/tailwindcss-typography',
    hasSupport: true,
    links: [{ title: 'CodeSandbox', url: '' }],
  },
  {
    name: 'Gradients',
    url: 'https://github.com/benface/tailwindcss-typography',
    hasSupport: true,
    links: [{ title: 'CodeSandbox', url: '' }],
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
    notes: 'Every variant this plugin introduces is already built-in to Twin',
  },
  {
    name: 'Important',
    url: 'https://github.com/chasegiunta/tailwindcss-important',
    hasSupport: false,
    notes:
      'Instead you can use the trailing bang to selectively add important to each class',
  },
]

export { pluginSupportData }
