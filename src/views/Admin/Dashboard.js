import React from 'react'
import LineChartComponent from './LineChartComponent'
import BarChartComponent from './BarChartComponent'
import "./chart.css"

const Dashboard = () => {
  return (
    <>
    <nav class="level">
    </nav>
    <div className='header'>
    </div>
    <div className='chartHolder'>
      <div className='chartTile'>
        <LineChartComponent/>
      </div>
      <div className='chartTile'>
        <BarChartComponent />
      </div>
    </div>
    </>
  )
}

export default Dashboard;

