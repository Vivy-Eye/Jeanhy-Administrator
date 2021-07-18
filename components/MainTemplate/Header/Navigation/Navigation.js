import Link from "next/link";

export default function Navigation() {
  const sections = ["users", "posts", "tests"];

  return (
    <nav className="navigation">
      <ul className="menu-container">
        <li className="menu-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        {sections.map((section) => (
          <li className="menu-item" key={sections}>
            <Link href={"/" + section}>
              <a>{section}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
