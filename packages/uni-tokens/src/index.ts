import dark from './themes/dark';
import light from './themes/light';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export type Theme = typeof light;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export { dark, light };
