/* eslint-disable react/prop-types */
import { FaPhone } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import "./header.css";

function Header(props) {
  const { note, phone } = props.heading;
  return (
    <>
      <div className="heading">
        <div className="header">
          <ul>
            <li>
              <FaHeadphonesAlt/>
              {note}
            </li>
            <li>
              <FaPhone />
              {phone}
            </li>
          </ul>
        </div>
        <div className="social-medias">
          <div>
            <a href="#">
              <FaFacebook  style={{color:'white'}}/>
            </a>
          </div>
          <div>
            <a href="#">
              <TiSocialTwitter style={{color:'white'}} />
            </a>
          </div>
          <div>
            <a href="#">
              <FaLinkedinIn style={{color:'white'}}/>
            </a>
          </div>
          <div>
            <a href="#">
              <IoLogoInstagram style={{color:'white'}}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
