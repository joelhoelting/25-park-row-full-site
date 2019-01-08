export const generateFloorplanSrc = (residence) => {
  let unitNumber = residence.match(/\d+/)[0];
  let unitLetter = residence.match(/\D+/)[0];
  let imgFilename;

  let twoLevelUnits = ['5A', '15B', '45PH'];

  let singleUnits = ['5B', '5E', '11C', '11D', '15A', '16A', '17A', '34A', '34B', '41PH', '45PH'];

  if (twoLevelUnits.includes(residence)) {
    imgFilename = `${residence}_Lower`;
  } else if (singleUnits.includes(residence)) {
    imgFilename = residence;
  } else if (unitNumber >= 5 && unitNumber <= 10 && (unitLetter === 'C')) {
    imgFilename = `5-10C`;
  } else if (unitNumber >= 5 && unitNumber <= 10 && unitLetter === 'D') {
    imgFilename = `5-10D`;
  } else if (unitNumber >= 6 && unitNumber <= 10 && unitLetter === 'E') {
    imgFilename = `6-10E`;
  } else if (unitNumber >= 6 && unitNumber <= 14 && unitLetter === 'B') {
    imgFilename = `6-14B`;
  } else if (unitNumber >= 7 && unitNumber <= 14 && unitLetter === 'A') {
    imgFilename = `7-14A`;
  } else if (unitNumber >= 12 && unitNumber <= 14 && unitLetter === 'D') {
    imgFilename = `12-14D`;
  } else if (unitNumber >= 15 && unitNumber <= 22 && unitLetter === 'C') {
    imgFilename = `15-22C`;
  } else if (unitNumber >= 18 && unitNumber <= 22 && unitLetter === 'A') {
    imgFilename = `18-22A`;
  } else if (unitNumber >= 25 && unitNumber <= 26 && unitLetter === 'C') {
    imgFilename = `25-26C`;
  } else if (unitNumber >= 25 && unitNumber <= 28 && unitLetter === 'A') {
    imgFilename = `25-28A`;
  } else if (unitNumber >= 25 && unitNumber <= 33 && unitLetter === 'B') {
    imgFilename = `25-33B`;
  } else if (unitNumber >= 29 && unitNumber <= 31 && unitLetter === 'A') {
    imgFilename = `29-31A`;
  } else if (unitNumber >= 32 && unitNumber <= 33 && unitLetter === 'A') {
    imgFilename = `32-33A`;
  } else if (unitNumber >= 35 && unitNumber <= 40 && unitLetter === 'A') {
    imgFilename = `35-40A`;
  } else if (unitNumber >= 35 && unitNumber <= 40 && unitLetter === 'B') {
    imgFilename = `35-40B`;
  } else if (unitNumber >= 42 && unitNumber <= 44 && unitLetter === 'PH') {
    imgFilename = `42-44PH`;
  }
  return imgFilename;
};