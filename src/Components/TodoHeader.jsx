import React from "react";
import { Box, Button, Text, useDisclosure, Select } from "@chakra-ui/react";
import { clearAllTodo } from "../Redux/Todos";
import { useDispatch, useSelector } from "react-redux";
import TodoAdd from "../Modals/TodoAdd";
import { ToastContainer, toast } from "react-toastify";
import TodoList from "./TodoList";

const Todoheader = () => {
  const [status, setStatus] = React.useState("");

  //*-------------------Using Global Reducers------------
  const dispatch = useDispatch();

  //*-----------------Create Modal Setups--------------
  const { isOpen, onOpen, onClose } = useDisclosure();

  //*-------------------All Todos Array-----------------
  const todos = useSelector((state) => state.todo.todos);

  //*-------------------Clear All Button Alert-----------------
  const clearAllSucces = () => {
    if (todos.length > 0) {
      toast.error("All Todos Succesfully Deleted !", {
        autoClose: 1600,
      });
    } else {
      toast.warn("TodoList is Empty", {
        autoClose: 1600,
      });
    }
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="220px"
        background="#e9eef6"
        flexDirection="column"
      >
        <Text fontSize="4xl">Todo List for 2023</Text>

        <Box display="flex" gap="20px">
          <Button
            fontWeight={400}
            fontSize={14}
            mt="20px"
            w="220px"
            colorScheme="green"
            onClick={onOpen}
          >
            Create Task
          </Button>

          <Select
            fontWeight={400}
            fontSize={14}
            mt="20px"
            w="220px"
            placeholder="Select Status"
            bg={"#f8f8ff"}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Completed">Completed Todos</option>
            <option value="Incompleted">Incomplete Todos</option>
          </Select>
          <Button
            fontWeight={400}
            fontSize={14}
            mt="20px"
            w="220px"
            colorScheme="red"
            onClick={() => {
              dispatch(clearAllTodo());
              clearAllSucces();
            }}
          >
            Clear All Tasks
          </Button>
        </Box>
      </Box>

      <TodoAdd openCreateModal={isOpen} closeCreateModal={onClose} />
      <TodoList status={status} />
      <ToastContainer />
    </React.Fragment>
  );
};

export default Todoheader;
