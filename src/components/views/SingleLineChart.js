import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const SingleLineChart = ({ data, two, filter, compare }) => {
  // console.log('data ', data)
  
  return (   
    <LineChart width={1000} height={600} data={data} >
      <CartesianGrid stroke="#ccc" />
      <XAxis
        type="number"
        dataKey="year"
        domain={['dataMin', 'dataMax']}
        interval={"preserveEnd"}
      />
      <YAxis width={100} 
       tickFormatter={tick => {
        return tick.toLocaleString();
      }}
      />
      <Tooltip formatter={ value => value.toLocaleString() }/>
      <Legend
        verticalAlign="top"
        height={45}      
      />
      <Line name={filter} type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
      {
        two && <Line name={compare} type="monotone" dataKey="compare" stroke="#82ca9d" dot={false} />
      }
    </LineChart>   
  )
}

export default SingleLineChart

/*
 {
        two && <Line name={compare} type="monotone" dataKey="compare" stroke="#82ca9d" dot={false} />
      }
     formatter={(value) => new Intl.NumberFormat('en').format(value)} 
*/