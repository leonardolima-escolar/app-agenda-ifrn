import { Container, Header, Subtitle, Title } from "./styles";
import { FlatList } from "react-native";
import { TaskItem } from "../../components/TaskItem";

export function TaskList() {
  const tasks = [ 
    { id: 1, title: "Pagar boleto", completed: false },
    { id: 2, title: "Arrumar a cama", completed: true },
    { id: 3, title: "Entregar notebook", completed: false }
  ];

  const renderItem = ({ item }: { item: { id: number, title: string, completed: boolean } }) => (
    <TaskItem
      key={item.id}
      title={item.title}
      completed={item.completed}
      onDelete={() => {}}
      onToggle={() => {}}
      taskId={item.id}
    />
  );

  return (
    <Container>
      <Header>
        <Title>Agenda.IFRN</Title>
        <Subtitle>Você tem 2 tarefas</Subtitle>
      </Header>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{ paddingTop: 38, paddingBottom: 38 }}
      />
      {/* {tasks.map(task => (
        <TaskItem key={task.id} title={task.title} completed={task.completed} onDelete={() => {}} onToggle={() => {}} ></TaskItem>
      ))} */}
    </Container>
  );
}
