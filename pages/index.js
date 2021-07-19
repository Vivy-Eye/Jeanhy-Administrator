import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Home() {
  return (
    <MainTemplate>
      <Paragraph title="Welcome to Next.js app">
        <>Documentation &rarr;</>
        <>Find in-depth information about Next.js features and API.</>
        Learn about Next.js in an interactive course with quizzes!
        <a href="https://github.com/vercel/next.js/tree/master/examples">
          <>Discover and deploy boilerplate example Next.js projects.</>
        </a>
        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <>Instantly deploy your Next.js site to a public URL with Vercel.</>
        </a>
      </Paragraph>
    </MainTemplate>
  );
}
