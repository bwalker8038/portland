import React from 'react';
import ListView from './ListView';
import ListItem from './ListItem';
import TitleListing from './TitleListing';

/**
 * Renders a set of ListingViews as rows
 *
 * @function GridView
 * @public
 *
 * @param {array} myList a list containing items tagged in 'myList'
 * @param {array} recommendationsList a list containing items tagged in 'recommendations'
 * @param {array} myListTitles a list containing tile string from items tagged in 'myList'
 * @param {function} updateItem a function that's passed from the DataContainer that updates
 * an item's properties
 *
 * @return {JSX.Element}
 */
export default (({
  myList,
  recommendationList,
  myListTitles,
  updateItem,
}) => (
  <div>
    <ListView title="My List" data={myList}>
      <ListItem onItemClick={id => updateItem(id, 'list', 'recommendations')} />
    </ListView>
    <ListView title="Recommendations" data={recommendationList}>
      <ListItem onItemClick={id => updateItem(id, 'list', 'mylist')} />
    </ListView>
    <TitleListing titles={myListTitles} />
  </div>
));
