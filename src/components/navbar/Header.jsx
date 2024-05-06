import { Link } from "react-router-dom";
import  img  from "../../logo/logoListo.png"
import "./navbar.scss";


export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={img} alt="logo" className="logo"/>
        <ul className="ulNav">
          <li className="liNav"> <Link to={"/"}>Inicio</Link></li>
          <li className="liNav"> <Link to={"/Favorito"}>Favorito</Link></li>
        </ul>
      </nav>
      <hr  className="hrNav"/>
    </header>
  );
};
