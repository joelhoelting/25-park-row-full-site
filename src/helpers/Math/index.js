// Convert px to rem
export const rem = (px) => {
  var base = 16;
  return `${(px/base).toFixed(4)}rem`;
};

// Convert feet to meters
export const mtr = (ft) => {
  return Math.round(ft/3.2808);
};

// Add commas to long numbers
export const insertCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};