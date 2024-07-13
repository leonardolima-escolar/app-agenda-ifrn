import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login({ navigation }: any) {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Title>Agenda IFRN</Title>
      <Input placeholderText="Login" />
      <Input placeholderText="Senha" />
      {/* <Button
        title="Entrar"
        onPress={() => navigation.navigate('Gerenciamento de Tarefas')}
      /> */}
      <Button onPress={() => navigation.navigate('Gerenciamento de Tarefas')}>Entrar</Button>
    </Container>
  );
}
