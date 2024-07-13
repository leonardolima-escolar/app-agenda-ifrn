import { Container, Logo, Title } from "./styles";
import logo from "../../assets/ifrn.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";

export function AddTask({ navigation }: any) {
  return (
    <Container>
      <Title>Cadastro de Tarefa</Title>
      <Input placeholderText="Título" customStyle={{ border: `1px solid ${theme.colors.placeholder}`, height: '50px' }} />
      <Input placeholderText="Descrição:" customStyle={{ border: `1px solid ${theme.colors.placeholder}`, height: '50px' }} />
      <Input placeholderText="Categorias" customStyle={{ border: `1px solid ${theme.colors.placeholder}`, height: '50px' }} />
      <Input placeholderText="Data" customStyle={{ border: `1px solid ${theme.colors.placeholder}`, height: '50px' }} />
      <Button onPress={() => navigation.navigate('Listar Tarefa')} customStyle={{ backgroundColor: theme.colors.primary, borderRadius: "5px" }}>Cadastrar</Button>
    </Container>
  );
}
