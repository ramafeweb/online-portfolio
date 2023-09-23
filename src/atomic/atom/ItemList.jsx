import React from 'react';
import { BiCheck } from 'react-icons/bi';

class ItemList extends React.Component {
  render() {
    return (
      <li>
        <BiCheck className="interest__list-icon" />
        <p>{this.props.children}</p>
      </li>
    );
  }
}

export default ItemList;
