import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';


const OSD_VIEWER = 'OSD_VIEWER';
const TEXT_VIEWER = 'TEXT_VIEWER';

export default function viewerContainer(Component) {
  class ViewerContainer extends React.Component {
    static setPageViewer(pages, pageId, viewer) {
      return pages.map((page, i) => {
        if (i === pageId) {
          return { ...page, viewer };
        }
        return page;
      });
    }
    constructor(props) {
      super(props);
      this.resizeHandler = this.resizeHandler.bind(this);
      this.activateViewerHandler = this.switchViewerHandler.bind(this);
      this.setPagesHandler = this.setPagesHandler.bind(this);
      this.goToPageHandler = this.goToPageHandler.bind(this);
      this.switchViewerHandler = this.switchViewerHandler.bind(this);
      this.setPageViewerHandler = this.setPageViewerHandler.bind(this);
      this.searchTextHandler = this.searchTextHandler.bind(this);
      this.showResultsOnlyHandler = this.showResultsOnlyHandler.bind(this);
      this.columns = this.columns.bind(this);
      const { id = 0 } = props.match.params;
      const {
              viewer = OSD_VIEWER,
              searchText = '',
            } = queryString.parse(props.location.search);

      const osdDisplay = (viewer === OSD_VIEWER) ? 'showViewer' : 'hideViewer';
      const textDisplay = (viewer === TEXT_VIEWER) ? 'showViewer' : 'hideViewer';
      const { sidebarColumns, viewerColumns } = this.columns(searchText)
      this.state = {
        viewerColumns: viewerColumns,
        sidebarColumns: sidebarColumns,
        viewerColumnsLarge:  props.viewerColumnsLarge,
        sidebarColumnsSmall: props.sidebarColumnsSmall,
        viewerColumnsSmall:  props.viewerColumnsSmall,
        sidebarColumnsLarge: props.sidebarColumnsLarge,
        pages: ViewerContainer.setPageViewer(this.props.pages, parseInt(id, 10), viewer),
        osdDisplay: osdDisplay,
        textDisplay: textDisplay,
        viewer: viewer,
        currentPageId: parseInt(props.match.params.id, 10),
        searchText: searchText,
        showResultsOnly: false,
      };
    }

    setPageViewerHandler(pageId, viewer) {
      const pages = ViewerContainer.setPageViewer(this.props.pages, pageId, viewer);
      this.setState({ pages });
    }

    switchViewerHandler(viewer = OSD_VIEWER) {
      if (viewer === OSD_VIEWER) {
        this.setState({ osdDisplay: 'show', textDisplay: 'hideViewer' });
      } else if (viewer === TEXT_VIEWER) {
        this.setState({ osdDisplay: 'hideViewer', textDisplay: 'show' });
      }
      this.setState({ viewer });
    }

    resizeHandler(viewerColumns, sidebarColumns) {
      this.setState({ viewerColumns, sidebarColumns });
    }

    searchTextHandler(searchText) {
      this.setState({ searchText });
    }

    showResultsOnlyHandler(showResultsOnly) {
      this.setState({ showResultsOnly });
    }

    setPagesHandler(pages) {
      this.setState({ pages });
    }

    goToPageHandler(currentPageId, searchText = '', viewer = '') {
      this.setState({ currentPageId, searchText });
      this.switchViewerHandler(viewer);
    }

    columns(searchText) {
      let cols = {};
      if (this.props.pages.length <= 1) {
        cols = {
          //Viewer is full width and sidebar none for non-compounds
          sidebarColumns: 'col-xs-0',
          viewerColumns: 'col-xs-12',
        };
      } else if (searchText !== '') {
        cols = {
          sidebarColumns: this.props.sidebarColumnsLarge,
          viewerColumns: this.props.viewerColumnsSmall,
        };
      } else {
        cols = {
          sidebarColumns: this.props.sidebarColumnsSmall,
          viewerColumns: this.props.viewerColumnsLarge,
        };
      }
      return cols;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          resizeHandler={this.resizeHandler}
          setPagesHandler={this.setPagesHandler}
          switchViewerHandler={this.switchViewerHandler}
          goToPageHandler={this.goToPageHandler}
          searchTextHandler={this.searchTextHandler}
          toggleViewerHandler={this.toggleViewerHandler}
          goToPageHandler={this.goToPageHandler}
          setPageViewerHandler={this.setPageViewerHandler}
          showResultsOnlyHandler={this.showResultsOnlyHandler}
        />
      );
    }
  }

  ViewerContainer.defaultProps = {
    basename: '/',
    showResultsOnly: false,
    viewerColumnsSmall: 'col-xs-9',
    sidebarColumnsLarge: 'col-xs-12 col-md-3',
    viewerColumnsLarge: 'col-xs-12 col-md-10',
    sidebarColumnsSmall: 'col-xs-12 col-md-2',
    currentPageId: 0,
    showSearchText: false,
    searchText: '',
  };
  ViewerContainer.propTypes = {
    showResultsOnly: PropTypes.bool,
    searchText: PropTypes.string,
    basename: PropTypes.string,
    viewerColumnsLarge: PropTypes.string,
    sidebarColumnsSmall: PropTypes.string,
    viewerColumnsSmall: PropTypes.string,
    sidebarColumnsLarge: PropTypes.string,
    currentPageId: PropTypes.number,
    showSearchText: PropTypes.bool,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        searchText: PropTypes.string,
        showSearchText: PropTypes.string,
      }),
    }),
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        sidebarThumbnail: PropTypes.string.isRequired,
        transcript: PropTypes.string,
        numFound: PropTypes.number,
        snippets: PropTypes.string,
        highlightedTranscript: PropTypes.string,
      }),
    ).isRequired,
  };
  return ViewerContainer;
}
