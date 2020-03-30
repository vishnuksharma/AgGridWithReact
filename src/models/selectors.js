import { createSelector } from 'reselect';

const getSelectedTabStore = state => state.globalStates.selectedTab;
export const getSelectedTabState = createSelector(
  [getSelectedTabStore],
  selectedTab => selectedTab,
);

const getTableListStore = state => state.globalStates.tableData;
export const getTableListState = createSelector(
  [getTableListStore],
  tableData => tableData,
);