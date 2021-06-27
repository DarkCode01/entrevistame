import styled from "styled-components";

const GroupButton = styled.div`
  gap: 15px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.color === "primary" ? "var(--primary-color)" : "rgb(50, 63, 74)"};
  color: var(--secondary-color);
  font-size: 1rem;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
`;

export { Button, GroupButton };
