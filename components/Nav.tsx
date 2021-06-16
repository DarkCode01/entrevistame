import styled from "styled-components";

const Base = styled.header`
  border: 1px solid black;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-black-color);

  button {
    background-color: rgb(25, 27, 33);
  }
`;

const NavItem = styled.div``;

const NavTitle = styled.span`
  font-size: 1.5rem;
`;

const NavRoom = styled.code`
  color: gray;
`;

interface INav {
  room?: string;
  buttons?: JSX.Element;
}

export default function Nav({ buttons, room }: INav): JSX.Element {
  return (
    <Base>
      <NavItem>
        <NavTitle>Entrevistame</NavTitle>{" "}
        {room && (
          <>
            / <NavRoom>#{room}</NavRoom>
          </>
        )}
      </NavItem>
      <NavItem>{buttons}</NavItem>
    </Base>
  );
}
