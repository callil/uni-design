import * as React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { LayoutProps, SpaceProps } from 'styled-system';
import { Theme } from '@callil/uni-tokens';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';

import { Box } from '../core/index';

type Props = LayoutProps &
  SpaceProps & {
    caption?: string;
    placeholder?: string;
    label?: string;
    id: string;
    disabled?: boolean;
    rows?: number;
    cols?: number;
  };

type StyledProps = {
  hasError?: boolean;
  hasSuccess?: boolean;
};

type BoxInput = StyledProps & { theme: Theme };

const defaultBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.black};

  caret-color: ${p.theme.colors.primary};

  &:hover {}

  &:focus {
    border-color: ${p.theme.colors.primary};
  }
`;

const errorBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.yellow1};
  background-color: ${p.theme.colors.red0};
  color: ${p.theme.colors.yellow1};

  caret-color: ${p.theme.colors.yellow1};

  &:hover {}

  &:focus {
    background-color: ${p.theme.colors.white};
  }
`;

const disabledBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.gray0};
  color: ${p.theme.colors.gray5};

  &:hover {}

  &:focus {}
`;

const StyledTextArea = styled.textarea<StyledProps>`
  outline: none;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;

  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[1]}px;

  width: 100%;
  resize: vertical;
  min-height: ${p => p.theme.sizes[7]}px;

  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.short};

  border-radius: ${p => p.theme.radii[2]}px;

  ${p => {
    if (p.disabled) return disabledBox(p);
    if (p.hasError) return errorBox(p);
    return defaultBox(p);
  }};

  &:disabled {
    cursor: not-allowed;
  }
`;

const TextArea = ({
  label,
  rows,
  cols,
  caption,
  disabled,
  id,
  placeholder,
  ...props
}: Props) => {
  const [field, meta] = useField(id);
  return (
    <Box {...props}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {caption ? <InputCaption>{caption}</InputCaption> : null}
      <StyledTextArea
        rows={rows}
        cols={cols}
        spellCheck={false}
        hasError={meta.touched && meta.error !== undefined}
        disabled={disabled}
        placeholder={placeholder}
        {...field}
      />
      <ErrorMessage>
        {meta.touched && meta.error ? meta.error : null}
      </ErrorMessage>
    </Box>
  );
};

TextArea.defaultProps = {
  rows: 8,
};

export default TextArea;
