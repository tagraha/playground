import React, { Component } from 'react';
import { Chart } from 'react-d3-core';
import { LineChart, BarChart } from 'react-d3-basic';

import { dataD3, storyAnalytics, kopet } from '../../datasample/d3Data';

class D3Graph extends Component {
  constructor() {
      super()
      this.renderBarCharts = this._renderBarCharts.bind(this);
  }

  _renderBarCharts() {
    const chartSeries = [
      {
          field: 'totalRead',
          name: 'Daily Reads Total',
          color: '#F3B562'
      }
    ]
    var x = function(d) {
    console.log('isi d apaan', d)
    return d.totalRead;
    }

    var margins = { left: 0, right: 0, top: 0, bottom: 0 },
    width = 400,
    height = 200,
    xScale = 'ordinal',
    xLabel = "date",
    yLabel = "totalRead",
    yTicks = [10, "%"];

    return (
      <div className="charts">
        <h4>D3 Charts:</h4>
          <BarChart
            margins={margins}
            title={'total Reads'}
            data={kopet}
            width={400}
            height={200}
            chartSeries={chartSeries}
            x={x}
            xLabel={xLabel}
            xScale={xScale}
            yLabel={yLabel}
            yTicks={yTicks}/>
      </div>
    )

  }

  render() {
    return (
      <div className="container">
        {this.renderBarCharts()}
      </div>
    )
  }
}

export default D3Graph;