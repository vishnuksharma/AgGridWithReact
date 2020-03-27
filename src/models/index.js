import omit from 'lodash/omit';
import * as effects from './effacts';
import searchDirReducer from './reducers';
import * as selectors from './selectors';
import { TAB_ENUM } from '../components/Utilies/utility';


const initialState = {
  selectedTab: TAB_ENUM.RFQ,
};

export default {
  name: 'globalStates',
  state: initialState,
  effects: () => effects,
  reducers: searchDirReducer.reducers,
  selectors: omit(selectors, Object.keys(selectors).filter(k => selectors[k].omitToRematch)),
};
