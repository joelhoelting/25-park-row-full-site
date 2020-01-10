import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-124522377-1');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      const { location, siteVisited, toggleSiteVisited } = this.props;
      // eslint-disable-next-line
      console.log(this.props.location.pathname);
      // eslint-disable-next-line
      const page = location.pathname + location.search;
      if (!siteVisited) {
        toggleSiteVisited(true);
        console.log('first visit');
      } else {
        setTimeout(() => {
          trackPage(page);
          console.log('second visit');
        }, 1000);
      }
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      // eslint-disable-next-line
      const nextPage = this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
