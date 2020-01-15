import { pageTitleMap } from 'data/pageTitles';

export const parsePageTitle = path => {
  return `25 Park Row | ${pageTitleMap[path]}`;
};
