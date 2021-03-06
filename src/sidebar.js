import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PrevNext from './prev_next';
import Thumbnail from './thumbnail';
import PageSearch from './page-search';
import ItemList from './item-list';

const ThumbnailList = ItemList(Thumbnail);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.prevNext = this.prevNext.bind(this);
    this.numPagesWithResults = this.numPagesWithResults.bind(this);
    this.numFound = this.numFound.bind(this);
  }

  prevNext() {
    if (this.props.searchText == '')
      return (
        <PrevNext
          {...this.props}
          pageCount={this.props.pages.length}
        />
      );
    return '';
  }

  numPagesWithResults() {
    return this.props.pages.reduce(
      (total, page) => (page.numFound > 0) ? total + 1 : total,
      0
    )
  }

  numFound() {
    return (this.props.searchText !== '') ? `${this.numPagesWithResults()} found` : '';
  }

  render() {
    return (
      <div>
        <div className="osd-sidebar-header">
          <PageSearch
            {...this.props}
          />
          { this.prevNext() }
          <div className="osd-num-found">{this.numFound()}</div>
        </div>
        <div id="osd-sidebar" className="osd-sidebar">
        <ThumbnailList
          {...this.props}
        />
        <div className="osd-sidebar-footer" />
      </div>
    </div>

    );
  }
}

Sidebar.defaultProps = {
    searchText: '',
};

Sidebar.propTypes = {
  pages: PropTypes.array.isRequired,
  basename: PropTypes.string.isRequired,
  resizeHandler: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};

export default Sidebar;
