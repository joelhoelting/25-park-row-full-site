import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ExpandImage from './ExpandImage';
import { pxToRem } from 'helpers/Math';

const GallerySection = (props) => {
  const styles = {
    main: {
      header: {
        margin: `${pxToRem(28)} 0`
      }
    }
  };

  const buildRows = () => {
    let rows = [];
    let rowCounter = 0;
    let columns = [];
    let length = props.imgAry.length;

    for (var i = 0; i < length; i++) {
      // Push column into array
      
      columns.push(
        <Col className='column-margin' key={`gallery_column_${i}`} lg={6}>
          <ExpandImage 
            toggleCarousel={props.toggleCarousel} 
            caption={props.imgAry[i].caption}
            carouselIndex={props.imgAry[i].carouselIndex} 
            src={props.imgAry[i].src} 
            width='50%'
            noMobile
          />
        </Col>
      );
      // If index is odd push two columns into row
      if ((i + 1) % 2 === 0 || i === (length - 1)) {
        rows.push(
          <Row key={`gallery_row_${rowCounter}`}>
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
  };

  return (  
    <div>
      <Row>
        <Col sm={12}>
          <h2 className='text-center' style={styles.main.header}>{props.title}</h2>
        </Col>
      </Row>
      {buildRows()}
    </div>
    
  );
};
 
export default GallerySection;