import React from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Legal = (props) => {
  const LegalInline = {
    text: {
      textTransform: 'none',
      fontFamily: 'Maison Neue Book'
    }
  };

  return (
    <div className='large-container'>
      <Style rules={{'body': {backgroundColor: props.color}}}/>
      <Grid fluid>
        <Row>
          <Col lg={12}>
            <h3 className='text-center'>Legal</h3>
          </Col>
        </Row>
        <Row center='xs'>
          <Col sm={12} md={6}>
            <h6 style={LegalInline.text} className='justify'>All depictions of the building comprise computer and/or artist’s renderings, which reflect the planned scale and spirit of the Building. All dimensions and square footages are approximate and subject to normal construction variances and tolerances. All depictions of personal or condominium property (including without limitation any furniture, gym equipment, decorations, furnishings, fixtures, appliances, and landscaping) and the maturity of the growth in any landscaping are for illustrative purposes only. Pricing is subject to change. Where materials, equipment, finishes, fixtures, appliances, landscaping, and/or other construction or design details are displayed or specified, Sponsor reserves the right to substitute in each instance one of comparable or better quality as recognized by industry standards for performance, efficiency, longevity, and/or classifications, as applicable. Sponsor reserves the right to make changes in accordance with the terms of the Offering Plan. Sponsor makes no representation as to the continued existence of any of the named establishments or transportation lines located in the neighborhood. Sponsor makes no representation that any future construction in the neighborhood surrounding the Condominium will not result in the obstruction of the views from any windows, gardens, and/or terraces. Sponsor makes no representations or warranties except as may be set forth in the Offering Plan. The complete offering terms are in an offering plan available from Sponsor. File no. CD17-0208. Sponsor: Park Row 23 Owners LLC, 1865 Palmer Avenue, Suite 203, Larchmont, New York 10538. Equal housing opportunity.</h6>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Radium(Legal);