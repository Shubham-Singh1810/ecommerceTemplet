import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sideBarMain ">
      <div className="categoriesMain">
        <h3 className="catHeading">Categories</h3>
        <ul>
          <li>
            <a>
              <img src="https://www.shareicon.net/data/2015/11/12/671032_man_512x512.png"></img>
              <span>Man's Fassion</span>
            </a>
          </li>
          <li>
            <a>
              <img src="https://www.shareicon.net/data/2015/11/12/671032_man_512x512.png"></img>
              <span>Man's Fassion</span>
            </a>
          </li>
          <li>
            <a>
              <img src="https://www.shareicon.net/data/2015/11/12/671032_man_512x512.png"></img>
              <span>Man's Fassion</span>
            </a>
          </li>
          <li>
            <a>
              <img src="https://www.shareicon.net/data/2015/11/12/671032_man_512x512.png"></img>
              <span>Man's Fassion</span>
            </a>
          </li>
          <li>
            <a>
              <img src="https://www.shareicon.net/data/2015/11/12/671032_man_512x512.png"></img>
              <span>Man's Fassion</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
