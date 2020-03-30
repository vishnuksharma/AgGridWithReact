import { TAB_ENUM } from "../components/Utilies/utility";

const INITIAL_STATE = {
  selectedTab: TAB_ENUM.RFQ,
  tableData: [],
}

const setSelectedTabStore = (state, selectedTab) => ({
  ...state,
  selectedTab,
});

const setTableDataListStore = (state, tableData) => ({
  ...state,
  tableData,
});

export default {
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedTabStore,
    setTableDataListStore,
  },
};