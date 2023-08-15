import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <header className='p-3 bg-dark text-white'>
      <div className='container '>
        <div className='d-flex flex-wrap aling-items-center justify-content-center'></div>
      </div>
    </header>
  );
};

export default Nav;
