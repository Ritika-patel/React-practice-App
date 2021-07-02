import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage  = () => (
    <div>
      <h1 className="all">My Work</h1>
      <p className="all">Checkout the stuffs I've done</p>
      <ul>
      <li><Link to='/portfolio/1'>Item 1</Link></li>
      <li><Link to='/portfolio/2'>Item 2</Link></li>
      </ul>
    </div>
)

export default PortfolioPage