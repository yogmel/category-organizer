import { Container, Row } from "reactstrap";
import { IconContainer } from "../../styled";
import { CategoriesViewModel } from "../../../viewmodel";
import { ViewType } from "../../../model";
import { useCallback } from "react";
import { Header } from "../../components";
import { AddCategoryColumn, AllCategoriesColumn } from "./components";
import { observer } from "mobx-react";

interface CategoriesViewProps {
  editor: CategoriesViewModel;
  changeView: (value: ViewType) => void;
}

function CategoriesView(props: CategoriesViewProps) {
  const { editor, changeView } = props;

  const handleChangeView = useCallback(() => {
    changeView(ViewType.Todos);
  }, []);

  return (
    <Container>
      <IconContainer>
        <Header title="Category" onClick={handleChangeView} />
      </IconContainer>

      <Row className="mt-4">
        <AddCategoryColumn editor={editor} />
        <AllCategoriesColumn editor={editor} />
      </Row>
    </Container>
  );
}

export default observer(CategoriesView);
