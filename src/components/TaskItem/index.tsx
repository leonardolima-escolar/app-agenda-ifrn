import { StyledTaskText } from "./styles";
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { StyledTaskItem } from "../TaskItem/styles";
import { theme } from "../../global/styles/theme";
import { CheckBox } from "@rneui/base";

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  color?: string;
  taskId: number;
}

export function TaskItem({ title, completed, onToggle, onDelete, taskId }: TaskItemProps) {
  const [completedState, setCompleted] = useState(completed);

  onToggle = () => {
    setCompleted(!completedState);
  };

  return (
    <StyledTaskItem
      // color={color}
      taskId={taskId}
    // style={customStyle}
    // {...props}
    >
      <CheckBox
        checked={completedState}
        checkedColor={theme.colors.text_success}
        onPress={onToggle}
        containerStyle={{ margin: 0, padding: 0 }}
      />
      <StyledTaskText completed={completedState}>{title}</StyledTaskText>
      <TouchableOpacity onPress={onDelete}>
        {/* <Ionicons name="trash-outline" size={24} color="#ff4d4d" /> */}
        <Ionicons name="trash-outline" size={20} color={theme.colors.placeholder} />
      </TouchableOpacity>
    </StyledTaskItem>
  );
};
