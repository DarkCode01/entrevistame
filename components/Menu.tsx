import { useState } from "react";
import styled from "styled-components";
import { UilSetting } from "@iconscout/react-unicons";
import Container from "./Container";
import { Button } from "./Button";

const Base = styled.menu<{ show: boolean }>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(50, 63, 74);
  color: var(--secondary-color);
  font-size: 1rem;

  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid gray;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: rgb(60, 73, 84);
  }
`;

const MenuButton = styled(Button)`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  span {
    display: none;
  }

  &:hover {
    width: 200px;
    justify-content: space-around;

    span {
      display: block;
    }
  }
`;

export default function Menu(): JSX.Element {
  const [isShow, setShow] = useState(false);

  const handleToggle = () => setShow((p) => !p);

  return (
    <Container
      style={{
        position: "absolute",
        bottom: 20,
        right: 30,
        width: "auto",
        display: "flex",
        alignContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <Base show={isShow}>
        <MenuItem>
          <span>Lenguaje</span>
        </MenuItem>
        <MenuItem>
          <span>Lenguaje</span>
        </MenuItem>
        <MenuItem>
          <span>Propiedades</span>
        </MenuItem>
      </Base>

      <div>
        <MenuButton onClick={handleToggle}>
          <span>configuración</span>
          <UilSetting size={40} />
        </MenuButton>
      </div>
    </Container>
  );
}
