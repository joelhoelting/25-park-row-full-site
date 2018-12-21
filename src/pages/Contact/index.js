import React, {Component} from 'react';
import Radium, {Style} from 'radium';

import { rem } from 'helpers/Math';
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
        textAlign: 'center',
        padding: `${rem(50)} 0`,
        p: {
          fontSize: rem(20)
        }
      }
    };

    const { address } = ContactInline;
    return (
      <div className={`contact-container ${!this.state.mounted ? 'hidden' : ''}`}>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        {this.state.submitted ? <ThankYou onBack={() => {this.onBack();} }/> : null}
        <div>
          <div style={address}>
            <p style={[{marginBottom: 0}, address.p]}>
              25 Park Row Sales Gallery
            </p>
            <a href="https://goo.gl/maps/ZUHHi7AP83x" rel='noopener noreferrer' target="_blank">
              <p style={[{marginTop: 0}, address.p]}>217 Broadway, Suite 600, <br style={{'@media (min-width: 768px)': {display: 'none'}}}/>
                New York, NY 10007
              </p>
            </a>
            <a href="mailto:press@25parkrow.com">
              <p style={address.p}>info@25parkrow.com</p>
            </a>
          </div>
          <ContactForm 
            onSubmitForm={() => { this.onSubmitForm(); }} 
          />
        </div>
      </div>
    );
  }
}

export default Radium(Contact);