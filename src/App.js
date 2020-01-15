import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Radium, { StyleRoot, Style } from 'radium';

import ContextProvider from './provider/ContextProvider';

import ScrollToTop from './helpers/ScrollToTop';
import pages, { subPages } from './data/pages';
import { Header, Footer, SkipLinks } from './includes/_module';

import {
  Home,
  Architecture,
  Interiors,
  Amenities,
  Views,
  Floorplans,
  Neighborhood,
  Team,
  Gallery,
  Contact,
  Brochure,
  Press,
  Legal,
  Accessibility,
  NotFoundPage
} from './pages/_module';

import {
  Global,
  Borders,
  Colors,
  Containers,
  Typography,
  Grid,
  Captions,
  Slick,
  Animations
} from './styles/Global/_module';

class App extends Component {
  constructor(props) {
    super(props);

    // Assign viewport width on initialization
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.state = {
      width,
      listings: undefined,
      siteVisited: false
    };
  }

  componentDidMount() {
    // Update global width on resize of screen
    window.addEventListener('resize', () => this.updateWidth());
  }

  // Update width and set state to pass down as props
  updateWidth() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({ width });
  }

  saveListings(listings) {
    this.setState({ listings });
  }

  toggleSiteVisited = boolean => {
    this.setState({ siteVisited: boolean });
  };

  render() {
    const { siteVisited } = this.state;

    return (
      <StyleRoot>
        <Style rules={Global} />
        <Style rules={Containers} />
        <Style rules={Typography} />
        <Style rules={Grid} />
        <Style rules={Captions} />
        <Style rules={Slick} />
        <Style rules={Animations} />
        <Style rules={Borders} />
        <ContextProvider>
          <Router>
            <ScrollToTop>
              <SkipLinks />
              <div id="main">
                <Header
                  colors={Colors}
                  pages={pages}
                  subPages={subPages}
                  interval={this.state.interval}
                  width={this.state.width}
                />
                <div id="main-content" role="main">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={({ location }) => (
                        <Home
                          width={this.state.width}
                          color={Colors.home.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/architecture"
                      render={({ location }) => (
                        <Architecture
                          width={this.state.width}
                          color={Colors.architecture.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/interiors"
                      render={({ location }) => (
                        <Interiors
                          width={this.state.width}
                          color={Colors.interiors.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/amenities"
                      render={({ location }) => (
                        <Amenities
                          width={this.state.width}
                          color={Colors.amenities.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/views"
                      render={({ location }) => (
                        <Views
                          width={this.state.width}
                          color={Colors.views.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/floorplans"
                      render={({ location }) => (
                        <Floorplans
                          width={this.state.width}
                          color={Colors.floorplans.backgroundColor}
                          saveListings={listings => this.saveListings(listings)}
                          savedListings={this.state.listings}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/neighborhood"
                      render={({ location }) => (
                        <Neighborhood
                          width={this.state.width}
                          color={Colors.neighborhood.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/team"
                      render={({ location }) => (
                        <Team
                          width={this.state.width}
                          color={Colors.team.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/gallery"
                      render={({ location }) => (
                        <Gallery
                          width={this.state.width}
                          color={Colors.gallery.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/contact"
                      render={({ location }) => (
                        <Contact
                          width={this.state.width}
                          color={Colors.contact.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/brochure"
                      render={({ location }) => (
                        <Brochure
                          width={this.state.width}
                          color={Colors.brochure.backgroundColor}
                          interval={this.state.interval}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/press"
                      render={({ location }) => (
                        <Press
                          width={this.state.width}
                          color={Colors.press.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/legal"
                      render={({ location }) => (
                        <Legal
                          width={this.state.width}
                          color={Colors.legal.backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/accessibility-statement"
                      render={({ location }) => (
                        <Accessibility
                          width={this.state.width}
                          color={Colors['accessibility-statement'].backgroundColor}
                          location={location}
                          siteVisited={siteVisited}
                          toggleSiteVisited={this.toggleSiteVisited}
                        />
                      )}
                    />
                    <Route render={() => <NotFoundPage width={this.state.width} />} />
                  </Switch>
                </div>
                <Footer colors={Colors} pages={pages} interval={this.state.interval} />
              </div>
            </ScrollToTop>
          </Router>
        </ContextProvider>
      </StyleRoot>
    );
  }
}

export default Radium(App);
