import React from 'react';
import Radium from 'radium';
import { pxToRem } from 'helpers/Math';
import { mediaQueries } from '../../styles/Global/MediaQueries';

const InfoContainer = props => {
  const InfoContainerInline = {
    wrapper: {
      background: '#D8D8D8',
      // borderTop: !props.active ? 'none' : '2px solid #000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'Maison Neue Extended Book, sans-serif',
      maxHeight: props.active ? '375px' : 0,
      height: '375px',
      transition: !props.active && 'max-height 200ms ease',
      [mediaQueries.phoneLarge]: {
        maxHeight: props.active ? '350px' : 0,
        height: '350px',
      },
      [mediaQueries.tablet]: {
        maxHeight: props.active ? '275px' : 0,
        height: '275px',
      },
      [mediaQueries.tabletLandscape]: {
        maxHeight: props.active ? '200px' : 0,
        height: '200px',
      },
      [mediaQueries.desktopLarge]: {
        maxHeight: props.active ? '250px' : 0,
        height: '250px',
      },
      text: {
        width: '88%',
        textTransform: 'none',
        fontFamily: 'Maison Neue Book',
        opacity: props.active ? 1 : 0,
        visibility: props.active ? 'visible' : 'hidden',
        transition: 'all 100ms ease',
        margin: 0
      }
    }
  };

  return (
    <div className='info-container' style={InfoContainerInline.wrapper}>
      <h6 style={[InfoContainerInline.wrapper.text, { paddingTop: pxToRem(20), paddingBottom: pxToRem(20)}]}>Offering 110 residences, 25 Park Row is a 21st century architectural icon at the center of the New Downtown, providing unmatched views from every residence over historic City Hall Park. At 25 Park Row, COOKFOX Architects has created the quintessential downtown luxury condominium, reinterpreting the classic Art Deco skyscraper through an expressive series of cascading terraces, setbacks, and loggias.</h6>
      <h6 style={[InfoContainerInline.wrapper.text, { paddingBottom: pxToRem(20)}]}>Residents can exclusively enjoy The Park Row Club—a richly appointed amenity suite designed by Studio Mellone, featuring vast leisure spaces, soaring ceilings, and grandly-scaled windows overlooking City Hall Park. The Club offers a library and screening room, a lounge, a billiards room, a bar, a dining room, a playroom, a golf simulator, and a fitness center with a yoga studio and a 65-foot swimming pool. The Park Row Club Garden and Dining Terrace offers over 7,000 square feet of outdoor space for entertainment, relaxation, and play—including lounge and living spaces, a grilling kitchen, a trellised dining area, and a naturalistic playscape and a lawn. On-site parking for purchase and a discrete Theatre Alley entrance offer privacy and convenience.</h6>
    </div>
  );
};

export default Radium(InfoContainer);
