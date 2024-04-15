import  img  from "../../logo/logoListo.png"
import "./navbar.scss";


export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={img} alt="logo" className="logo"/>
        <ul className="ulNav">
          <li className="liNav">Combinar</li>
          <li className="liNav">Navagar</li>
        </ul>
      </nav>
      <hr  className="hrNav"/>
    </header>
  );
};
