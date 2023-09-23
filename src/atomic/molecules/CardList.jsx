import React from 'react';
import ItemList from '../atom/ItemList';

class CardList extends React.Component {
  render() {
    const { title, items } = this.props;

    return (
      <article className="interest">
        <div className="interest__head">
          <h3>{title}</h3>
        </div>

        <ul className="interest__list">
          {items.map((item) => (
            <ItemList key={item}>{item}</ItemList>
          ))}
        </ul>
      </article>
    );
  }
}

export default CardList;
