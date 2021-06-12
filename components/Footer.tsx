import styled from "styled-components";
import LinkBase from "next/link";
// import Image from "next/image";

const Base = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Img = styled(Image)`
//   margin-left: 0.5rem;
// `;

const Link = styled(LinkBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

interface IFooter {
  text: string;
}

export default function Footer({ text }: IFooter): JSX.Element {
  return (
    <Base>
      {/* <Img /> */}
      <Link href="asdsad">{text}</Link>
    </Base>
  );
}
