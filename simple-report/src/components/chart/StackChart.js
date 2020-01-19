import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class StacckChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    render() {
        console.log("chart",this.props)
        const options = {
            chart: {
                height:this.props.heightChart,
                // minHeight: 500,
                type: 'bar'
            },
            title: {
                text: this.props.title
            },
            xAxis: {
                categories: this.props.categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: this.props.titleY
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'red'
                    }
                }
            },
            legend: {
                align: 'center',
                // x: -480,
                verticalAlign: 'top',
                y: 20,
                z: 0,
                floating: false,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#1111',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: this.props.data,
            colors: this.props.colors
        }
        const { count } = this.state
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        )
    }
}
