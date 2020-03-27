import { createSelector } from 'reselect';

const getSelectedTabStore = state => state.globalStates;
export const getSelectedTabState = createSelector(
  [getSelectedTabStore],
  selectedTab => selectedTab,
);