import { StatusBar } from "expo-status-bar";
import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";

export function TaskList() {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Title>Task</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
