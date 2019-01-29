import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Row, Col } from 'react-flexbox-grid';
import { parseString } from 'xml2js';

import localAvailabilityData from 'data/localAvailabilityData';
import Floorplan from './Floorplan';
import FloorplanOverlay from './FloorplanOverlay';

import { colorVars } from 'styles/Global/Colors';
import { globalMediaQueries } from 'styles/Global/MediaQueries';
import { insertCommas } from 'helpers/Math';
import { generateFloorplanSrc } from 'helpers/Floorplans';

// Data for Floorplans
// https://www.corcoran.com/newdevxml/606NewDevs.xml

class Floorplans extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sortedUnits: {},
      floorplanOverlay: {
        active: false,
        unit: ''
      }
    };
  }

  componentDidMount() {
    this.unparsedListings = [];
    // Fetch listings from Corcoran Sunshine
    // https://p2wmwwcrlf.execute-api.us-east-1.amazonaws.com/test/listings
    let $this = this;
    fetch('https://jsonplaceholder.typicode.com/404')
      .then(response => response.json())
      .then(data => {
        this.unparsedListings = data.body.Listings.Listing;
        $this.parseData();
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.error('Error:', error);
        /* eslint-enable no-console */
        parseString(localAvailabilityData, (err, result) => {
          $this.unparsedListings = result.Listings.Listing;
          $this.parseData();
        });
      });
  }

  // Change state to show/hide floorplan overlay
  toggleOverlay(unit=false) {
    // Toggle active state of overlay
    this.setState({ floorplanOverlay: { active: !this.state.floorplanOverlay.active, unit }});
  }

  // Parse, filter, sorting functionality for floorplans 
  parseData() {
    this.parsedUnits = {
      5: [],
      4: [],
      3: [],
      2: [],
      1: []
    };
    
    this.unparsedListings.forEach((listing) => {
      let listingObj = {
        residence: listing.Location[0].UnitNumber[0],
        bedrooms: parseFloat(listing.BasicDetails[0].Bedrooms[0]),
        bathrooms: parseFloat(listing.BasicDetails[0].Bathrooms[0]),
        interior: listing.BasicDetails[0].LivingArea[0],
        exterior: listing.BasicDetails[0].ExtLivingArea ? listing.BasicDetails[0].ExtLivingArea[0] : undefined,
        taxAmount: insertCommas(listing.ListingDetails[0].MaintenanceCC[0]),
        monthlyCC: insertCommas(listing.ListingDetails[0].MaintenanceCC[0]),
        price: insertCommas(listing.ListingDetails[0].Price[0]),
        active: listing.ListingDetails[0].Status[0] === "Active" ? true : false
      };
      
      let { residence } = listingObj;

      let srcObj = generateFloorplanSrc(residence);
      listingObj.hasTwoLevels = srcObj.hasTwoLevels;
      listingObj.isPenthouse = srcObj.isPenthouse;
      listingObj.imgSrc = srcObj.imgFilename;
      listingObj.pdfSrc = srcObj.pdfFilename;
      
      if (listingObj.active) {
        this.parsedUnits[listingObj.bedrooms].push(listingObj);
      }
    });

    setTimeout(() => {
      this.setState({ sortedUnits: this.parsedUnits, mounted: true });
    }, 500);
  }

  renderUnits() {
    // Create variables
    let rows = [];
    let rowCounter = 0;
    let columns = [];

    if (Object.keys(this.state.sortedUnits).length > 0) {
      
      // Loop through availability data
      for (let c = 5; c > 0; c--) {
        let categoryLength = this.state.sortedUnits[c].length;

        if (categoryLength > 0) {
          let unitCategory = (
            <Row className={`floorplan-category-${c} floorplan-category`} key={`floorplan_row_${rowCounter}`}>
              <Col xl={12}>
                <h3 className='text-center'>{`${c} ${c > 1 ? 'Bedrooms' : 'Bedroom'}`}</h3>
              </Col>
            </Row>
          ); 
          rows.push(unitCategory);
          rowCounter++;

          for (let u = 0; u < categoryLength; u++) {
            let colClass = () => {
              if (u % 2 === 0 && u === (categoryLength - 1)) {
                return 'floorplan-column floorplan-single-column-left';
              } else if (u % 2 !== 0) {
                return 'floorplan-column floorplan-column-right';
              } else {
                return 'floorplan-column floorplan-column-left';
              }
            };
            
            columns.push(
              <Col 
                className={colClass()}
                key={`bedroom_${c}_column_${u}`} 
                xl={6}
              >
                <Floorplan 
                  key={`bedroom_${c}_floorplan_${u}`} 
                  unit={this.state.sortedUnits[c][u]} 
                  toggleOverlay={(unit) => this.toggleOverlay(unit)}
                  width={this.props.width}
                />
              </Col>
            );

            // If index is odd or last item --> push columns into row
            if ((u + 1) % 2 === 0 || u === (categoryLength - 1)) {
              rows.push(
                <Row className='floorplan-row' key={`floorplan_row_${rowCounter}`}>
                  {columns}
                </Row>
              );
              // Increment row counter
              rowCounter ++;
              // Empty column array
              columns = [];
            }
          }
        }        
      }
      return rows;
    } else {
      return (
        <h1 className='text-center'>Nothing to see here</h1>
      );
    }
  }

  render() {
    const FloorplanCSS = {
      '.floorplan-category': {
        borderBottom: '2px solid black'
      },
      '.floorplan-row' : {
        borderBottom: '2px solid black'
      },
      '.floorplan-column': {
        padding: 0
      },
      '.floorplan-single-column-left': {
        borderRight: 'none',
      },
      '.floorplan-column-left': {
        borderBottom: '2px solid black',
        borderRight: 'none'
      },
      '.floorplan-column-right': {
        borderLeft: 'none'
      },
      mediaQueries: {
        [globalMediaQueries.desktopSmall]: {
          '.floorplan-section:hover .floorplan-section-overlay': {
            background: colorVars.floorPlanBlueTransparent
          },
          '.floorplan-row-5': {
            borderTop: 'none'
          },
          '.floorplan-single-column-left': {
            borderRight: '2px solid black'
          },
          '.floorplan-column-left': {
            borderBottom: 'none',
            borderRight: '2px solid black'
          }
        }
      }
    };

    return (
      <div>
        <Style rules={{'body': { backgroundColor: this.props.color }}}/>
        <Style rules={FloorplanCSS} />
        <div className={`full-width-container ${!this.state.mounted ? 'hidden' : ''}`}>
          <Row className='mobile-header border-bottom'>
            <Col lg={12}>
              <h2 className='text-center'>Floorplans</h2>
            </Col>
          </Row>
          {this.renderUnits()}
          <FloorplanOverlay 
            active={this.state.floorplanOverlay.active}
            unit={this.state.floorplanOverlay.unit}
            toggleOverlay={() => this.toggleOverlay()} 
          />
        </div>
      </div>
    );
  }
}

export default Radium(Floorplans);