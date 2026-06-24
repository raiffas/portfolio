import React from "react";
import { Link } from "react-router-dom";

import logo from './img_frame1.svg'

const DesktopOneNavbar = (props) => {
  const { scrolled } = props;
  const btnColor = scrolled ? "text-black-900" : "text-white-A700";
  const btnHover = scrolled ? "hover:text-white-A700" : "hover:text-red-A100";
  const logoFilter = scrolled ? "[filter:brightness(0)]" : "";

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[69px] items-start justify-start w-auto">
          <button onClick={() => props.handleClick(0)} className={`md:text-3xl sm:text-[28px] text-[32px] ${btnColor} ${btnHover} w-auto transition-colors duration-300`}
              size="txtKirangHaerangRegular32"
              >{props?.homebuttontext}</button>
          <button onClick={() => props.handleClick(1)} className={`md:text-3xl sm:text-[28px] text-[32px] ${btnColor} ${btnHover} w-auto transition-colors duration-300`}
              size="txtKirangHaerangRegular32"
              >{props?.biobuttontext}</button>
          <button onClick={() => props.handleClick(2)} className={`md:text-3xl sm:text-[28px] text-[32px] ${btnColor} ${btnHover} w-auto transition-colors duration-300`}
              size="txtKirangHaerangRegular32">{props?.projectsbuttontext}</button>
        </div>
        <Link to="/blog">
          <img
            src={logo}
            className={`h-12 w-12 transition-[filter] duration-300 hover:[filter:brightness(0)_invert(1)] ${logoFilter}`}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
};

DesktopOneNavbar.defaultProps = {
  homebuttontext: "Home",
  biobuttontext: "Bio",
  projectsbuttontext: "Projects",
};

export default DesktopOneNavbar;
