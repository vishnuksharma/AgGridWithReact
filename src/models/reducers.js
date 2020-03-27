import { TAB_ENUM } from "../components/Utilies/utility";

const INITIAL_STATE = {
  selectedTab: TAB_ENUM.RFQ,
}

const setSelectedTabStore = (state, selectedTab) => ({
  ...state,
  selectedTab,
});

export default {
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedTabStore,
  },
};