import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const SingleLineChart = ({ data, two, filter, compare }) => {
  
  return (
    <LineChart width={1000} height={600} data={data}>

      <CartesianGrid stroke="#ccc" />
      <XAxis
        type="number"
        dataKey="year"
        domain={['dataMin', 'dataMax']}
        interval={"preserveEnd"}
      />
      <YAxis />
      <Tooltip />
      <Legend
        verticalAlign="top"
        height={45}      
      />
      <Line name={filter} type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
     
    </LineChart>
  )
}

export default SingleLineChart

/*
 {
        two && <Line name={compare} type="monotone" dataKey="compare" stroke="#82ca9d" dot={false} />
      }
*/