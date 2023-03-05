import React from "react";
import { Box } from "@chakra-ui/react";
import TodoIncompleted from "./TodoIncompleted";
import TodoCompleted from "./TodoCompleted";

const TodoList = ({ status }) => {
  return (
    <React.Fragment>
      <Box display="flex" flexWrap="wrap" padding={50}>
        {status === "Completed" ? <TodoCompleted /> : <TodoIncompleted />}
      </Box>
    </React.Fragment>
  );
};

export default TodoList;
