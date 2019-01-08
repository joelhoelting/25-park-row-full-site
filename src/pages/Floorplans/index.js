import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Row, Col } from 'react-flexbox-grid';
import { parseString } from 'xml2js';

import localAvailabilityData from 'data/localAvailabilityData';
import Floorplan from './Floorplan';
import FloorplanOverlay from './FloorplanOverlay';

import { globalMediaQueries } from 'styles/Global/MediaQueries';
import { insertCommas } from 'helpers/Math';
import { generateFloorplanSrc } from 'helpers/Floorplans';

// Data for Floorplans
// https://www.corcoran.com/newdevxml/606NewDevs.xml

class Floorplans extends Component {
  constructor(props) {
    super(props);

    // Store unparsed data before component mounts
    parseString(localAvailabilityData, (err, result) => {
      const localListings = result.Listings.Listing;
      this.unparsedListings = localListings;
    });

    // Refs
    this.hidden = React.createRef();
    
    this.state = {
      sortedUnits: {},
      floorplanOverlay: {
        active: false,
        unit: ''
      }
    };

    // Two floor units
    this.twoLevelUnits = ['5A', '15B', '45PH'];
    // Parse initial data
    this.parseData();
  }

  componentDidMount() {
    this.setState({ sortedUnits: this.parsedUnits });

    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
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
      let bedrooms = listing.BasicDetails[0].Bedrooms[0];
      let listingObj = {
        residence: listing.Location[0].UnitNumber[0],
        bedrooms: listing.BasicDetails[0].Bedrooms[0],
        bathrooms: listing.BasicDetails[0].Bathrooms[0],
        interior: listing.BasicDetails[0].LivingArea[0],
        exterior: '',
        price: insertCommas(listing.ListingDetails[0].Price[0])
      };
      
      let { residence } = listingObj;
      // Determine if unit has two levels
      if (this.twoLevelUnits.includes(residence)) {
        listingObj.hasTwoLevels = true;
      } else {
        listingObj.hasTwoLevels = false;
      }

      let imgFilename = generateFloorplanSrc(residence);
      listingObj.imgSrc = imgFilename;
      
      this.parsedUnits[bedrooms].push(listingObj);
    });
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
            <Row className={`floorplan-row-${c}`} key={`floorplan_row_${rowCounter}`}>
              <Col xl={12}>
                <h3 className='text-center'>{`${c} Bedrooms`}</h3>
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
    }
    
    return rows;
  }

  render() {
    const FloorplanCSS = {
      '.floorplan-row-5': {
        borderTop: '2px solid black'
      },
      '.floorplan-row' : {
        borderTop: '2px solid black',
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
          '.floorplan-row-5': {
            borderTop: 'none'
          },
          '.floorplan-single-column-left': {
            borderRight: '2px solid black'
          },
          '.floorplan-column-left': {
            borderBottom: 'none',
            borderRight: '1px solid black'
          },
          '.floorplan-column-right': {
            borderLeft: '1px solid black'
          },
        }
      }
    };

    return (
      <div>
        <Style rules={{'body': { backgroundColor: this.props.color }}}/>
        <Style rules={FloorplanCSS} />
        <div className={`floorplan-container ${!this.state.mounted ? 'hidden' : ''}`}>
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