import { useState } from "react";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Images({ answer }) {
  const [imagesList, setImagesList] = useState([]);

  // CORS blocked Fetch FIX IT!
  const showImages = async (queryText) => {
    const queryAnswer = await fetch(
      `https://searx.roughs.ru/search?q=Горы&format=json&categories=images&safesearch=1`,
      { mode: "no-cors" }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));

    console.log(queryAnswer);
    // imagesList.push(queryAnswer.results.map((result) => result.url))
  };

  // console.log(imagesList)

  return (
    <MainTemplate headTitle="Users">
      <Paragraph title="What you are wanna see">
        {/* https://searx.roughs.ru/search?q=%D0%93%D0%BE%D1%80%D1%8B&format=json&categories=images&safesearch=1 */}
        <input type="text" placeholder="I wont a ..." onChange={showImages} />
      </Paragraph>

      {/* {users.map((user, i) => (
        <Paragraph key={i} title={user.name}>
          Some user {user.name} with id {user.id}
        </Paragraph>
      ))} */}
    </MainTemplate>
  );
}

export async function getStaticProps(context) {
  const answer = await fetch(
    `https://searx.roughs.ru/search?q=${context}&format=json&categories=images&safesearch=1`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return {
    props: { answer },
  };
}
