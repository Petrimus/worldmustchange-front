import React from 'react'
import { Table } from 'semantic-ui-react'

const ListTableHeader = (props) => {
  return (
    <Table.Header>
      <Table.Row>       
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'country' ? props.direction : null}
          onClick={() => props.handleSort('country')}
        >
          Country
        </Table.HeaderCell>       
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'population' ? props.direction : null}
          onClick={() => props.handleSort('population')}
        >
          Population
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'emissions' ? props.direction : null}
          onClick={() => props.handleSort('emissions')}
        >
          Emissons
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'perCapita' ? props.direction : null}
          onClick={() => props.handleSort('perCapita')}
        >
          co2 / citizen
        </Table.HeaderCell>        
      </Table.Row>
    </Table.Header>
  )
}

export default ListTableHeader
