import styled from "styled-components";
import { Button, GroupButton } from "./Button";

const Base = styled.header`
  border: 1px solid black;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-black-color);
`;

const NavItem = styled.div``;

const NavTitle = styled.span`
  font-size: 1.5rem;
`;

const NavRoom = styled.code`
  color: gray;
`;

const NavButton = styled(Button)`
  background-color: rgb(25, 27, 33);
`;

export default function Nav(): JSX.Element {
  return (
    <Base>
      <NavItem>
        <NavTitle>Entrevis</NavTitle> / <NavRoom>sdas</NavRoom>
      </NavItem>
      <NavItem>
        <GroupButton>
          <NavButton>Entrar</NavButton>
          <NavButton>Crear</NavButton>
        </GroupButton>
      </NavItem>
    </Base>
  );
}
