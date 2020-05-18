import React from "react";
import { useSelector } from "react-redux";
import { Wrapper, Table, Th, Td, Button } from "./usersPageStyled";
import { Link } from "react-router-dom";
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
} from 'react-table'



const UsersPage = () => {

    const { admins } = useSelector(state => state.admins)
    console.log(admins)

    const data = React.useMemo(
        () => admins.map((admin) => {
            return {
                        col1: admin.first_name,
                        col2: admin.last_name,
                        col3: admin.user_email
                    }
        })

    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Last Name',
                accessor: 'col2',
            },
            {
                Header: 'Email',
                accessor: 'col3',
            },
            {
                Header: 'Edit',
                Cell: ({ row }) => (
                    <button onClick={null}>
                        Edit
                    </button>
                )
            },
            {
                Header: 'Delete',
                Cell: ({ row }) => (
                    <button onClick={null}>
                        Delete
                    </button>
                )
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Wrapper>
            <h1>Users Page</h1>
            <Link to="/create_user"> <Button>  Add User </Button> </Link>
            <br/>
            <Table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <Th
                                {...column.getHeaderProps()}
                            >
                                {column.render('Header')}
                            </Th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <Td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </Td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default UsersPage