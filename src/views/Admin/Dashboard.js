import React from 'react'
import LineChartComponent from './LineChartComponent'
import BarChartComponent from './BarChartComponent'
import "./chart.css"

const Dashboard = () => {
  return (
    <>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Tweets</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
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

