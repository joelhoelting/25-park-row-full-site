import React from 'react';
import Radium from 'radium';
import { pxToRem } from 'helpers/Math';

const InfoContainer = props => {
  const InfoContainerInline = {
    wrapper: {
      height: '100%',
      background: '#D8D8D8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: props.active ? '100%' : 0,
      overflow: 'hidden',
      fontFamily: 'Maison Neue Extended Book, sans-serif',
      p: {
        width: '88%',
        fontFamily: 'Maison Neue Extended Book, sans-serif',
        fontWeight: 300,
        fontSize: pxToRem(12),
        textTransform: 'uppercase',
        letterSpacing: pxToRem(1.5), 
        lineHeight: pxToRem(20)
      }
    }
  };

  return (
    <div style={InfoContainerInline.wrapper}>
      <p style={[InfoContainerInline.wrapper.p, { paddingTop: pxToRem(20)}]}>Offering 110 residences, 25 Park Row is a 21st century architectural icon at the center of the New Downtown, providing unmatched views from every residence over historic City Hall Park. At 25 Park Row, COOKFOX Architects has created the quintessential downtown luxury condominium, reinterpreting the classic Art Deco skyscraper through an expressive series of cascading terraces, setbacks, and loggias.</p>
      <p style={[InfoContainerInline.wrapper.p, { paddingBottom: pxToRem(20)}]}>Residents can exclusively enjoy The Park Row Club—a richly appointed amenity suite designed by Studio Mellone, featuring vast leisure spaces, soaring ceilings, and grandly-scaled windows overlooking City Hall Park. The Club offers a library and screening room, a lounge, a billiards room, a bar, a dining room, a playroom, a golf simulator, and a fitness center with a yoga studio and a 65-foot swimming pool. The Park Row Club Garden and Dining Terrace offers over 7,000 square feet of outdoor space for entertainment, relaxation, and play—including lounge and living spaces, a grilling kitchen, a trellised dining area, and a naturalistic playscape and a lawn. On-site parking for purchase and a discrete Theatre Alley entrance offer privacy and convenience.</p>
    </div>
  );
};

export default Radium(InfoContainer);
