import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';

const TwoColumnText = (props) => {
  const renderParagraph = () => {
    if (props.hideParagraphMobile) {
      return (
        <MediaQuery minDeviceWidth={992}>
          <Col lg={6}>
            <p>{props.paragraph}</p>
          </Col>
        </MediaQuery>
      );
    } else {
      return (
        <Col lg={6}>
          <p>{props.paragraph}</p>
        </Col>
      );
    }
  };

  return (
    <Row 
      className={`two-column-text ${props.className ? props.className : null}`} 
    >
      <Col lg={6}>
        <MediaQuery maxDeviceWidth={992}>
          <h3 className='text-center no-margin-bottom'>{props.header}</h3>
        </MediaQuery>
        <MediaQuery minDeviceWidth={992}>
          <h3>{props.header}</h3>
        </MediaQuery>
      </Col>
      {renderParagraph()}
    </Row>
  );
};

export default TwoColumnText;