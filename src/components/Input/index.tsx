import { TextInputProps } from "react-native";
import { StyledInput } from "./styles";

interface InputProps extends TextInputProps {
  placeholderText: string;
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

export function Input({ placeholderText, customStyle, ...props }: InputProps){
  return (
    <StyledInput
      placeholder={placeholderText}
      customStyle={customStyle}
      {...props}
    />
  );
};
