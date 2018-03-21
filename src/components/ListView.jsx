import React from 'react';
import './ListView.css';
/**
 * Renders a generic stateless list view
 *
 * @example
 * <ListView title="My List" data={data}>
 *  <MyListItem />
 * </ListView>
 *
 * @function ListView
 * @public
 *
 * @param {string} title The lists title
 * @param {array} data A collection of list item properties
 * @param {array} children a collection of child elements
 *
 * @return {JSX.Element}
 */
export default (({ title, data, children }) => {
  const childrenWithProps = data.map((itemData, idx) => {
    const childCount = React.Children.count;

    // Current implementation only wraps a single component type,
    // The check below enforces this
    if (childCount < 1) {
      throw (new Error('A child component must be passed to <ListView />'));
    } else if (childCount > 1) {
      throw (new Error('<ListView /> takes a single child'));
    }

    // Clone the child component, apply the lists data to the component type
    const child = React.cloneElement(children, itemData);

    // If an id is present, use it as the li's key, else, use the index of the
    // current data item
    const key = (itemData && itemData.id) ? itemData.id : idx;

    return (
      <li className="list-view__list-item" key={key}>{child}</li>
    );
  });

  return (
    <section className="list-view">
      <h2 className="list-view__title">{title}</h2>
      <ul className="list-view__list">
        {childrenWithProps}
      </ul>
    </section>
  );
});
