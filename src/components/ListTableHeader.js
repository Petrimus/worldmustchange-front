import { Table } from 'semantic-ui-react';
import React from 'react';

export function ListTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>       
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'make' ? props.direction : null}
          onClick={() => props.handleSort('make')}
        >
          Country
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={props.column === 'model' ? props.direction : null}
          onClick={() => props.handleSort('model')}
        >
          Model
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'year' ? props.direction : null}
          onClick={() => props.handleSort('year')}
        >
          Population
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'package' ? props.direction : null}
          onClick={() => props.handleSort('package')}
        >
          Emissons
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'fuelType' ? props.direction : null}
          onClick={() => props.handleSort('fuelType')}
        >
          co2 / citizen
        </Table.HeaderCell>        
      </Table.Row>
    </Table.Header>
  );
}
