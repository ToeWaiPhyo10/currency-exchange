"use client";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const ReactBootstrapTable = ({ data }) => {
  const columns = [
    {
      dataField: "name",
      text: "Currency Name",
      headerAlign: "left",
    },
    {
      dataField: "code",
      text: "Currency Code",
      headerAlign: "left",
    },
    {
      dataField: "symbol",
      text: "Currency Symbol",
      headerAlign: "left",
    },
    {
      dataField: "conversionRate",
      text: "Currency Rate",
      headerAlign: "left",
    },
  ];
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );
  const options = {
    paginationSize: 10,
    pageStartIndex: 1,
    alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: false, // Hide the going to First and Last page button
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "All",
        value: data.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  return (
    <BootstrapTable
      data={data}
      columns={columns}
      keyField="code"
      pagination={paginationFactory(options)}
      noDataIndication="No data at the moment"
    />
  );
};

export default ReactBootstrapTable;
