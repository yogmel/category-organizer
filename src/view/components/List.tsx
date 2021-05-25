import styled from "styled-components";

export const CheckboxListContainer = styled.div`
  text-align: left;
`;

export const CheckboxList = styled.ul`
  padding: 0;
  > li {
    list-style: none;
    > input[type="checkbox"] {
      margin-right: 10px;
    }
  }
`;

export const ListContainer = styled.div`
  text-align: left;
  padding: 10px 20px;
`;
