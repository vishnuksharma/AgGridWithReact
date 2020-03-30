import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import styles from './AgGrid.component.style';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { PAGE_SIZE } from '../Utilies/constants';

const AgGridTableComponent = (props) => {
  const { classes, getTableData, tableData } = props;
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
        editable: false,
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

  useEffect(() => {
   getTableData();
  }, []);
  useEffect(() => {
    setState({ ...state, rowData: tableData });
   }, [tableData]);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
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
            paginationPageSize={PAGE_SIZE}
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
