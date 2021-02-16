import React from 'react'
import tw from 'twin.macro'
import { Icon } from './../components'

const Support = ({
  hasSupport,
  icon = hasSupport === false ? Icon.cross : Icon.tick,
  label = hasSupport === false ? 'Unsupported' : 'Supported',
}) => (
  <>
    {label && (
      <div
        css={[
          tw`text-sm rounded-full px-4 py-1 uppercase tracking-wider inline-flex items-center justify-center cursor-default whitespace-no-wrap`,
          hasSupport ? tw`bg-purple-100 text-purple-800` : tw`bg-gray-100`,
        ]}
      >
        <div
          css={[
            tw`mr-2 text-base xl:text-lg`,
            hasSupport ? tw`text-twin` : tw`text-gray-500`,
          ]}
        >
          {icon}
        </div>
        {label}
      </div>
    )}
  </>
)

const OfficialSeal = tw(Icon.tailwind)`inline-block text-2xl text-green-500`

const Link = ({ title, url, hasSupport }) => (
  <a
    key={url}
    as={!url && 'div'}
    href={url || null}
    target={url ? '_blank' : null}
    className="group"
    css={[
      tw`flex pr-2 md:pr-4 md:px-4 py-2 md:inline-flex items-center`,
      !url && tw`cursor-not-allowed`,
    ]}
  >
    <div
      css={[
        tw`text-xl whitespace-no-wrap`,
        (!hasSupport && tw`text-gray-500`) ||
          (url && tw`text-purple-800 group-hocus:text-gray-800`) ||
          tw`text-gray-300`,
      ]}
    >
      {title}
    </div>
    <div
      css={[
        tw`text-2xl pl-1 ml-auto md:ml-0`,
        (!hasSupport && tw`text-gray-400`) ||
          (url && tw`text-twin group-hocus:text-gray-500`) ||
          tw`text-gray-200`,
      ]}
    >
      {Icon.arrowRight}
    </div>
  </a>
)

export default ({
  name,
  url,
  isOfficialPlugin,
  notes,
  links,
  hasSupport,
  urlDisplay = url?.replace('https://github.com/', '').replace('https://', ''),
  ...rest
}) => (
  <div key={url}>
    <div tw="py-7 md:py-4 xl:px-0 md:flex">
      <a
        tw="block sm:w-72 xl:w-96 xl:flex-shrink-0 pb-6 md:pt-6 md:pr-6"
        href={url}
        target="_blank"
        className="group"
      >
        <div tw="text-2xl space-x-2 text-black items-center align-middle">
          <span>{name}</span>
          {isOfficialPlugin && <OfficialSeal />}
        </div>
        <div tw="flex items-center group-hocus:text-black space-x-1">
          <div tw="truncate">{urlDisplay}</div>
          <div tw="opacity-0 group-hocus:opacity-100 text-gray-400">
            {Icon.arrowRight}
          </div>
        </div>
      </a>

      <div tw="md:px-6 md:w-1/3 flex md:py-6 items-start xl:items-center space-x-2">
        <Support {...rest} {...{ hasSupport }} />
      </div>

      <div tw="flex flex-col xl:flex-row xl:items-center xl:justify-end divide-y md:divide-y-0 mt-5 md:mt-4 lg:mt-0 md:pl-6 md:ml-auto md:w-56 lg:w-72 xl:w-full">
        {links?.map(link => (
          <Link {...link} {...{ hasSupport }} />
        ))}
      </div>
    </div>

    {notes && (
      <div tw="bg-gray-50 text-gray-600 rounded-lg -mt-3 mb-6 px-6 py-3">
        {notes}
      </div>
    )}
  </div>
)
