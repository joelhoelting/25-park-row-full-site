import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem, mtr } from 'helpers/Math';


const FloorplanOverlay = (props) => {
  const { phoneLarge, desktopSmall } = mediaQueries;

  const styles = {
    main: {
      position: 'fixed',
      background: '#fff',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: '1000',
      boxShadow: '0 5px 15px grey',
      opacity: 0,
      transition: 'opacity 500ms ease',
      visibility: 'hidden',
      active: {
        opacity: 1,
        visibility: 'visible'
      },
      inner: {
        height: '100%',
        width: '100%',
        padding: rem(30),
        detail: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          [desktopSmall]: {
            height: '10%',
            padding: `0 ${rem(50)}`,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          subDetail: {
            margin: `${rem(5)} 0`,
            width: '50%',
            [desktopSmall]: {
              width: 'auto',
              margin: 0
            }
          },
          buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            [desktopSmall]: {
              width: 'auto'
            },
            download: {
              position: 'absolute', 
              height: '40px', 
              width: '40px', 
              bottom: '50px',
              left: '50%',
              transform: 'translateX(-50%)',
              [phoneLarge]: {
                transform: 'none',
                left: 'initial',
                right: '100px', 
                top: '30px', 
                cursor: 'pointer',
              }
            },
            closeBtn: {
              height: '40px', 
              width: '40px', 
              position: 'absolute', 
              right: '20px', 
              top: '30px', 
              cursor: 'pointer',
            }
          }
        },
        floorplan: {
          padding: `${rem(10)} 0`,
          height: '50%',
          [desktopSmall]: {
            height: '80%'
          },
          img: {
            display: 'block',
            height: '100%',
            margin: '0 auto',
            width: '100%'
          }
        },
        legal: {
          height: '10%',
          display: 'flex',
          alignItems: 'flex-end'
        }
      }
    }
  };

  const toggleOverlay = () => {
    props.toggleOverlay();
  };

  const { bathrooms, bedrooms, interior, price, residence } = props.unit;

  return (
    <div style={[styles.main, props.active ? styles.main.active : null]}>
      <div style={styles.main.inner}>
        <MediaQuery minDeviceWidth={1200}>
          <div style={styles.main.inner.detail}>
            <div style={styles.main.inner.detail.subDetail}>
              <h2 className='no-margin'>{`Residence ${residence}`}</h2>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>{`${bedrooms} Bedrooms`}</p>
              <p className='no-margin'>{`${bathrooms} Bathrooms`}</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Interior</p>
              <p className='no-margin'>{`${interior} SF/${mtr(interior)} SM`}</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Exterior</p>
              <p className='no-margin'>1,022 SF / 94 SM</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Price</p>
              <p className='no-margin'>{`$${price}`}</p>
            </div>
            <div style={styles.main.inner.detail.buttons}>
              <img 
                className='no-margin' 
                style={styles.main.inner.detail.buttons.download} 
                src='/images/icons/download_button.png'
              />
              <img 
                onClick={() => toggleOverlay()}
                style={ styles.main.inner.detail.buttons.closeBtn} 
                src={'/images/icons/close_black.svg'} 
              />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1200}>
          <div>
            <h2 className='no-margin'>Residence 35B</h2>
          </div>
        </MediaQuery>
        <div style={styles.main.inner.floorplan}>
          <img style={styles.main.inner.floorplan.img} src={`/images/floorplans/25PR_${residence}_rest.svg`} />
        </div>
        <MediaQuery minDeviceWidth={1200}>
          <div style={styles.main.inner.legal}>
            <p style={{ fontSize: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique mi. Donec blandit lobortis urna, et molestie quam rhoncus eget. Suspendisse at enim quam. Etiam a orci ipsum. Duis sit amet aliquam arcu. Sed ut lectus sapien. Praesent nec convallis orci. Cras sollicitudin luctus lorem, ut ultricies nisl mattis nec. Quisque vitae blandit nisi. Praesent luctus ex ex, id bibendum ex cursus eu. In vestibulum ex eu nibh posuere pharetra sit amet eu eros. Nunc finibus viverra mauris eget luctus. Maecenas in mauris eu quam vestibulum egestas. Nunc volutpat auctor tempus. In vitae nisl vestibulum augue faucibus eleifend. Sed in augue facilisis, bibendum urna posuere, mollis metus. Praesent nibh massa, auctor dapibus euismod eu, sollicitudin sed est. Mauris ut lobortis mi. Ut malesuada pharetra posuere. Proin at elementum urna. Aliquam finibus commodo ornare. Nunc placerat, diam eget finibus efficitur, nibh felis scelerisque metus, nec efficitur sem erat quis purus. Etiam a quam quis ex maximus consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique mi. Donec blandit lobortis urna, et molestie quam rhoncus eget. Suspendisse at enim quam. Etiam a orci ipsum. Duis sit amet aliquam arcu.</p>
          </div>
        </MediaQuery>
        
        <MediaQuery maxDeviceWidth={1200}>
          <div style={styles.main.inner.detail}>
            <img 
              onClick={() => toggleOverlay()}
              style={ styles.main.inner.detail.buttons.closeBtn} 
              src={'/images/icons/close_black.svg'} 
            />
            <img 
              style={ styles.main.inner.detail.buttons.download} 
              src={'/images/icons/download_button.png'} 
            />
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>{`${bedrooms} Bedrooms`}</p>
              <p className='no-margin'>{`${bathrooms} Bathrooms`}</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Interior</p>
              <p className='no-margin'>{`${interior} SF/${mtr(interior)} SM`}</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Exterior</p>
              <p className='no-margin'>1,022 SF / 94 SM</p>
            </div>
            <div style={styles.main.inner.detail.subDetail}>
              <p className='no-margin'>Price</p>
              <p className='no-margin'>{`$${price}`}</p>
            </div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Radium(FloorplanOverlay);