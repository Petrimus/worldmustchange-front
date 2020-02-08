import React from 'react'

import { Table, Pagination } from 'semantic-ui-react'
import { ListTableHeader } from './ListTableHeader'

export const ListTable = (props) => {
  return (
    <React.Fragment>
      <Table selled selectable sortable>
        <ListTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />
        <Table.body>

        </Table.body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  )
}
