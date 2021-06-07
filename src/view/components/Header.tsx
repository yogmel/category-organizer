import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import React, { useMemo } from "react";
import { Title, ToggleIcon } from "../styled";

interface HeaderProps {
  title: string;
  onClick: () => void;
}

export default function Header(props: HeaderProps) {
  const { title, onClick } = props;

  const icon = useMemo(() => {
    return title === "Category" ? faToggleOn : faToggleOff;
  }, []);

  return (
    <>
      <Title>{title}</Title>
      <ToggleIcon onClick={onClick} icon={icon} size="2x" inverse />
    </>
  );
}
