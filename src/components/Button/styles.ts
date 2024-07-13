import styled, { DefaultTheme } from "styled-components/native";

interface StyledButtonProps {
  customStyle?: {
    backgroundColor?: string;
    height?: string;
    paddingTop?: string;
    paddingBottom?: string;
    margin?: string;
    borderRadius?: string;
  };
}

const getCustomStyle = (props: StyledButtonProps & { theme: DefaultTheme }) => `
  height: ${props.customStyle?.height || '49px'};
  padding-top: ${props.customStyle?.paddingTop || '12px'};
  padding-bottom: ${props.customStyle?.paddingBottom || '12px'};
  margin: ${props.customStyle?.margin || '24px'};
  background-color: ${props.customStyle?.backgroundColor || props.theme.colors.background_secondary};
  border-radius: ${props.customStyle?.borderRadius || '0px'};
`;

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  ${getCustomStyle}
  width: 100%;
  align-items: center;
`;
// export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
//   height: 49px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   margin: 24px;
//   background-color: ${(props: any) => props.customStyle?.backgroundColor || (props.theme as DefaultTheme).colors.background_secondary};
//   /* background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background_secondary}; */
//   width: 100%;
//   align-items: center;
//   border-radius: ${(props: any) => props.customStyle?.borderRadius || '0px'};
// `;

export const StyledText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_primary};
  font-size: 18px;
`
