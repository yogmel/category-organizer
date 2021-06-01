import React, { useCallback } from "react";
import { observer } from "mobx-react";
import { Container, Row, Col } from "reactstrap";
import { ViewType } from "../../../model";
import { TodosViewModel } from "../../../viewmodel";
import { Header } from "../../components";
import {
  IconContainer,
  LeftSubTitle,
  RightSubTitle,
  ListContainer,
} from "../../styled";

interface TodosViewProps {
  editor: TodosViewModel;
  changeView: (value: ViewType) => void;
}

function TodosView(props: TodosViewProps) {
  const { changeView } = props;

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
          <ListContainer>
            <h5>Cake Factory</h5>
            <ul>
              <li>Aloka</li>
            </ul>
          </ListContainer>
        </Col>
        <Col>
          <RightSubTitle>Not Completed</RightSubTitle>
          <ListContainer>
            <h5>Cake Factory</h5>
            <ul>
              <li>Aloka</li>
            </ul>
          </ListContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default observer(TodosView);
