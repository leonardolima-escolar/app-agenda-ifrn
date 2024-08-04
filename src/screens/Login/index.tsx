import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { router } from "expo-router";

export function Login() {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Title>Agenda IFRN</Title>
      <Input placeholderText="Login" />
      <Input placeholderText="Senha" />
      <Button onPress={() => router.push('/(tabs)')}>Entrar</Button>
    </Container>
  );
}
