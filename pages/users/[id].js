import { useRouter } from "next/dist/client/router"


export default function () {
  const {query} = useRouter()
  // console.log(router)
  return (
    <div className="users-list">
      PEOPLE: {query.id}
    </div>
  )
}