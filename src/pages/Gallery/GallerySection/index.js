import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ExpandImage from './ExpandImage';

const GallerySection = (props) => {

  const buildRows = () => {
    let rows = [];
    let rowCounter = 0;
    let columns = [];
    let length = props.imgAry.length;

    for (var i = 0; i < length; i++) {
      // Push column into array
      columns.push(
        <Col 
          className={`column-margin gallery-column-${i}`} 
          key={`gallery_column_${i}`} 
          lg={6}
        >
          <ExpandImage 
            toggleCarousel={props.toggleCarousel} 
            columnHeight={props.columnHeight}
            imgData={props.imgAry[i]}
            width={props.width}
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
          <h3 className='text-center'>{props.title}</h3>
        </Col>
      </Row>
      {buildRows()}
    </div>
    
  );
};
 
export default GallerySection;