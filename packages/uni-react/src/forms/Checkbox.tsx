import * as React from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { useField } from 'formik';
import { Theme } from '@callil/uni-tokens';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';

import { Box, Icon } from '../core/index';

type Props = LayoutProps &
  SpaceProps & {
    caption?: string;
    label: string;
    id: string;
    disabled?: boolean;
  };

type InternalProps = {
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
};

type BoxInput = InternalProps & { theme: Theme };

const offBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.white};
  * {
    fill:  ${p.theme.colors.white};
  }

  &:hover {
    border-color: ${p.theme.colors.gray5};
  }

  ${HiddenInput}:focus ~ & {
    border-color: ${p.theme.colors.primary};
  }
`;

const onBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.primary};
  background-color: ${p.theme.colors.primary};
  * {
    fill:  ${p.theme.colors.white};
  }
`;

const offBoxCaution = (p: BoxInput) => `
  border-color: ${p.theme.colors.yellow1};
  background-color: ${p.theme.colors.red0};
  * {
    fill:  ${p.theme.colors.white};
  }

  &:hover {
    border-color: ${p.theme.colors.yellow1};
  }

  ${HiddenInput}:focus ~ & {
    background-color: ${p.theme.colors.white};
    * {
      fill:  ${p.theme.colors.yellow1};
    }
  }
`;

const onBoxCaution = (p: BoxInput) => `
  border-color: ${p.theme.colors.yellow1};
  background-color: ${p.theme.colors.yellow1};
  * {
    fill:  ${p.theme.colors.white};
  }
`;

const disabledBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.gray0};
  * {
    fill:  ${p.theme.colors.gray5};
  }
`;

// Hide this input completely
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0px;
`;

const Label = styled.label<InternalProps>`
  display: block;
  position: relative;
  padding: 0px;
  padding-left: 24px;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const Indicator = styled.div<InternalProps>`
  position: absolute;
  top: ${p => (p.theme.fontSizes[2] - 12) / 2}px;
  left: 0px;
  height: 16px;
  width: 16px;
  border-radius: ${p => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  ${p => {
    if (p.disabled) return disabledBox(p);
    if (p.checked) return onBox(p);
    if (p.hasError && !p.checked) return offBoxCaution(p);
    if (p.hasError && p.checked) return onBoxCaution(p);
    return offBox(p);
  }};
`;

const Checkbox = ({ label, caption, id, disabled, ...props }: Props) => {
  const [field, meta] = useField({ name: id, type: 'checkbox' });
  return (
    <Box {...props}>
      <Label disabled={disabled} htmlFor={id}>
        <InputLabel>{label}</InputLabel>
        {caption ? <InputCaption pt="1">{caption}</InputCaption> : null}
        <HiddenInput
          {...field}
          value={id}
          name={id}
          id={id}
          disabled={disabled}
          type="checkbox"
        />
        <Indicator
          hasError={meta.touched && meta.error !== undefined}
          checked={field.checked}
          disabled={disabled}
        >
          {field.checked ? (
            <Icon
              position="absolute"
              top="0px"
              left="0px"
              size="14px"
              icon="CheckmarkBold"
            />
          ) : null}
        </Indicator>
        <ErrorMessage>
          {meta.touched && meta.error ? meta.error : null}
        </ErrorMessage>
      </Label>
    </Box>
  );
};

export default Checkbox;
