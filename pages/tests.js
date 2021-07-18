import Link from "next/link";
import { useState } from "react";
import MainTemplate from "../components/MainTemplate/MainTemplate";

export default function tests() {
  const [users, setUser] = useState([
    {id: 0, name: 'Billy'},
    {id: 1, name: 'Timm'},
  ])

  return (
    <MainTemplate>
      <h1 className="my-title">Tests</h1>
      <p className="my-sub-title">Why you are buling me?</p>      
      <Link href="/jeanhy">
        <a className="my-link">
          Go Jeanhy
        </a>
      </Link>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <a>
                {user.name}
              </a>
            </Link>
          </li>
        )}
      </ul>

      <style jsx>
        {`
          .my-title{
            color: blue
          }
        `}
      </style>
    </MainTemplate>
  )
}