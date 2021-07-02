import React from "react";
import { NavLink } from 'react-router-dom'

const Header  = () => (
    <header>
      
      <ul>
      <li><NavLink to='#' className='abc'>Portfoilo</NavLink></li>
      <li><NavLink to='/'  activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to='/portfolio'  activeClassName="is-active" exact={true}>Portfolio</NavLink></li>
      <li><NavLink to='/contact'  activeClassName="is-active" >Contact</NavLink></li>
      </ul>
    </header>
)

export default  Header