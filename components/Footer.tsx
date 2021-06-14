import styled from "styled-components";

const Base = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default function Footer(): JSX.Element {
  return (
    <Base>
      <FooterText>Created by darkcoder for all dominicans {`<3`}</FooterText>
    </Base>
  );
}
