// 
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Paragraph from "../components/Paragraph";

export default function Monsters({monsters}) {
  return (
    <MainTemplate headTitle="Monsters">
      <Paragraph title="Monsters" text="Some Monsters on my page"/>
      <ul>
        {monsters.results.map(monster =>
          <li key={monster.id}>
            {monster.svgContent}
          </li>
        )}
      </ul>
    </MainTemplate>
  )
}

export async function getStaticProps(context) {
  const monsters = await fetch(`https://app.pixelencounter.com/api/basic/monsters`)
    .then(response => response.json())
    .catch(err => console.log(err))
  return {
    props: {monsters},
  }
}