  import { Link } from "react-router-dom";
  import { FaHome, FaLinkedin } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import assinatura from "../assets/assinatura.png";
import { FaHouseChimney, FaHouseChimneyCrack, FaHouseChimneyUser, FaHouseChimneyWindow, FaHouseLaptop } from "react-icons/fa6";

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
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
          </nav>
      </header>
    )
  }

  export default Header;