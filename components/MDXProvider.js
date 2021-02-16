import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './CodeBlock'

const mdComponents = {
  //   pre: props => <Code {...props} />,
  code: props => <Code {...props} />,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
