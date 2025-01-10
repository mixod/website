import { useState } from "react";
import Header from "./Header/Header"
import Nav from "./Header/Navigation/Nav";
import Content from "./Content";
const heading={
  note:"24x7 Technical Support",
  phone:"01-4435890"
};
const introduction = "Subha Bihani Digital Media Pvt. Ltd";
const menuLinks ={
        home:"Home",
        aboutUs:"About Us",
        portfolio:"Portfolio",
        services:"Services",
        contact:"Contact Us"
};

function App() {
  const [content, setContent] = useState("Home");
  return (
    <>
   
    <Header heading={heading}/>
    <Nav intro={introduction} menu={menuLinks} setContent={setContent}/>
    <Content content={content}/>
    </>
  )
}

export default App









