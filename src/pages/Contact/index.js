import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import { Row, Col } from 'react-flexbox-grid';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      submitted: false
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  onSubmitForm() {
    this.setState({
      submitted: true
    });
  }

  onBack() {
    this.setState({
      submitted: false
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
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        {this.state.submitted ? <ThankYou onBack={() => {this.onBack();} }/> : null}
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
                <p style={[{margin: 0}, address.p]}>
                  25 Park Row <br/>Sales Gallery
                </p>
                <p style={[{ margin: 0, position: 'relative', right: '10px' }, address.p]}>
                  <img 
                    style={{ height: '15px', position: 'relative', right: '10px' }}
                    src='/images/icons/contact_pin.png' 
                  />
                  217 Broadway, Suite 600
                </p>
                <p style={[{ margin: 0}, address.p]}>
                  New York, NY 10007
                </p>
              </a>
              <a href="mailto:press@25parkrow.com">
                <p style={address.p}>info@25parkrow.com</p>
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
            onSubmitForm={() => { this.onSubmitForm(); }} 
          />
        </div>
      </div>
    );
  }
}

export default Radium(Contact);