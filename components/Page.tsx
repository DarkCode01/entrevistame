import Head from "next/head";
import styled from "styled-components";

const PageBase = styled.div`
  height: 100vh;
  background-color: var(--dark2-blue-color);
  color: var(--light-color);

  main {
    padding: 1rem;
    /* flex: 1; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: cen/ter; */
    /* align-items: center; */
  }
`;

interface IPage {
  title: string;
  description: string;
  children: JSX.Element;
}

export default function Page({ title, description, children }: IPage): JSX.Element {
  return (
    <PageBase>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main>{children}</main>
    </PageBase>
  );
}

Page.defaultProps = {
  title: "Simple cferer",
  description: "Solo por aburrido :D"
};
