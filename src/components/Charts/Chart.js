import React from "react"

import ChartBar from "./ChartBar"
import "./Chart.css"
const Chart = props => {

  const dataPointsValues = props.dataPoints.map(
    dataPoint => dataPoint.data
  )

  const maxValue = Math.max(...dataPointsValues)

 return (
   <div className="chart">
   {props.dataPoints.map(dataPoint => 
   <ChartBar 
   key={dataPoint.label}
   data={dataPoint.data} 
   maxValue={maxValue} 
   label={dataPoint.label}/> )}
   </div>
 )
}

export default Chart