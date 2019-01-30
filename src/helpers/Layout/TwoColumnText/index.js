import React from 'react';
import Radium from 'radium';
import { Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const TwoColumnText = (props) => {
  const TwoColumnTextInline = {
    paragraph: {
      [mediaQueries.tabletLandscape]: {
        lineHeight: pxToRem(24),
      },
    }
  };

  const renderParagraph = () => {
    if (props.hideParagraphMobile) {
      return (
        <MediaQuery minWidth={992}>
          <Col lg={6}>
            <p style={TwoColumnTextInline.paragraph}>{props.paragraph}</p>
          </Col>
        </MediaQuery>
      );
    } else {
      return (
        <Col lg={6}>
          <p style={TwoColumnTextInline.paragraph}>{props.paragraph}</p>
        </Col>
      );
    }
  };

  return (
    <div ref={props.innerRef ? props.innerRef : null}>
      <Row 
        className={`two-column-text ${props.className ? props.className : null}`} 
      >
        <Col lg={6}>
          <MediaQuery maxWidth={992}>
            <h3 className='text-center no-margin-bottom'>{props.header}</h3>
          </MediaQuery>
          <MediaQuery minWidth={992}>
            <h3>{props.header}</h3>
          </MediaQuery>
        </Col>
        {renderParagraph()}
      </Row>
    </div>
  );
};

export default Radium(TwoColumnText);