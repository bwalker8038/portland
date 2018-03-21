import React from 'react';
import './ListItem.css';
/**
 * Render's a stateless title list item
 *
 * @example
 * <ListItem title="Love" img="https://path.to/image.png" />
 *
 * @param {string} title The item's title
 * @param {string} img The item's artwork iamge source
 *
 * @return {JSX.Element}
 */

export default (({
  id,
  title,
  img,
  onItemClick,
  list,
}) => {
  const actionLabel = list === 'mylist' ? 'Remove' : 'Add';
  return (
    <div className="list-item">
      <img className="list-item__artwork" src={img} alt={title} />
      <button
        className="list-item__action"
        onClick={() => onItemClick(id)}
      >
        {actionLabel}
      </button>
    </div>
  );
});
