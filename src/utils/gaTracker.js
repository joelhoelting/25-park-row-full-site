import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

import { parsePageTitle } from './seo';

GoogleAnalytics.initialize('UA-124522377-1');
// Test Environment
// GoogleAnalytics.initialize('UA-124522377-2');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = path => {
    GoogleAnalytics.set({
      page: path,
      title: parsePageTitle(path),
      ...options
    });
    GoogleAnalytics.pageview(path);
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      const {
        location: { pathname }
      } = this.props;

      trackPage(pathname);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname;
      const nextPage = this.props.location.pathname;

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
