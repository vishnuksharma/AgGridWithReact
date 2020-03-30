import { getRFQTableData } from '../api/searchRFQApi';
// const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))

export async function getTableData() {
    try {
      const res = await getRFQTableData();
      this.setTableDataListStore(res)
    } catch (error) {
      console.log(error)
    } finally {
      // ToDO: Finally
    }
  }

  export function updateSelectedTabState(selectedTab) {
    this.setSelectedTabStore(selectedTab);
  }