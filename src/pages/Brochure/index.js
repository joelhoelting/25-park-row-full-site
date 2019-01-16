import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Row, Col } from 'react-flexbox-grid';

import { mediaQueries, globalMediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';
import { colorVars } from '../../styles/Global/Colors';

class Brochure extends Component {
  constructor(props) {
    super(props);
    
    this.hidden = React.createRef();
  }

  componentDidMount() {
    this.hidden.current.classList.remove('hidden');
  }

  render() {
    const BrochureInline = {
      main: {
        [mediaQueries.tablet]: {
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        },
        [mediaQueries.desktop]: {
          width: '65%',
          maxWidth: '1600px'
        },
        box: {
          width: '100%',
          paddingBottom: '100%',
          cursor: 'pointer',
          position: 'relative',
          margin: `0 auto ${pxToRem(20)}`,
          [mediaQueries.tablet]: {
            display: 'inline-block',
            width: '48%',
            paddingBottom: '48%',
          },
          inner: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
      }
    };

    const BrochureCSS = {
      '.box': {
        color: '#000',
        border: '1px solid #000'
      },
      '.box-english': {
        background: colorVars.olive
      },
      '.box-mandarin': {
        background: colorVars.floorplanBlue
      },
      mediaQueries: {
        [globalMediaQueries.desktopSmall]: {
          '.box': {
            color: '#fff',
            border: '1px solid #fff'
          },
          '.box:hover': {
            color: '#000',
            border: '1px solid #000'
          },
          '.box-english': {
            background: 'transparent'
          },
          '.box-mandarin': {
            background: 'transparent'
          },
          '.box-english:hover': {
            background: colorVars.olive
          },
          '.box-mandarin:hover': {
            background: colorVars.floorplanBlue
          }
        }
      }
    };

    const { main } = BrochureInline;
    
    return (
      <div className={'large-container hidden'} ref={this.hidden}>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        <Style rules={BrochureCSS} />
        <Row>
          <Col lg={12}>
            <h3 className='text-center' style={{color: 'white'}}>Download Brochure</h3>
          </Col>
        </Row>
        <div className='brochure-container'>
          <div style={main}>
            <div key={'lang_english'} className='box box-english' style={main.box}>
              <a href='/downloads/brochure/25parkrow_rack_brochure_en.pdf' target='_blank'>
                <div style={main.box.inner}>
                  <h3>English</h3>
                </div>
              </a>
            </div>
            <div key={'lang_mandarin'} className='box box-mandarin' style={main.box}>
              <a href='/downloads/brochure/25parkrow_rack_brochure_cn.pdf' target='_blank'>
                <div style={main.box.inner}>
                  <h3>Mandarin</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Brochure);