import {Wrapper, Table, Th, Td, Button} from "./usersPageStyled";
import { getAdmins } from "../../store/types";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import history from '../../history';
import React from "react";
import axios from "axios";
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
} from 'react-table'


const UsersPage = () => {
    const dispath = useDispatch();
    const {adminsChild} = useSelector(state => state.admins)

    const data = React.useMemo(
        () => adminsChild.map((admin) => {
            return {
                col1: admin.first_name,
                col2: admin.last_name,
                col3: admin.user_email,
                col4: admin.id
            }
        })
    )

    const goToEditPage = (e) => {
        let editUrl = `/edit_user${e.currentTarget.id}`;
        history.push(editUrl)
    }

    const deleteUser = (e) => {
        const clickedUserId = e.currentTarget.id;
        return axios
            .post('admins/delete', {
                id: clickedUserId
            })
            .then(() => {

                const newAdminsChild = adminsChild.filter(item => item.id !== parseInt(clickedUserId))
                dispath(getAdmins(newAdminsChild))

            })
            .catch(err => {
                console.log(err)
            })
    }

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
                Cell: ({row}) => (
                    <button id={row.original.col4} onClick={goToEditPage}>
                        Edit
                    </button>
                )
            },
            {
                Header: `Delete`,
                Cell: ({row}) => (
                    <button id={row.original.col4} onClick={deleteUser}>
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
    } = useTable({columns, data})

    return (
        <Wrapper>
            <h1>Users Page</h1>
            <Link to="/create_user"> <Button> Add User </Button> </Link>
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