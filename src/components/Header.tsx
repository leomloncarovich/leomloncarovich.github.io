  import { Link } from "react-router-dom";
  import { FaHome, FaLinkedin } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import assinatura from "../assets/assinatura.png";

  function Header() {
    return (
      <header>
          <nav className="mb-20 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center select-none pointer-events-none">
              <img className="max-w-24 select-none pointer-events-none" draggable="false" src={assinatura}/>
            </div>
              <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <Link to="/">
                  <FaHome/>
                </Link>
                <a href="https://www.linkedin.com/in/leomloncarovich/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/leomloncarovich" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
            </div>
          </nav>
      </header>
    )
  }

  export default Header;