import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Row, Col } from 'react-flexbox-grid';

import teamData from 'data/teamData';
import TeamSection from './TeamSection';

import { globalMediaQueries } from 'styles/Global/MediaQueries';

class Team extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  activateCategory(event) {
    let category = event.currentTarget.getAttribute('data-category');
    
    this.setState({
      [category]: !this.state[category]
    });
  }

  renderTeams() {
    let rows = [];
    let columns = [];
    let rowCounter = 0;
    let categoryCounter = 0;
    let teamCategories = Object.keys(teamData);
    let teamLength = teamCategories.length;

    for (let c = 0; c < teamLength; c++) {
      let teamCategory = teamCategories[c];
      let teamCategoryAry = teamData[teamCategory];
      let categoryLength = teamCategoryAry.length;
      
      if (categoryLength > 0) {
        let categoryTitle = (
          <Row key={`team_row_${rowCounter}`} className={`team-row ${c === 0 ? 'team-row-first' : ''}`}>
            <Col lg={12}>
              <h3 className='text-center'>{teamCategory}</h3>
            </Col>
          </Row>
        ); 
        rows.push(categoryTitle);
        rowCounter++;
        
        for (let i = 0; i < categoryLength; i++) {
          let teamObject = teamCategoryAry[i];
          let colClass = () => {
            if (i % 2 === 0 && i === (categoryLength - 1)) {
              return 'team-column team-single-column-left';
            } else if (i % 2 === 0) {
              return 'team-column team-column-left';
            } else {
              return 'team-column team-column-right';
            }
          };
          
          columns.push(
            <Col 
              className={colClass()}
              key={`team_${c}_column_${i}`} 
              lg={6}
              data-category={categoryCounter}
              onClick={(event) => this.activateCategory(event)}
              style={{ cursor: 'pointer' }}
            >
              <TeamSection 
                teamDetails={teamObject} 
                category={categoryCounter}
                categoryActive={this.state[categoryCounter]}
              />
            </Col>
          );
          categoryCounter++;

          // If index is odd or last item --> push columns into row
          if ((i + 1) % 2 === 0 || i === (categoryLength - 1)) {
            rows.push(
              <Row key={`team_row_${rowCounter}`} className='team-row team-row-animate'>
                {columns}
              </Row>
            );
            rowCounter ++;
            columns = [];
          }
        }
      }        
    }
    
    return rows;
  }

  render() {
    const TeamCSS = {
      '.team-row': {
        borderBottom: '2px solid black'
      },
      '.team-row-first': {
        borderTop: '2px solid black'
      },
      '.team-column-left': {
        borderRight: 'none',
        borderBottom: '2px solid black'
      },
      '.team-column': {
        padding: 0
      },
      mediaQueries: {
        [globalMediaQueries.tabletLandscape]: {
          '.team-row': {
            borderBottom: '2px solid black'
          },
          '.team-row-first': {
            borderTop: 'none'
          },
          '.team-column-left': {
            borderRight: '2px solid black',
            borderBottom: 'none'
          },
          '.team-single-column-left': {
            borderRight: '2px solid black'
          },
          '.team-column:hover': {
            background: '#cecece'
          }
        }
      }
    };

    return (
      <div className={`full-width-container ${!this.state.mounted ? 'hidden' : ''}`}>
        <Style rules={{'body': { backgroundColor: this.props.color }}}/>
        <Style rules={TeamCSS} />
        <Row className='mobile-header'>
          <Col lg={12}>
            <h2 className='text-center'>Team</h2>
          </Col>
        </Row>
        {this.renderTeams()}
      </div>
    );
  }
}

export default Radium(Team);