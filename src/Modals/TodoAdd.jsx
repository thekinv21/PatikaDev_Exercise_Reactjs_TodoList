import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { addTodo } from "../Redux/Todos";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const TodoCreate = ({ openCreateModal, closeCreateModal }) => {
  //*--------------------------Unique id for todos------------------------------

  const unique_id = uuid();
  const id = unique_id.slice(0, 5);

  //*--------------- Input içeriğini alıp bunu Arraye eklemek için state---------

  const [todos, setTodos] = React.useState({
    todo: "",
    description: "",
  });

  //*---------------Global actionları kullanmak için örn :Addtodo -------

  const dispatch = useDispatch();

  //*----------------Inputların her değiştiğinde içeriğini almak için----------------

  const onChangeTodos = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };

  const submitTodos = (e) => {
    e.preventDefault();

    if (todos.todo === "" || todos.description === "") {
      return toast.warn("Input Cannot Be Empty !", {
        autoClose: 1600,
      });
    }

    //*-------------------Eğer Create butonuna basıldıysa----------------
    dispatch(
      addTodo({
        id: id,
        todo: todos.todo,
        description: todos.description,
      })
    );

    toast.success(" Todo Added Successfully !", {
      autoClose: 1600,
    });

    //*----------------Butona basıldıktan sonra temizle------------------

    setTodos({ todo: "", description: "" });
    closeCreateModal();
  };

  return (
    <React.Fragment>
      <Modal isOpen={openCreateModal} onClose={closeCreateModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Todo Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl mb="30px">
                <FormLabel>Task</FormLabel>
                <Input
                  name="todo"
                  placeholder="Enter a task"
                  autoComplete="off"
                  value={todos.todo}
                  onChange={onChangeTodos}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={todos.description}
                  onChange={onChangeTodos}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              fontSize="14px"
              fontWeight={500}
              w="full"
              onClick={submitTodos}
            >
              Create Todo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default TodoCreate;
