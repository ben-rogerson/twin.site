import React from 'react'
import tw from 'twin.macro'
import { Icons } from './../components'

const Card = {
  Container: tw.div`py-6 md:flex`,
  TitleGroup: tw.a`block md:pr-6 md:w-1/3 pb-6 md:py-6`,
  SupportGroup: tw.div`md:px-6 md:w-1/3 flex items-center space-x-2`,
  LinkGroup: tw.div`md:pl-6 md:w-1/3 flex items-center md:justify-end`,
  Group: tw.div`px-6`,
  Title: tw.div`text-xl flex text-black items-center`,
  Url: tw.div`text-gray-600 group-hocus:text-gray-800`,
  Support: tw.div`text-purple-600`,
  Notes: tw.div`bg-gray-100 text-gray-600 rounded-lg mb-6 px-6 py-3`,
}

const Supported = () => (
  <div tw="text-sm rounded-full px-4 py-1 uppercase tracking-wider inline-flex items-center justify-center bg-purple-100 text-purple-800">
    <div tw="mr-2 text-lg text-purple-500">{Icons.tick}</div> Supported
  </div>
)

const Unsupported = () => (
  <div tw="text-sm rounded-full px-4 py-1 uppercase tracking-wider inline-flex items-center justify-center bg-gray-100">
    <div tw="mr-2 text-lg text-gray-500">{Icons.cross}</div> Unsupported
  </div>
)

const OfficialSeal = tw(Icons.tailwind)`ml-2 text-green-500`

const Link = ({ title, url }) => {
  if (!url)
    return (
      <div
        key={title}
        tw="text-lg pr-4 md:px-4 py-4 inline-flex items-center cursor-not-allowed"
      >
        <div tw="text-gray-400">{title}</div>
        <div tw="ml-2 text-gray-400">{Icons.arrowRight}</div>
      </div>
    )
  return (
    <a
      key={title}
      href={url}
      target="_blank"
      className="group"
      tw="text-lg pr-4 md:px-4 py-4 inline-flex items-center"
    >
      <div tw="text-purple-800 group-hocus:text-purple-600">{title}</div>
      <div tw="ml-2 text-purple-400">{Icons.arrowRight}</div>
    </a>
  )
}

export default ({ name, url, isOfficialPlugin, hasSupport, notes, links }) => (
  <div key={name}>
    <Card.Container>
      <Card.TitleGroup href={url} target="_blank" className="group">
        <Card.Title>
          {name}
          {isOfficialPlugin && <OfficialSeal />}
        </Card.Title>
        <Card.Url>
          {url.replace('https://github.com/', '').replace('https://', '')}
        </Card.Url>
      </Card.TitleGroup>

      <Card.SupportGroup>
        {hasSupport ? <Supported /> : <Unsupported />}
      </Card.SupportGroup>

      {links?.length > 0 && <Card.LinkGroup>{links.map(Link)}</Card.LinkGroup>}
    </Card.Container>
    {notes && <Card.Notes>{notes}</Card.Notes>}
  </div>
)
