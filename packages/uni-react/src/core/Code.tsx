import styled from "styled-components";

import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  compose
} from "styled-system";

type Props = BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {};

const Code = styled.code<Props>`
  border-radius: ${p => p.theme.radii[2]};
  ${compose(color, layout, space, typography, border)}
`;

Code.defaultProps = {
  fontFamily: "mono",
  bg: "gray0",
  // border: '1px solid',
  // borderColor: 'gray1',
  color: "black",
  fontSize: 2,
  padding: 1,
  paddingTop: "2px",
  paddingBottom: "2px",
  lineHeight: "short"
};

export default Code;
export { Props };
