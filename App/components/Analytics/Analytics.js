import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import BarCharts from 'react-chartjs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { dataD3, storyAnalytics, nestedStoryAnalytics, dailyStoryData, monthlyStoryData } from '../../datasample/d3Data';
import { ToolTip } from '../../components';

class Analytics extends Component {
  constructor() {
    super()
  }

  render() {
    const chartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
       series: [
        [5, 9, 7, 8, 5],
        [4, 3, 3, 1]
      ]
    }
    const rechartData = [
        {day: 'Monday', pageView: 20, amt: 20},
        {day: 'Tuesday', pageView: 15, amt: 11},
        {day: 'Wednesday', pageView: 10, amt: 9},
        {day: 'Thursday', pageView: 25, amt: 25},
        {day: 'Friday', pageView: 24, amt: 24},
        {day: 'Saturday', pageView: 22, amt: 22},
        {day: 'Sunday', pageView: 29, amt: 25}
    ]

    return (
      <div className="container">
        <h4>1. Chartist with react wrapper</h4>
        <div className="wrapper-sq-400">
          <ChartistGraph className={'ct-octave'} data={chartData} type={'Bar'}/>
        </div>

        <h4>2. Recharts</h4>
        <h4>Perjalanan Mistis Ki Joko X</h4>
        <div className="wrapper-sq-400">
          <BarChart width={700} height={500} data={dailyStoryData} 
          margin={{top: 5, right: 100, left: -20, bottom: 5}}>
            <YAxis domain={[0, 100]}/>
            <XAxis dataKey={'date'} />
            <CartesianGrid strokeDasharray="3 5" />
            <Tooltip content={<ToolTip />}/>
            <Bar dataKey="totalRead" fill="#F3B562" barSize={20}/>
          </BarChart>
        </div>
      </div>
    )
  }
}

export default Analytics;