import React from 'react'
import { Table } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'


const ListTableRow = props => (
  <Table.Row>
    <Table.Cell>{props.country.name}</Table.Cell>
    <Table.Cell>{props.country.population}</Table.Cell>
    <Table.Cell>{props.country.emissions}</Table.Cell>
    <Table.Cell>{props.country.perCapita}</Table.Cell>    
  </Table.Row>
)

export default ListTableRow


ListTableRow.propTypes = {
  country: PropTypes.object.isRequired  
}