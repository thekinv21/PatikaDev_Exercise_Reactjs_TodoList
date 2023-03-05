import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TodoCompleted = () => {
  const completedTodos = useSelector((state) => state.todo.completed);

  return (
    <React.Fragment>
      {completedTodos.map((completed) => (
        <Card
          as={motion.div}
          initial={{ x: "-10vw" }}
          animate={{ x: 0 }}
          transition={{ type: "ease-in-out", duration: 2 }}
          whileHover={{ scale: 1.1 }}
          key={completed.id}
          w="350px"
          h="auto"
          m="50px"
          bg='orange.300'
          color="#fff"
          overflow="hidden"
          cursor="pointer"
        >
          <CardHeader>
            <Badge fontSize={10} colorScheme="orange">
              Task Name : {completed.todo}
            </Badge>
          </CardHeader>

          <CardBody fontSize={12} pl={5}>
            {completed.description}
          </CardBody>

          <CardFooter
            display="flex"
            alignItems={"start"}
            justifyContent="flex-end"
            w="100%"
          >
            <EditIcon mr="10px" fontSize={18} cursor="pointer" />
            <DeleteIcon fontSize={18} cursor="pointer" />
          </CardFooter>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default TodoCompleted;
