import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { deleteTodo, setSelectedTodo, completedTodo } from "../Redux/Todos";
import TodoUpdate from "../Modals/TodoUpdate";
import { ToastContainer, toast } from "react-toastify";

const TodoItem = () => {

  //*---------------------Modal Setups-------------------------
  const { isOpen, onOpen, onClose } = useDisclosure();

  //*---------------global actionları kullanmak için------------
  const dispatch = useDispatch();

  //*---------------- Global stateleri almak için---------------
  const todos = useSelector((state) => state.todo.todos);
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  //*--------------------Delete Alert---------------

  const deleteSucces = () => {
    toast.error("Todo Successfully Deleted ", {
      autoClose: 1600,
    });
  };

  return (
    <React.Fragment>
      {todos.map((todo) => (
        <Card
          as={motion.div}
          initial={{ x: "-10vw" }}
          animate={{ x: 0 }}
          transition={{ type: "ease-in-out", duration: 2 }}
          whileHover={{ scale: 1.1 }}
          key={todo.id}
          w="350px"
          h="auto"
          m="50px"
          bgGradient="linear(to-r, teal.500, green.500)"
          color="#fff"
          overflow="hidden"
          cursor="pointer"
        >
          <CardHeader>
            <Badge fontSize={10} colorScheme="orange">
              Task Name : {todo.todo}
            </Badge>
          </CardHeader>

          <CardBody fontSize={12} pl={5}>
            {todo.description}
          </CardBody>

          <CardFooter
            display="flex"
            alignItems={"start"}
            justifyContent="flex-end"
            w="100%"
          >
            <CheckIcon
              mr="10px"
              fontSize={18}
              cursor="pointer"
              onClick={() => {
                dispatch(completedTodo(todo));
                dispatch(deleteTodo(todo.id));
              }}
            />
            <EditIcon
              mr="10px"
              fontSize={18}
              cursor="pointer"
              onClick={() => {
                onOpen();
                dispatch(setSelectedTodo(todo.id));
              }}
            />
            <DeleteIcon
              fontSize={18}
              cursor="pointer"
              onClick={() => {
                dispatch(deleteTodo(todo.id));
                deleteSucces();
              }}
            />
          </CardFooter>
        </Card>
      ))}

      <TodoUpdate
        openUpdateModal={isOpen}
        closeUpdateModal={onClose}
        selectedTodo={selectedTodo}
      />

      <ToastContainer />
    </React.Fragment>
  );
};

export default TodoItem;
