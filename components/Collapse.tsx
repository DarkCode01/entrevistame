import { useState, useCallback } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Base = styled.div``;

const Hider = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  margin: 10px 0;
`;

interface ICollapse {
  titleButton: string;
  children: JSX.Element;
  defaultState: boolean;
}

export default function Collapse({
  defaultState,
  titleButton,
  children,
}: ICollapse): JSX.Element {
  const [toggle, setToggle] = useState(defaultState);
  const handleToggle = useCallback(() => setToggle((p) => !p), [toggle]);

  return (
    <Base>
      <Hider show={toggle}>{children}</Hider>

      {!toggle && <Button onClick={handleToggle}>{titleButton}</Button>}
    </Base>
  );
}

Collapse.defaultProps = {
  titlebutton: "Mostrar",
  defaultState: false,
};
