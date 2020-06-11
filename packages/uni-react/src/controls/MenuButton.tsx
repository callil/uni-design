import styled from 'styled-components'
import { MenuButton as _MenuButton, MenuButtonProps } from '@reach/menu-button'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { Theme } from '@callil/uni-tokens'

type Props = MenuButtonProps &
  SpaceProps &
  TypographyProps & {
    sm: boolean
    wide: boolean
    narrow: boolean
    border: boolean
    caution: boolean
    primary: boolean
  }

type BoxInput = Props & { theme: Theme }

const defaultBox = (p: BoxInput) => `
    border-color: ${p.theme.colors.white};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
    * {
      fill: ${p.theme.colors.gray5};
    }

    &:hover {
      border-color: ${p.theme.colors.gray0};
      background-color: ${p.theme.colors.gray0};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.primary};
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:active {
      border-color: ${p.theme.colors.primary};
      background-color: ${p.theme.colors.primary};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `

const cautionBox = (p: BoxInput) => `
    border-color: ${p.theme.colors.white};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.caution};
    * {
      fill: ${p.theme.colors.caution};
    }

    &:hover {
      border-color: ${p.theme.colors.red0};
      background-color: ${p.theme.colors.red0};
      * {
        fill: ${p.theme.colors.caution};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.caution};
      * {
        fill: ${p.theme.colors.caution};
      }
    }

    &:active {
      border-color: ${p.theme.colors.caution};
      background-color: ${p.theme.colors.caution};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `

const disabledBox = (p: BoxInput) => `
    &:disabled {
      cursor: not-allowed;
      border-color: ${p.theme.colors.gray0};
      background-color: ${p.theme.colors.gray0};
      color: ${p.theme.colors.gray5};
    }
  `

// Bordered

const defaultBoxBordered = (p: BoxInput) => `
    border-color: ${p.theme.colors.gray2};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
    * {
      fill: ${p.theme.colors.gray5};
    }

    &:hover {
      background-color: ${p.theme.colors.gray0};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.primary};
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:active {
      border-color: ${p.theme.colors.primary};
      background-color: ${p.theme.colors.primary};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `

const cautionBoxBordered = (p: BoxInput) => `
    border-color: ${p.theme.colors.caution};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.caution};
    * {
      fill: ${p.theme.colors.caution};
    }

    &:hover {
      background-color: ${p.theme.colors.red0};
      * {
        fill: ${p.theme.colors.caution};
      }
    }

    &:focus {
      * {
        fill: ${p.theme.colors.caution};
      }
    }

    &:active {
      background-color: ${p.theme.colors.caution};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `

const disabledBoxBordered = (p: BoxInput) => `
    &:disabled {
      cursor: not-allowed;
      border-color: ${p.theme.colors.gray2};
      background-color: ${p.theme.colors.gray0};
      color: ${p.theme.colors.gray5};
    }
  `

const MenuButton = styled(_MenuButton)<Props>`
    box-style: border
    border: 0;
    outline: none;
    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    line-height: 1.2;

    min-width: ${(p) => (p.narrow ? 0 : p.theme.sizes[10])}px;

    width: ${(p) => (p.wide ? '100%' : 'auto')};

    padding: ${(p) => {
      if (p.sm) return `${p.theme.space[1]}px ${p.theme.space[2]}px`
      return `${p.theme.space[2]}px ${p.theme.space[3]}px`
    }};

    border-radius: ${(p) => p.theme.radii[2]}px;
    border-width: 1px;
    border-style: solid;

    border-color: ${(p) => (p.border ? p.theme.gray1 : p.theme.white)};
    background-color: ${(p) => p.theme.white};
    color: ${(p) => p.theme.black};

    ${(p) => {
      if (p.border) {
        if (p.disabled) return disabledBoxBordered(p)
        if (p.caution) return cautionBoxBordered(p)
        return defaultBoxBordered(p)
      } else {
        if (p.disabled) return disabledBox(p)
        if (p.caution) return cautionBox(p)
        return defaultBox(p)
      }
    }}

    ${space}
    ${typography}
  `

MenuButton.defaultProps = {
  fontSize: 2,
  sm: false,
  wide: false,
  narrow: false,
  border: false,
  caution: false,
  primary: false,
}

export default MenuButton
