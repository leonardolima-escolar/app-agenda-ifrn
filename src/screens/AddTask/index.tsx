import { StatusBar } from "expo-status-bar";
import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";

export function AddTask() {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Title>ADD</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
