import React from 'react'
import { Table, Pagination } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ListTableHeader from './ListTableHeader'
import ListPageSizeSelect from './ListPagesizeSelect'
import ListTableRow from './ListTableRow'

const ListTable = (props) => {

  const listRows = props.countries.map((country, index) => (
    <ListTableRow key={index} country={country} />
  ))

  return (
    <React.Fragment>
      <ListPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable>
        <ListTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />
        <Table.Body>{listRows}</Table.Body>
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

export default ListTable

ListTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,  
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
