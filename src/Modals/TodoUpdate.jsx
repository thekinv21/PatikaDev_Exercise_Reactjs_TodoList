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
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/Todos";
import { ToastContainer, toast } from "react-toastify";

const TodoUpdate = ({ openUpdateModal, closeUpdateModal, selectedTodo }) => {
  const dispatch = useDispatch();

  //*--------------- Input içeriğini alıp bunu Arraye eklemek için state---------
  const [edit, setEdit] = React.useState({
    todo: "",
    description: "",
  });

  //*----------------Inputların her değiştiğinde içeriğini almak için----------------

  const onChangeUpdateTodos = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  //*-------------------Eğer Update butonuna basıldıysa----------------

  const submitUpdateTodos = (e) => {
    e.preventDefault();

    if (edit.todo === "" || edit.description === "") {
      return false;
    }

    dispatch(
      updateTodo({
        id: selectedTodo.id,
        todo: edit.todo,
        description: edit.description,
      })
    );

    toast.info("Todo was Updated", {
      autoClose: 1600,
    });

    //*----------------Butona basıldıktan sonra temizle------------------

    setEdit({ todo: "", description: "" });
    closeUpdateModal();
  };

  return (
    <React.Fragment>
      <Modal isOpen={openUpdateModal} onClose={closeUpdateModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl mb="30px">
                <FormLabel>Update Task</FormLabel>
                <Input
                  name="todo"
                  placeholder="Enter a task"
                  autoComplete="off"
                  value={edit.todo}
                  onChange={onChangeUpdateTodos}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Update Description</FormLabel>
                <Textarea
                  name="description"
                  value={edit.description}
                  onChange={onChangeUpdateTodos}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="facebook"
              fontSize="14px"
              fontWeight={500}
              w="full"
              onClick={submitUpdateTodos}
            >
              Update Todo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default TodoUpdate;
