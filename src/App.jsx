/* eslint-disable */
import React from "react";
import {useTable, useSortBy, usePagination} from "react-table";
import {data} from "./assets/data.json";

const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "NAME",
        accessor: "name",
    },
    {
        Header: "DEPARTMENT",
        accessor: "department",
    },
    {
        Header: "SALARY",
        accessor: "salary",
    },
];

const App = () => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, page, prepareRow, nextPage, previousPage} = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination
    );

    return (
        <>
            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((hg) => (
                            <tr {...hg.getHeaderGroupProps()}>
                                {hg.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        {column.isSorted && <span>{column.isSortedDesc ? "^" : "$"}</span>}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div>
                    <button onClick={previousPage}>Previous</button>
                    <button onClick={nextPage}>Next</button>
                </div>
            </div>
        </>
    );
};

export default App;
