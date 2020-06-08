import React from 'react'
import tw, { css } from 'twin.macro'
import { LogoWhite } from './../components'

const IndexPage = () => (
  <div
    css={[
      tw`flex justify-center items-center h-screen`,
      css`
        background: linear-gradient(#db00ff, #0047ff);
      `,
    ]}
  >
    <LogoWhite />
  </div>
)

export default IndexPage
