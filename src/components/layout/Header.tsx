import { Link } from "react-router"


const Header = () => {
  return (
     <header className="bg-surface shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header