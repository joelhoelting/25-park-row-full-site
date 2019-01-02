import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Dropdown from 'react-dropdown';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';

import { mediaQueries, globalMediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';
import { validateEmail } from 'helpers/Validations';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      broker: '',
      howhear: '',
      zipcode: '',
      residencesize: '',
      invalidFields: {
        firstname: false,
        lastname: false,
        email: false,
        howhear: false
      },
      invalidFieldsPresent: false
    };
  }

  validateForm() {
    let invalidFieldsPresent, firstname, lastname, email, howhear;
    
    this.state.firstname.length > 1 ? firstname = false : firstname = true;
    this.state.lastname.length > 1 ? lastname = false : lastname = true;
    validateEmail(this.state.email) ? email = false : email = true;
    this.state.howhear.length > 1 ? howhear = false : howhear = true;
    
    if (firstname || lastname || email || howhear) {
      invalidFieldsPresent = true;
    } else {
      invalidFieldsPresent = false;
    }
    
    this.setState({
      invalidFields: {
        firstname,
        lastname,
        email,
        howhear
      },
      invalidFieldsPresent
    });

    return invalidFieldsPresent;
  }

  onSubmitForm(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      return;
    } else {
      /* send email with new user info */
      // let text;
      // if (this.state.broker === 'yes') {
      //   text = `Hi,\n\nA new registrant signed up:\n\n
      //       \n\nName: ${this.state.firstname} ${this.state.lastname}
      //       \n\nEmail: ${this.state.email}
      //       \n\nPhone: ${this.state.phonenumber}
      //       \n\nHow did you hear about us: ${this.state.howhear}
      //       \n\nIs broker: ${this.state.broker}
      //       \n\n\n\nBest,\n\n25 Park Row Web Team
      //     `;
      // } else {
      //   text = `Hi,\n\nA new registrant signed up:\n\n
      //     \n\nName: ${this.state.firstname} ${this.state.lastname}
      //     \n\nEmail: ${this.state.email}
      //     \n\nPhone: ${this.state.phonenumber}
      //     \n\nZip: ${this.state.zipcode}
      //     \n\nResidence Size: ${this.state.residencesize}
      //     \n\nHow did you hear about us: ${this.state.howhear}
      //     \n\nIs broker: ${this.state.broker}
      //     \n\n\n\nBest,\n\n25 Park Row Web Team
      //   `;
      // }

      // var emailData = {
      //   from: ''25 Park Row Web Team' <no_reply_25parkrow@dbxd.com>',
      //   to: ''Test Admin' <val+25parkrow-test@dbox.com>',
      //   subject: 'New Registrant - 25 Park Row - ' + this.state.firstname + ' ' + this.state.lastname,
      //   text: text
      // };

      // fetch('https://form.api.dbxd.com/post-ses-email', {
      //   method: 'POST',
      //   mode: 'cors',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(emailData),
      // })
      //   .then(response => response.json())
      //   .then((result) => {
      //     console.log('email sending successful ', result);
          
      //     this.props.onSubmitForm();
      //     this.setState({
      //       firstname: '',
      //       lastname: '',
      //       zipcode: '',
      //       email: '',
      //       phonenumber: '',
      //       residencesize: '',
      //       howhear: '',
      //       broker: ''
      //     });
      //   })
      //   .catch((error) => {
      //     console.log('error sending email ',error);
      //   });
    }
  }

  handleChange(e, optionalProperty=null) {
    let property = optionalProperty || e.target.name;
    let value = e.value || e.target.value;
    
    this.setState({
      [property]: value
    });
  }

  handleChangeRequired(e, optionalProperty=null) {
    let property = optionalProperty || e.target.name;
    let value = e.value || e.target.value;
    let propertyInvalid;

    property === 'email' ? propertyInvalid = !validateEmail(value) : propertyInvalid = !(value.length > 1);
    
    let invalidFieldsPresent = () => {
      if (propertyInvalid) {
        return true;
      } else {
        let invalidFieldsCopy = Object.assign({}, this.state.invalidFields);
        delete invalidFieldsCopy[property];
        if (Object.values(invalidFieldsCopy).includes(true)) {
          return true;
        } else {
          return false;
        }
      }
    };

    this.setState({
      [property]: value,
      invalidFields: {
        ...this.state.invalidFields,
        [property]: propertyInvalid 
      },
      invalidFieldsPresent: invalidFieldsPresent()
    });
  }

  render() {
    const ContactFormCSS = {
      // React Dropdown
      '.Dropdown-root, .Dropdown-control': {
        appearance: 'none',
        display: 'block',
        width: '100%',
        height: '100%',
      },
      '.Dropdown-root': {
        display: 'flex'
      },
      '.Dropdown-control': {
        padding: 0,
        minHeight: 'calc(2.7rem)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-end'
      },
      '.Dropdown-placeholder': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: `${rem(10)} 0`
      },
      '.Dropdown-menu': {
        position: 'absolute',
        top: '2rem', 
        left: 0,
        background: '#636551',
        border: '1px solid #fff',
        padding: '20px 0',
        zIndex: '300',
        width: '100%'
      },
      '.Dropdown-menu .Dropdown-option': {
        whiteSpace: 'nowrap',
        padding: '10px 20px',
        cursor: 'pointer'
      },
      '.Dropdown-menu .Dropdown-option:hover': {
        background: '#7d7f66',
      },
      '.Dropdown-arrow': {
        position: 'absolute',
        right: rem(10),
        top: '54%',
        zIndex: -1,
        height: rem(15),
        width: rem(15),
      },
      // Radios
      '.radio-item': {
        display: 'inline-block',
        position: 'relative',
        paddingLeft: rem(35),
        marginBottom: rem(12),
        marginRight: rem(40),
        cursor: 'pointer',
        fontSize: rem(16),
        userSelect: 'none'
      },
      '.radio-item input': {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer'
      },
      '.checkmark': {
        position: 'absolute',
        top: 0,
        left: 0,
        height: rem(16),
        width: rem(16),
        background: 'transparent',
        border: '1px solid #fff',
        borderRadius: '50%',
        transition: 'background 200ms ease'
      },
      '.radio-item:hover input ~ .checkmark': {
        background: 'rgba(255,255,255,.2)'
      },
      '.radio-item input:checked ~ .checkmark': {
        background: '#fff'
      },
      '.radio-item input:checked ~ .checkmark:after': {
        display: 'block'
      },
      // Select
      select: {
        border: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        color: 'white',
        background: 'none',
        fontFamily: 'Maison Neue Extended, sans-serif',
        fontWeight: 300,
        textTransform: 'uppercase',
        fontSize: rem(16),
        marginLeft: rem(-4),
        minHeight: rem(40)
      },
      'select:-moz-focusring': {
        color: 'transparent',
        textShadow: '0 0 0 #000',
      },
      // Label Animations
      label: {
        transition: 'all 150ms ease',
        transform: 'scale(1)',
        transformOrigin: 'top left'
      },
      'input:focus ~ label, .Dropdown-root.is-open ~ label': {
        transform: 'scale(.65)'
      },
      mediaQueries: {
        [globalMediaQueries.tabletLandscape]: {
          '.radio-item': {
            fontSize: rem(20),
          },
          '.checkmark': {
            height: rem(20),
            width: rem(20),
          }
        }
      }
    };
  
    const ContactFormInline = {
      main: {
        fontFamily: 'Maison Neue Extended, sans-serif',
        fontWeight: 300,
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: rem(16),
        letterSpacing: rem(1),
        [mediaQueries.tabletLandscape]: {
          fontSize: rem(20)
        },
        formItem: {
          margin: `${rem(25)} ${rem(10)}`,
          borderBottom: '1px solid #fff',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column-reverse',
          height: rem(70),
          noBorder: {
            borderBottom: 0,
          },
          off: {
            opacity: '.1',
            pointEvents: 'none'
          },
          input: {
            background: 'transparent',
            caretColor: 'white',
            color: '#fff',
            fontFamily: 'Maison Neue Extended, sans-serif',
            fontWeight: 300,
            textTransform: 'uppercase',
            width: '90%',
            border: 0,
            padding: `${rem(10)} 0`
          },
          label: {
            width: '100%',
            position: 'absolute',
            top: 0
          },
          radioContainer: {
            marginTop: rem(15)
          }
        },
        submit: {
          color: '#fff',
          borderRadius: '50%',
          border: '1px solid white',
          background: 'transparent',
          display: 'block',
          height: rem(120),
          width: rem(120),
          margin: `${rem(40)} auto`,
          padding: 0,
          cursor: 'pointer',
          [mediaQueries.tabletLandscape]: {
            margin: `${rem(50)} auto 0`,
            ':hover': {
              background: '#6f715b' 
            }
          }
        },
        error: {
          color: 'red'
        },
        buttonError: {
          color: 'red',
          border: '1px solid red'
        }
      }
    };

    const { main } = ContactFormInline;

    const hearFromUsOptions = [
      'Online Search/Digital Ad',
      'Word of Mouth',
      'Building Sign',
      'NYT Magazine',
      'NYT Real Estate Section',
      'Print Advertising (other)'
    ];

    const residenceOptions = [
      '1 BRs from approx. $1.655M', 
      '2 BRs from approx. $2.125M', 
      '3 BRs from approx. $3.550M',
      '4 BRs from approx. $6.250M',
      'Penthouse upon request'
    ];

    return (
      <form 
        style={main} 
        onSubmit={(e) => this.onSubmitForm(e)}
      >
        <Style rules={ContactFormCSS}/>
        <Row>
          <Col md={6}>
            <div style={main.formItem}>
              <input 
                name='firstname' 
                type='text' 
                style={main.formItem.input}
                value={this.state.firstName}
                onChange={(e) => this.handleChangeRequired(e)}
              />
              <label 
                style={main.formItem.label}
                htmlFor='firstname'
              >
                <span style={this.state.invalidFields.firstname ? main.error : null}>
                  First Name *
                </span>
              </label>
            </div>
          </Col>
          <Col md={6}>
            <div style={main.formItem}>
              <input 
                name='lastname' 
                type='text' 
                style={main.formItem.input}
                value={this.state.lastName}
                onChange={(e) => this.handleChangeRequired(e)} 
              />
              <label 
                style={main.formItem.label}
                htmlFor='lastname'
              >
                <span style={this.state.invalidFields.lastname ? main.error : null}>Last Name *</span>
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={main.formItem}>
              <input 
                name='email' 
                type='text' 
                style={main.formItem.input}
                value={this.state.email}
                onChange={(e) => this.handleChangeRequired(e)}
              />
              <label 
                style={main.formItem.label}
                htmlFor='email'
              >
                <span style={this.state.invalidFields.email ? main.error : null}>Email *</span>
              </label>
            </div>
          </Col>
          <Col md={6}>
            <div style={main.formItem}>
              <input 
                name='phone' 
                type='text' 
                style={main.formItem.input}
                value={this.state.phone}
                onChange={(e) => this.handleChange(e)} 
              />
              <label htmlFor='phone' style={main.formItem.label}>Phone Number</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={[main.formItem, main.formItem.noBorder]}>
              <div style={main.formItem.radioContainer}>
                <label className='radio-item'>
                  Yes
                  <input 
                    checked={this.state.broker === 'yes'} 
                    name='broker'
                    type='radio' 
                    value='yes' 
                    onChange={(e) => this.handleChange(e)} 
                  />
                  <span className="checkmark"></span>
                </label>
                <label className='radio-item'>
                  No
                  <input 
                    checked={this.state.broker === 'no'} 
                    name='broker'
                    type='radio' 
                    value='no' 
                    onChange={(e) => this.handleChange(e)} 
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <label style={main.formItem.label}>Are you a broker?</label>
            </div>
          </Col>
          <Col md={6}>
            <div style={main.formItem}>
              <MediaQuery minWidth={768}>
                <Dropdown 
                  placeholder="" 
                  options={hearFromUsOptions} 
                  value={this.state.howhear}
                  name="howhear" 
                  onChange={(e) => this.handleChangeRequired(e, 'howhear')}
                />
              </MediaQuery>
              <MediaQuery maxWidth={767}>
                <select 
                  value={this.state.howhear} 
                  name="howhear" 
                  onChange={(e) => this.handleChangeRequired(e)} 
                >
                  <option value=""></option>
                  <option value="Online Search/Digital Ad">Online Search/Digital Ad</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Building Sign">Building Sign</option>
                  <option value="NYT Magazine">NYT Magazine</option>
                  <option value="NYT Real Estate Section">NYT Real Estate Section</option>
                  <option value="Print Advertising (other)">Print Advertising (other)</option>
                </select>
              </MediaQuery>
              <label htmlFor='howhear' style={main.formItem.label}>
                <span style={this.state.invalidFields.howhear ? main.error : null}>
                  How did you hear about us? *
                </span>
              </label>
              <img className="Dropdown-arrow" src="/images/icons/down-arrow.png" alt="Down Arrow"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={[main.formItem, this.state.broker === 'yes' ? main.formItem.off : null]}>
              <input 
                name='zipcode' 
                type='text' 
                style={main.formItem.input}
                value={this.state.zipcode}
                onChange={(e) => this.handleChange(e)}
                disabled={this.state.broker === 'yes' ? true : false}
              />
              <label style={main.formItem.label} htmlFor='zipcode'>Zip Code</label>
            </div>
          </Col>
          <Col md={6}>
            <div style={[main.formItem, this.state.broker === 'yes' ? main.formItem.off : null]}>
              <MediaQuery minWidth={768}>
                <Dropdown 
                  placeholder="" 
                  options={residenceOptions} 
                  value={this.state.residencesize}
                  name="residencesize" 
                  onChange={(e) => this.handleChange(e, 'residencesize')}
                  disabled={this.state.broker === 'yes' ? true : false}
                />
              </MediaQuery>
              <MediaQuery maxWidth={767}>
                <select 
                  value={this.state.residencesize} 
                  name="residencesize" 
                  onChange={(e) => this.handleChange(e)} 
                >
                  <option value=""></option>
                  <option value="1 BRs from approx. $1.655M">1 BRs from approx. $1.655M</option>
                  <option value="2 BRs from approx. $2.125M">2 BRs from approx. $2.125M</option>
                  <option value="3 BRs from approx. $3.550M">3 BRs from approx. $3.550M</option>
                  <option value="4 BRs from approx. $6.250M">4 BRs from approx. $6.250M</option>
                  <option value="Penthouse (upon request)">Penthouse (upon request)</option>
                </select>
              </MediaQuery>
              <label style={main.formItem.label} htmlFor='residencesize'>RESIDENCE SIZE</label>
              <img className="Dropdown-arrow" src="/images/icons/down-arrow.png" alt="Down Arrow"/>
            </div>
          </Col>
        </Row>
        <input style={[main.submit, this.state.invalidFieldsPresent ? main.buttonError : null]} type="submit" value="SUBMIT"/>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func
};

export default Radium(ContactForm);