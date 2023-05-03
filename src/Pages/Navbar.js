import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="/">
      <img
        src="logo1.png"
        alt="logo"
        />
      </a>
      <ul id="navlist">
      </ul>
      <Link to="contact">
      <button className="btn">Contact us</button>
      </Link>
      
    </nav>
  );
};
