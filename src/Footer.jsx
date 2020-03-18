import React from 'react';
import Logo from './Logo';
import MenuItem from "./MenuItem";
import Menu from './Menu';

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <Logo />

          <Menu items={props.items} />
          <Menu items={props.items2} />

      </div>
    </footer>
  );
}

export default Footer;
