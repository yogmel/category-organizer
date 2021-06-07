import React, { useCallback } from "react";
import { observer } from "mobx-react";
import { Container, Row, Col } from "reactstrap";
import { ViewType } from "../../../model";
import { TodosViewModel } from "../../../viewmodel";
import { Header } from "../../components";
import { IconContainer, LeftSubTitle, RightSubTitle } from "../../styled";
import List from "./List";

interface TodosViewProps {
  editor: TodosViewModel;
  changeView: (value: ViewType) => void;
}

function TodosView(props: TodosViewProps) {
  const { editor, changeView } = props;

  const handleChangeView = useCallback(() => {
    changeView(ViewType.Categories);
  }, []);

  return (
    <Container>
      <IconContainer>
        <Header title="Todos" onClick={handleChangeView} />
      </IconContainer>

      <Row className="mt-4">
        <Col>
          <LeftSubTitle>Completed</LeftSubTitle>
          <List todos={editor.completedTodos} />
        </Col>
        <Col>
          <RightSubTitle>Not Completed</RightSubTitle>
          <List todos={editor.uncompletedTodos} />
        </Col>
      </Row>
    </Container>
  );
}

export default observer(TodosView);
