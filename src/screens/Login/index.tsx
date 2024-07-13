import { StatusBar } from "expo-status-bar";
import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";

export function Login() {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Title>Agenda IFRN</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
