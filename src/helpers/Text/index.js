// Convert px to rem
export const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + ' ...';
};
