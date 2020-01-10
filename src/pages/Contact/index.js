import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import { Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import gaTracker from 'utils/gaTracker';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      thankYouActive: false
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  toggleThankYou() {
    this.setState({
      thankYouActive: !this.state.thankYouActive
    });
  }

  render() {
    const ContactInline = {
      address: {
        color: '#fff',
        padding: `${pxToRem(30)} 0`,
        textAlign: 'center',
        [mediaQueries.tablet]: {
          padding: 0,
          textAlign: 'initial'
        },
        p: {
          fontSize: pxToRem(20)
        }
      },
      img: {
        margin: `${pxToRem(40)} auto`,
        maxWidth: '100%',
        [mediaQueries.tablet]: {
          margin: '0 auto 0 0',
        },
        display: 'block',
      }
    };

    const { address, img } = ContactInline;
    return (
      <div className={`contact-container ${!this.state.mounted ? 'hidden' : ''}`}>
        <Helmet>
          <title>25 Park Row | Contact</title>
          <meta name="description" content="25 Park Row is a 21st century architectural icon providing unmatched downtown NYC views from every condominium over historic City Hall Park." />
        </Helmet>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        <ThankYou 
          active={this.state.thankYouActive}          
          closeThankYou={() => {this.closeThankYou();} }
        />
        <Row className='mobile-header'>
          <Col lg={12}>
            <h2 className='text-center' style={{ color: '#fff'}}>Contact Us</h2>
          </Col>
        </Row>
        <Row 
          start='lg' 
          className='row-extra-padding-desktop-3'
        >
          <Col md={6}>
            <div style={address}>
              <a href="https://goo.gl/maps/LW384reRaYR2" rel='noopener noreferrer' target="_blank">
                <p style={{margin: 0, fontSize: pxToRem(20)}}>
                  25 Park Row <br/>Sales Gallery
                </p>
                <p style={[{ margin: 0, position: 'relative', right: '10px'}, address.p]}>
                  <img 
                    alt='legend for sales gallery pin'
                    style={{ height: '15px', position: 'relative', right: '10px' }}
                    src='/images/icons/contact_pin.png' 
                  />
                  217 Broadway, Suite 600
                </p>
                <p style={[{ margin: 0 }, address.p]}>
                  New York, NY 10007
                </p>
              </a>
              <a href="mailto:info@25parkrow.com">
                <p style={address.p}>info@25parkrow.com</p>
              </a>
              <a href="tel:+1-646-933-4625">
                <p style={address.p}>646.933.4625</p>
              </a>
            </div>
          </Col>
          <Col md={6}>
            <a 
              href='https://goo.gl/maps/LW384reRaYR2' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <img 
                alt='click to view 25 park row in google maps'
                style={img} 
                src='/images/map/25parkrow_contact_map.png'   
              />
            </a>
          </Col>
        </Row>
        <div>
          <ContactForm 
            toggleThankYou={() => this.toggleThankYou() }
          />
        </div>
      </div>
    );
  }
}

export default gaTracker(Radium(Contact));