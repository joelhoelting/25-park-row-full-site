import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pressArticles from 'data/pressArticles';
import { Helmet } from 'react-helmet';

import PressPanel from './PressPanel';

import { globalMediaQueries } from 'styles/Global/MediaQueries';

class Press extends Component {
  constructor(props) {
    super(props);

    this.state = { mounted: false };
  }
  
  componentDidMount() {
    let $this = this;
    fetch('https://25parkrowcms.dbox.com/pressarticles')
      .then(response => response.json())
      .then(data => {
        this.pressArticles = data;
        
        this.setState({ fetchedData: true});
      })
      .then(() => {
        setTimeout(() => {
          $this.setState({ mounted: true});
        }, 300);
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.error('Error:', error);
        /* eslint-enable no-console */
        this.pressArticles = pressArticles;

        this.setState({ fetchedData: false});
      })
      .then(() => {
        setTimeout(() => {
          $this.setState({ mounted: true});
        }, 300);
      });    
  }

  renderPressArticles() {
    if (this.pressArticles) {
      let rows = [];
      let rowCounter = 0;
      let columns = [];

      let length = this.pressArticles.length;
      for (let i = 0; i < length; i++) {
        
        columns.push(
          <Col
            key={`press_column_${i}`} 
            xl={6}
          >
            <PressPanel 
              {...this.pressArticles[i]} 
              fetchedData={this.state.fetchedData} 
              panelNumber={i} 
              mounted={this.state.mounted} 
            />
          </Col>
        );

        // If index is odd or last item --> push columns into row
        if ((i + 1) % 2 === 0 || i === (length - 1)) {
          rows.push(
            <Row className='press-row' key={`press_row_${rowCounter}`}>
              {columns}
            </Row>
          );
          // Increment row counter
          rowCounter ++;
          // Empty column array
          columns = [];
        }
      }
      return rows;
    }
  }

  render() {
    const PressCSS = {
      mediaQueries: {
        [globalMediaQueries.tabletLandscape]: {
          '.press-panel:hover': {
            background: '#000',
            color: '#fff'
          },
          '.press-panel:hover #press-arrow-lines': {
            stroke: '#fff'
          }
        }
      }
    };

    return (
      <div className={`large-container`}>
        <Helmet>
          <title>25 Park Row | Press</title>
          <meta name="description" content="25 Park Row is a 21st century architectural icon providing unmatched downtown NYC views from every condominium over historic City Hall Park." />
        </Helmet>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        <Style rules={PressCSS}/>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <h3 className='text-center'>Press</h3>
            </Col>
          </Row>
          {this.renderPressArticles()}
        </Grid>
      </div>
    );
  }
}

export default Radium(Press);