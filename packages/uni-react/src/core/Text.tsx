import styled from "styled-components";

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose
} from "styled-system";

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    gray?: boolean;
    bold?: boolean;
    mono?: boolean;
  };

const Text = styled.div<Props>`
  color: ${p => {
    if (typeof p.color !== "undefined") return p.color;
    if (p.gray) return p.theme.colors.gray5;
    return p.theme.colors.black;
  }};

  font-weight: ${p =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};

  display: inline;

  ${compose(color, layout, space, typography)};
`;

Text.defaultProps = {
  lineHeight: "short",
  fontSize: 2,
  gray: false,
  bold: false,
  mono: false
};

export default Text;
export { Props };
