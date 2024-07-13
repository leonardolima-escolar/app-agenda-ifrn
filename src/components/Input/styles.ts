import styled, { DefaultTheme } from "styled-components/native";

interface StyledInputProps {
  customStyle?: {
    paddingLeft?: string;
    paddingRight?: string;
    margin?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: string;
    border?: string;
    height?: string;
    width?: string;
    // placeholderColor?: string;
  };
}

const getCustomInputStyle = (props: StyledInputProps & { theme: DefaultTheme }) => `
  padding-left: ${props.customStyle?.paddingLeft || '16px'};
  padding-right: ${props.customStyle?.paddingRight || '16px'};
  margin: ${props.customStyle?.margin || '15px'};
  color: ${props.customStyle?.color || props.theme.colors.text_secondary};
  background-color: ${props.customStyle?.backgroundColor || props.theme.colors.background_primary};
  border-radius: ${props.customStyle?.borderRadius || '5px'};
  border: ${props.customStyle?.border || '0px'};
  height: ${props.customStyle?.height || '42px'};
  width: ${props.customStyle?.width || '100%'};
`;

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: ({ theme }: { theme: DefaultTheme }) => theme.colors.placeholder
})<StyledInputProps>`
  ${getCustomInputStyle}
`;
