import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  return (
    <nav>
       <ul>
           {props.items.map(el=> <MenuItem text={el.text} />)}
      </ul>

    </nav>
  );
}

export default Menu;
