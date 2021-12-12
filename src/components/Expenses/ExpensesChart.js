import React from "react"

import Chart from "../Charts/Chart"
const ExpensesChart = props => {

  const dataPoints = [
    {label: 'Jan', data: 0},
    {label: 'Feb', data: 0},
    {label: 'Mar', data: 0},
    {label: 'Apr', data: 0},
    {label: 'May', data: 0},
    {label: 'Jun', data: 0},
    {label: 'Jul', data: 0},
    {label: 'Aug', data: 0},
    {label: 'Sep', data: 0},
    {label: 'Oct', data: 0},
    {label: 'Nov', data: 0},
    {label: 'Dec', data: 0}
  ]

  for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth()
    dataPoints[expenseMonth].data += expense.amount
  }
  return <Chart dataPoints={dataPoints}/>
}

export default ExpensesChart