import { useCallback } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { CategoriesViewModel } from "../../../../viewmodel";

interface ModalAddTodoProps {
  modal: boolean;
  editor: CategoriesViewModel;
}

export default function ModalAddTodo(props: ModalAddTodoProps) {
  const { modal, editor } = props;

  const addTodo = () => {
    editor.addTodo();
    editor.reset();
  };

  const onChange = useCallback((e) => {
    editor.setEditingTodo(e.target.value);
  }, []);

  return (
    <Modal isOpen={modal} keyboard={true}>
      <ModalHeader>Add new todo</ModalHeader>
      <ModalBody>
        <Input
          type="text"
          onChange={onChange}
          aria-label="Input for adding todo description"
        />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={addTodo}>
          Add
        </Button>
        <Button color="secondary" onClick={editor.reset}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
