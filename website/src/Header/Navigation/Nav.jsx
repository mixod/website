/* eslint-disable react/prop-types */
import "./nav.css";

function Nav({ intro, menu, setContent }) {
  const { home, aboutUs, portfolio, services, contact } = menu;
  return (
    <>
      <div className="Navigation">
        <div className="Introduction" style={{ color: "#162171" }}>
          {intro}
        </div>
        <div className="nav-links">
          <ul>
            <li onClick={() => setContent("Home")}>
              <a href="#">{home}</a>
            </li>
            <li onClick={() => setContent("About Us")}>
              <a href="#">{aboutUs}</a>
            </li>
            <li onClick={()=> setContent("Portfolio")}>
              <a href="#">{portfolio}</a>
            </li>
            <li onClick={() => setContent("Services")}>
              <a href="#">{services}</a>
            </li>
            <li onClick={() => setContent("Contact Us")}>
              <a href="#">{contact}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
