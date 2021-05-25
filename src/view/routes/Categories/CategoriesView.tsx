import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import {
  CheckboxList,
  CheckboxListContainer,
  IconContainer,
  LeftSubTitle,
  RightSubTitle,
  Title,
  ToggleIcon,
} from "../../components";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesView() {
  return (
    <Container>
      <IconContainer>
        <Title>Categories</Title>
        <ToggleIcon icon={faToggleOn} size="2x" inverse />
      </IconContainer>

      <Row className="mt-4">
        <Col>
          <LeftSubTitle>Add new category</LeftSubTitle>
          <InputGroup className="mt-4">
            <Input placeholder="New category" type="text" />
          </InputGroup>
          <Button className="w-100 mt-3" outline color="primary">
            Add
          </Button>
        </Col>
        <Col>
          <RightSubTitle>All categories</RightSubTitle>
          <CheckboxListContainer className="mt-4 text-left">
            <h5>Cake Factory</h5>
            <CheckboxList>
              <li>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                Aloka
              </li>
            </CheckboxList>
            <Button outline color="primary">
              Add new todo
            </Button>
          </CheckboxListContainer>
        </Col>
      </Row>
    </Container>
  );
}
