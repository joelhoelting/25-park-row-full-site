export const generateFloorplanSrc = residence => {
  let unitNumber = residence.match(/\d+/)[0];
  let unitLetter = residence.match(/\D+/)[0];
  let imgFilename, pdfFilename, isPenthouse, hasTwoLevels;

  let twoLevelUnits = ['5A', '15B', '45A'];
  let singleUnits = ['5B', '5E', '11C', '11D', '15A', '16A', '17A', '34A', '34B', '41A', '42A', '43A', '44A'];
  let penthouseUnits = ['41A', '42A', '43A', '44A', '45A'];

  isPenthouse = penthouseUnits.includes(residence) ? true : false;
  hasTwoLevels = twoLevelUnits.includes(residence) ? true : false;

  if (twoLevelUnits.includes(residence)) {
    imgFilename = `${residence}_Lower`;
    pdfFilename = residence;
  } else if (singleUnits.includes(residence)) {
    imgFilename = pdfFilename = residence;
  } else if (unitNumber >= 5 && unitNumber <= 10 && unitLetter === 'C') {
    imgFilename = pdfFilename = `5-10C`;
  } else if (unitNumber >= 5 && unitNumber <= 10 && unitLetter === 'D') {
    imgFilename = pdfFilename = `5-10D`;
  } else if (unitNumber >= 6 && unitNumber <= 10 && unitLetter === 'E') {
    imgFilename = pdfFilename = `6-10E`;
  } else if (unitNumber >= 6 && unitNumber <= 14 && unitLetter === 'B') {
    imgFilename = pdfFilename = `6-14B`;
  } else if (unitNumber >= 7 && unitNumber <= 14 && unitLetter === 'A') {
    imgFilename = pdfFilename = `7-14A`;
  } else if (unitNumber >= 12 && unitNumber <= 14 && unitLetter === 'C') {
    imgFilename = pdfFilename = `12-14C`;
  } else if (unitNumber >= 12 && unitNumber <= 14 && unitLetter === 'D') {
    imgFilename = pdfFilename = `12-14D`;
  } else if (unitNumber >= 15 && unitNumber <= 22 && unitLetter === 'C') {
    imgFilename = pdfFilename = `15-22C`;
  } else if (unitNumber >= 18 && unitNumber <= 22 && unitLetter === 'A') {
    imgFilename = pdfFilename = `18-22A`;
  } else if (unitNumber >= 17 && unitNumber <= 22 && unitLetter === 'B') {
    imgFilename = pdfFilename = `17-22B`;
  } else if (unitNumber >= 25 && unitNumber <= 27 && unitLetter === 'C') {
    imgFilename = pdfFilename = `25-27C`;
  } else if (unitNumber >= 25 && unitNumber <= 28 && unitLetter === 'A') {
    imgFilename = pdfFilename = `25-28A`;
  } else if (unitNumber >= 25 && unitNumber <= 33 && unitLetter === 'B') {
    imgFilename = pdfFilename = `25-33B`;
  } else if (unitNumber >= 28 && unitNumber <= 33 && unitLetter === 'C') {
    imgFilename = pdfFilename = `28-33C`;
  } else if (unitNumber >= 29 && unitNumber <= 31 && unitLetter === 'A') {
    imgFilename = pdfFilename = `29-31A`;
  } else if (unitNumber >= 32 && unitNumber <= 33 && unitLetter === 'A') {
    imgFilename = pdfFilename = `32-33A`;
  } else if (unitNumber >= 35 && unitNumber <= 40 && unitLetter === 'A') {
    imgFilename = pdfFilename = `35-40A`;
  } else if (unitNumber >= 35 && unitNumber <= 40 && unitLetter === 'B') {
    imgFilename = pdfFilename = `35-40B`;
  }

  return { hasTwoLevels, isPenthouse, imgFilename, pdfFilename };
};
