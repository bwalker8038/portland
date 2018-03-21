import React, { Component } from 'react';
import GridView from '../components/GridView';
import { flattenPayload } from '../utils/collection';

/**
 * A container component that takes a payload, normalizes it for stroage,
 * and passes the data down to the GridView Component
 *
 * @example
 * const data = { foo: [{id: 1, title: 'bar;}]};
 * <DataContainer data={data}/>
 *
 * @class DataContainer
 * @public
 *
 * @param {Object} data the JSON data payload
 */
class DataContainer extends Component {
  constructor(props) {
    super(props);

    // Flatten the payload into a single list, normalizes it for
    // Ease of manipulation
    const data = flattenPayload(props.data);

    this.state = { data };
    this.updateItem = this.updateItem.bind(this);
  }

  /**
   * Filters the item contained in the state object by a given property
   * and value
   *
   * @method filterBy
   * @public
   *
   * @param {string} prop The property to filter the list by
   * @param {string} value The desired value
   *
   * @return {array}
   */
  filterBy(prop, value) {
    return this.state.data.filter(item => item[prop] === value);
  }

  /**
   * Updates an items property that's contained in the state object of
   * the container
   *
   * @method updateItem
   * @public
   *
   * @param {number} id The item of the item to be updated
   * @param {string} prop The property to be updated
   * @param {string} value The value to be updated
   *
   * @return {Void}
   */
  updateItem(id, prop, value) {
    this.setState((prevState) => {
      const data = [].concat(prevState.data);
      const [filteredItem] = data.filter(item => item.id === id);

      if (filteredItem) {
        filteredItem[prop] = value;
      }

      return { data };
    });
  }

  /**
   * @override render
   */
  render() {
    const recommendations = this.filterBy('list', 'recommendations');
    const myList = this.filterBy('list', 'mylist');
    const myListTitles = myList.map(item => item.title);

    return (
      <GridView
        recommendationList={recommendations}
        myList={myList}
        myListTitles={myListTitles}
        updateItem={this.updateItem}
      />
    );
  }
}

export default DataContainer;
