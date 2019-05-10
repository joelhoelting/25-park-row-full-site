import React from 'react';
import Radium from 'radium';
import { pxToRem } from 'helpers/Math';
import { mediaQueries } from 'styles/Global/MediaQueries';

const OverviewSection = () => {
  const OverviewSectionInline = {
    main: {
      margin: '0 auto',
      textAlign: 'justify',
      padding: `0 ${pxToRem(15)}`,
      [mediaQueries.tabletLandscape]: {
        padding: `0 ${pxToRem(30)}`
      },
      p: {
        fontFamily: 'Maison Neue Book',
        fontSize: '.8rem',
        first: {
          marginTop: '2em'
        },
        second: {
          marginBottom: '2em'
        }
      }
    }
  };

  const { main } = OverviewSectionInline;
  return (
    <div style={main}>
      <hr style={{ height: '2px', background: '#000', border: 'none'}} />
      <p style={[main.p, main.p.first]}>Offering 110 residences, 25 Park Row is a 21st century architectural icon at the center of the New Downtown, providing unmatched views from every residence over historic City Hall Park. At 25 Park Row, COOKFOX Architects has created the quintessential downtown luxury condominium, reinterpreting the classic Art Deco skyscraper through an expressive series of cascading terraces, setbacks, and loggias.</p>
        
      <p style={[main.p, main.p.second]}>Residents can exclusively enjoy The Park Row Club—a richly appointed amenity suite designed by Studio Mellone, featuring vast leisure spaces, soaring ceilings, and grandly-scaled windows overlooking City Hall Park. The Club offers a library and screening room, a lounge, a billiards room, a bar, a dining room, a playroom, a golf simulator, and a fitness center with a yoga studio and a 65-foot swimming pool. The Park Row Club Garden and Dining Terrace offers over 7,000 square feet of outdoor space for entertainment, relaxation, and play—including lounge and living spaces, a grilling kitchen, a trellised dining area, and a naturalistic playscape and a lawn. On-site parking for purchase and a discrete Theatre Alley entrance offer privacy and convenience.</p>
    </div>
  );
};

export default Radium(OverviewSection);