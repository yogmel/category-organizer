import { observer } from "mobx-react";
import React from "react";
import { Todo } from "../../../model/Todo";
import { ListContainer } from "../../styled";
import ListItem from "./ListItem";

interface ListProps {
  todos?: Todo[];
}

function List(props: ListProps) {
  const { todos } = props;

  return (
    <ListContainer>
      <ul>
        {todos?.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </ListContainer>
  );
}

export default observer(List);
