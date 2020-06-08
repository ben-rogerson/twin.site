import React from 'react'
import tw, { css } from 'twin.macro'

const ErrorPage = () => (
  <div
    css={[
      tw`flex justify-center items-center h-screen text-4xl font-bold`,
      css`
        background: linear-gradient(#db00ff, #0047ff);
      `,
    ]}
  >
    Not found
  </div>
)

export default ErrorPage
