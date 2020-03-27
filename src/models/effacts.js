import { getRFQData } from '../api/searchRFQApi';
// import { dispatch } from '../store';

// const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))

export async function getSearchDir(payload) {
    try {
      const res = await getRFQData(payload);
      if (payload) {
        this.setEmpDirSearchStore(res)
      } else {
          this.setSearchDefaultStore(res);
      }
    } catch (error) {
      // dispatch()
      this.setEmpDirSearchStore({error:true});
      console.log(error)
    } finally {
      // ToDO: Finally
    }
  }

  export function updateSelectedTabState(selectedTab) {
    this.setSelectedTabStore(selectedTab);
  }