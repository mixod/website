/* eslint-disable react/prop-types */
import About from "./Header/Navigation/About";
import Contact from "./Header/Navigation/Contact";
import Home from "./Header/Navigation/Home";

import Portfolio from "./Header/Navigation/Portfolio";
import Services from "./Header/Navigation/Services";

function Content({ content }) {
  switch (content) {
    case "Home":
      return <Home />;
    case "About Us":
      return <About />;
    case "Portfolio":
      return <Portfolio />;
    case "Services":
      return <Services />;
    case "Contact Us":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default Content;
