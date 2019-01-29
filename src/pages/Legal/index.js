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
            <h6 style={LegalInline.text} className='justify'>Park Row 23 Owners LLC knows you care about your privacy and expect us to protect it. By providing your contact information and using our website, however, you agree that any information or comments you provide may be used by Park Row 23 Owners LLC as provided herein. Unless specifically agreed to, we will not sell, license or otherwise trade any information you provide to us to any other entity or person at any time which is not affiliated with Park Row 23 Owners LLC or our broker, Corcoran Sunshine Marketing Group, and will exercise reasonable efforts to keep your information secure.</h6>
            <h6 style={LegalInline.text} className='justify'>By using this website, you signify your consent to the terms of this privacy policy. If you do not agree with these terms, please do not disclose any personal information through our site. Park Row 23 Owners LLC expects that from time to time changes will be made to this privacy policy and reserves the right to make these changes at any time, without prior notice to anyone. If we decide to change this privacy policy, we will post those changes here so that you will know what information we may gather, how we intend to use that information and who it may be disclosed to.</h6>
            <h6 style={LegalInline.text} className='justify'>Park Row 23 Owners LLC’s web site contains links to third party websites. These links are provided for convenience purposes only and are not under our control. By electing to link to such third party websites, you acknowledge that Park Row 23 Owners LLC makes no representations or warranties, either expressed or implied, concerning the content or use of such sites Park Row 23 Owners LLC does not warrant that such sites are free from (i) any claims of copyright or other infringement or (ii) known or unknown viruses. Park Row 23 Owners LLC accepts no liability of any kind whatsoever arising out of your use of such third party websites or the security of information you may provide to them.</h6>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Radium(Legal);