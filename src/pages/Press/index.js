import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pressArticles from 'data/pressArticles';

import PressPanel from './PressPanel';

import { globalMediaQueries } from 'styles/Global/MediaQueries';

class Press extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  componentDidMount() {
    // After 500ms remove class 'hidden'
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  renderPressArticles() {
    let rows = [];
    let rowCounter = 0;
    let columns = [];

    let length = pressArticles.length;
    for (let i = 0; i < length; i++) {
      
      columns.push(
        <Col
          key={`press_column_${i}`} 
          xl={6}
        >
          <PressPanel {...pressArticles[i]} panelNumber={i} mounted={this.state.mounted}/>
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
      <div className={`press-container ${!this.state.mounted ? 'hidden' : ''}`}>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        <Style rules={PressCSS}/>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <h2 className='text-center'>Press</h2>
            </Col>
          </Row>
          {this.renderPressArticles()}
        </Grid>
      </div>
    );
  }
}

export default Radium(Press);