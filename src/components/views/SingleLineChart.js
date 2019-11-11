import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const SingleLineChart = ({ data }) => {

 // console.log('single data', data)
  
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8"  dot={false} />
      <CartesianGrid stroke="#ccc" />
      <XAxis 
      type="number"
       dataKey="year" 
       domain={['dataMin', 'dataMax']} 
       interval={"preserveEnd"}      
       />
      <YAxis dataKey="value"/>
      <Tooltip />
    </LineChart>
  )
}

export default SingleLineChart