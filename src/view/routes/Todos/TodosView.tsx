import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import { TodosViewModel } from "../../../viewmodel";
import {
  IconContainer,
  Title,
  ToggleIcon,
  LeftSubTitle,
  RightSubTitle,
  ListContainer,
} from "../../components";

interface TodosViewProps {
  editor: TodosViewModel;
}

export default function TodosView(editor: TodosViewProps) {
  return (
    <Container>
      <IconContainer>
        <Title>Todos</Title>
        <ToggleIcon icon={faToggleOn} size="2x" inverse />
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
