import React from 'react'

import { CallType, PaginatedCallsType } from './../types/call'

import { Table } from 'react-bootstrap'

interface TableProps {
  nodes: CallType[]
}

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export const TableWIthPagination = ({ nodes }: TableProps) => {
  return (
    <>
      {nodes &&
        nodes.map((item) => (
          <>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>To</th>
                  <th></th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </>
        ))}
    </>
  )
}
