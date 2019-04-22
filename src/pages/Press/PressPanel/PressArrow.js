import React from 'react';

const PressArrowInline = {
  main: {
    position: 'absolute',
    right: 20,
    top: 20
  }
};
const PressArrow = () => {
  return (
    <svg
      style={PressArrowInline.main}
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Press Arrow</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-537.000000, -26.000000)" stroke="#000000" strokeWidth="1.5">
          <g transform="translate(554.500000, 44.500000) scale(-1, 1) rotate(-180.000000) translate(-554.500000, -44.500000) translate(537.000000, 27.000000)">
            <g id="press-arrow-lines">
              <polyline
                transform="translate(17.250000, 17.250000) rotate(-180.000000) translate(-17.250000, -17.250000) "
                points="34.5 2.77555756e-16 3.55271368e-15 2.77555756e-16 3.55271368e-15 34.5"
              />
              <path
                d="M0,0 L33.5,33.5"
                transform="translate(17.000000, 17.000000) rotate(-180.000000) translate(-17.000000, -17.000000) "
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PressArrow;
