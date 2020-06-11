import * as React from 'react'
import styled from 'styled-components'
import { color, layout, space, typography, compose } from 'styled-system'
import { Link as RouterLink } from 'react-router-dom'
import { Row, Icon } from '@callil/uni-react'

const BreadcrumbLink = styled(RouterLink)`
  color: ${(p) => {
    if (typeof p.color !== 'undefined') return p.color
    if (p.gray) return p.theme.colors.gray5
    return p.theme.colors.black
  }};

  font-weight: ${(p) =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${(p) => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};
  text-decoration: none;

  display: inline;

  &:hover {
    color: ${(p) => p.theme.colors.black};
  }

  border-radius: ${(p) => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  padding: ${(p) => {
    // return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
    return `${p.theme.space[2]}px ${p.theme.space[3]}px`
  }};

  ${(p) => defaultBox(p)}

  ${compose(color, layout, space, typography)};
`

BreadcrumbLink.defaultProps = {
  lineHeight: 'short',
  fontSize: 2,
}

const defaultBox = (p) => `
  border-color: ${p.theme.colors.white};
  background-color: ${p.theme.colors.white};

  &:hover {
    border-color: ${p.theme.colors.gray0};
    background-color: ${p.theme.colors.gray0};
  }

  &:focus {
    border-color: ${p.theme.colors.primary};
    background-color: ${p.theme.colors.white};
  }
`

const Breadcrumbs = ({ pathname }) => {
  const pathTokenArray = pathname.slice(1).split('/')

  return (
    <Row alignItems="center">
      <BreadcrumbLink gray to="/">
        Home
      </BreadcrumbLink>
      {pathTokenArray.map((token, index) => {
        if (pathname === '/') return null
        return [
          <Icon
            key={`BreadcrumbIcon:${index}`}
            fill="gray"
            icon="ChevronEast"
          />,
          <BreadcrumbLink
            key={`BreadcrumbLink:${index}`}
            gray={pathTokenArray.length - 1 === index ? false : true}
            to={`/${token}`}
          >
            {token.charAt(0).toUpperCase() + token.slice(1)}
          </BreadcrumbLink>,
        ]
      })}
    </Row>
  )
}

export default Breadcrumbs
