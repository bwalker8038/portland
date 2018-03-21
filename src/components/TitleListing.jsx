import React from 'react';

/**
 * Component Renders a string listing of titles
 *
 * @example
 * const titles = ['foo', 'bar]
 * <TitleView titles={titles} />
 *
 * @function TitleListing
 * @public
 *
 * @param {array} titles A collection of title strings
 *
 * @return {JSX.Element}
 */
export default (({ titles }) => {
  const stringified = titles.join(', ');

  return (
    <section className="title-listing">
      <h2>My list titles:</h2>
      <p>{stringified}</p>
    </section>
  );
});
