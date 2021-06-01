import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IconContainer = styled.div`
  position: relative;
`;

export const ToggleIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
