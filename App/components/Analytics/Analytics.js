import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

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

    return (
      <div className="container">
        <ChartistGraph className={'ct-octave'} data={chartData} type={'Bar'}/>
      </div>
    )
  }
}

export default Analytics;