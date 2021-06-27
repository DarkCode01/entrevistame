import styled from "styled-components";
import Container from "./Container";

const Base = styled.div`
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  padding: 1.5rem;
  flex-basis: 45%;
  color: inherit;
  background-color: var(--dark2-blue-color);
  width: 500px;
  max-width: 650px;
  min-width: 250px;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    place-self: center;
  }

  @media screen and (max-width: 1312px) {
    width: 49%;
    max-width: 560px;
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    max-width: 640px;
    min-width: initial;
  }
`;

const CardContainer = styled(Container)`
  display: grid;
`;

interface ICard {
  title: string;
  children: JSX.Element;
}

export default function Card({ title, children }: ICard): JSX.Element {
  return (
    <Base>
      <CardContainer>
        <h3>{title}</h3>
        {children}
      </CardContainer>
    </Base>
  );
}

Card.defaultProps = {
  title: "",
};
