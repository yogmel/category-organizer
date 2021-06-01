import React, { ChangeEvent } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

interface ModalAddTodoProps {
  modal: boolean;
  todoInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: (categoryId: number) => void;
  categoryId: number;
  closeModal: () => void;
}

export default function ModalAddTodo(props: ModalAddTodoProps) {
  const { modal, todoInputChange, addTodo, categoryId, closeModal } = props;

  return (
    <Modal isOpen={modal} keyboard={true}>
      <ModalHeader>Add new todo</ModalHeader>
      <ModalBody>
        <Input
          type="text"
          onChange={todoInputChange}
          aria-label="Input for adding todo description"
        />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => addTodo(categoryId)}>
          Add
        </Button>{" "}
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
