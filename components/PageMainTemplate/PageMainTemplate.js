import Head from "next/head";
import styled from "styled-components";
import Person from "./Person/Person";
import AppBar from "./AppBar/AppBar";

const Template = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.turquoise};
`;
const Aside = styled.aside`
  width: 15%;
  background-color: ${(props) => props.theme.colors.ocean};
`;
const Main = styled.div`
  flex: 1;
  overflow: auto;
  padding: 2rem;
`;

export default function PageMainTemplate({
  children,
  title,
  keywords,
  description,
}) {
  return (
    <Template>
      <Head>
        <title>Jeanhy {title}</title>
        <meta keywords={"" + keywords} />
        <meta name="description" content={"" + description} />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Aside>
        <Person />
        <AppBar />
      </Aside>
      <Main>{children}</Main>
    </Template>
  );
}
