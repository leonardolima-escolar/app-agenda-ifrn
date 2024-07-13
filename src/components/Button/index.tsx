import { TouchableOpacityProps } from "react-native";
import { StyledButton, StyledText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  customStyle?: {
    backgroundColor?: string;
    height?: string;
    paddingTop?: string;
    paddingBottom?: string;
    margin?: string;
    borderRadius?: string;
  };
  onPress?: () => void
}

export function Button({ children, customStyle, onPress, ...props }: ButtonProps) {
  return (
    <StyledButton onPress={onPress} customStyle={customStyle}>
      <StyledText>
        {children}
      </StyledText>
    </StyledButton>
  );
};
