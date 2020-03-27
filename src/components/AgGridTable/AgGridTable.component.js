import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import styles from './AgGrid.component.style';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const AgGridTableComponent = (props) => {
  const { classes } = props;
  const [gridApi, setGridApi] = useState({})
  const [gridColumnApi, setGridColumnApi] = useState({})
  const [state, setState] = useState(
    {
      columnDefs: [
        {
          field: 'athlete',
          minWidth: 170,
          checkboxSelection: function (params) {
            return params.columnApi.getRowGroupColumns().length === 0;
          },
          headerCheckboxSelection: function (params) {
            return params.columnApi.getRowGroupColumns().length === 0;
          },
        },
        { field: 'age' },
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
      autoGroupColumnDef: {
        headerName: 'Group',
        minWidth: 170,
        field: 'athlete',
        valueGetter: function (params) {
          if (params.node.group) {
            return params.node.key;
          } else {
            return params.data[params.colDef.field];
          }
        },
        headerCheckboxSelection: true,
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: { checkbox: true },
      },
      defaultColDef: {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      },
      rowSelection: 'multiple',
      rowGroupPanelShow: 'always',
      pivotPanelShow: 'always',
      rowData: [],
    });

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      setState({ ...state, rowData: data });
    };

    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  // const scrambleAndRefreshAll = () => {
  //   scramble();
  //   var params = { force: isForceRefreshSelected() };
  //   gridApi.refreshCells(params);
  // };

  // const scrambleAndRefreshLeftToRight = () => {
  //   scramble();
  //   var api = gridApi;
  //   ['a', 'b', 'c', 'd', 'e', 'f'].forEach(function (col, index) {
  //     var millis = index * 100;
  //     var params = {
  //       force: isForceRefreshSelected(),
  //       columns: [col],
  //     };
  //     callRefreshAfterMillis(params, millis, api);
  //   });
  // };

  // const scrambleAndRefreshTopToBottom = () => {
  //   scramble();
  //   var frame = 0;
  //   var i;
  //   var rowNode;
  //   var api = gridApi;
  //   for (i = 0; i < api.getPinnedTopRowCount(); i++) {
  //     rowNode = api.getPinnedTopRow(i);
  //     refreshRow(rowNode, api);
  //   }
  //   for (i = 0; i < gridApi.getDisplayedRowCount(); i++) {
  //     rowNode = gridApi.getDisplayedRowAtIndex(i);
  //     refreshRow(rowNode, api);
  //   }
  //   for (i = 0; i < gridApi.getPinnedBottomRowCount(); i++) {
  //     rowNode = gridApi.getPinnedBottomRow(i);
  //     refreshRow(rowNode, api);
  //   }
  //   function refreshRow(rowNode, api) {
  //     var millis = frame++ * 100;
  //     var rowNodes = [rowNode];
  //     var params = {
  //       force: isForceRefreshSelected(),
  //       rowNodes: rowNodes,
  //     };
  //     callRefreshAfterMillis(params, millis, api);
  //   }
  // };

  // const createData = (count) => {
  //   var result = [];
  //   for (var i = 1; i <= count; i++) {
  //     result.push({
  //       a: (i * 863) % 100,
  //       b: (i * 811) % 100,
  //       c: (i * 743) % 100,
  //       d: (i * 677) % 100,
  //       e: (i * 619) % 100,
  //       f: (i * 571) % 100,
  //     });
  //   }
  //   return result;
  // }

  // const isForceRefreshSelected = () => {
  //   return document.querySelector('#forceRefresh').checked;
  // }
  // const callRefreshAfterMillis = (params, millis, gridApi) => {
  //   setTimeout(function () {
  //     gridApi.refreshCells(params);
  //   }, millis);
  // }
  // const scramble = () => {
  //   data.forEach(scrambleItem);
  //   topRowData.forEach(scrambleItem);
  //   bottomRowData.forEach(scrambleItem);
  // }
  // const scrambleItem = (item) => {
  //   ['a', 'b', 'c', 'd', 'e', 'f'].forEach(function (colId) {
  //     if (Math.random() > 0.5) {
  //       return;
  //     }
  //     item[colId] = Math.floor(Math.random() * 100);
  //   });
  // }

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <button onClick={() => scrambleAndRefreshAll()}>
          Scramble &amp; Refresh All
        </button>
        <button onClick={() => scrambleAndRefreshLeftToRight()}>
          Scramble &amp; Refresh Left to Right
        </button>
        <button onClick={() => scrambleAndRefreshTopToBottom()}>
          Scramble &amp; Refresh Top to Bottom
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <label>
          <input type="checkbox" id="forceRefresh" />
          Force Refresh
        </label> */}
      </Grid>
      <Grid item xs={12}>
        <div id="myGrid"
          className={classnames('ag-theme-alpine-dark', classes.agGridContainer)}
        >
          <AgGridReact
            columnDefs={state.columnDefs}
            autoGroupColumnDef={state.autoGroupColumnDef}
            defaultColDef={state.defaultColDef}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            debug={true}
            rowSelection={state.rowSelection}
            rowGroupPanelShow={state.rowGroupPanelShow}
            pivotPanelShow={state.pivotPanelShow}
            enableRangeSelection={true}
            pagination={true}
            onGridReady={onGridReady}
            rowData={state.rowData}
          />
        </div>

      </Grid>
    </Grid>
  );
};

AgGridTableComponent.defaultProps = {
};

AgGridTableComponent.propsType = {
  classes: PropTypes.shape({}).isRequired,
};

export default compose(withStyles(styles))(memo(AgGridTableComponent));
