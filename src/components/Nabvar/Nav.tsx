import React from "react";
import { NavItems } from "./NavItems";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className='NavItems'>
      <h1 className='Nav-Logo'>Requenez</h1>
      <div className='Menu'>
        <ul>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className='item.cName' href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
