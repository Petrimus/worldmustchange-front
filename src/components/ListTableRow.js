import React from 'react'
import { Table } from 'semantic-ui-react'


const ListTableRow = props => (
  <Table.Row>
    <Table.Cell>{props.vehicle.id}</Table.Cell>
    <Table.Cell>{props.vehicle.make}</Table.Cell>
    <Table.Cell>{props.vehicle.model}</Table.Cell>
    <Table.Cell>{props.vehicle.year}</Table.Cell>
    <Table.Cell>{props.vehicle.package}</Table.Cell>
    <Table.Cell>{props.vehicle.fuelType}</Table.Cell>
    <Table.Cell>{props.vehicle.transmission}</Table.Cell>
    <Table.Cell textAlign="center">
    </Table.Cell>
  </Table.Row>
)

export default ListTableRow


