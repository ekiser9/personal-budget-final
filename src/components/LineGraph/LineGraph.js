import React, { Component } from 'react';
import Chart from 'chart.js';

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChart = this.chartRef.current.getContext('2d');

        new Chart(myChart, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Spending This Year',
                        fill: false,
                        pointRadius: 5,
                        data: [-10, 20, 5, -15, -5, 10, 15, -20, -15],
                        borderColor: ['#54B4C7'],
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            '#40e350',
                            '#ff4545',
                            '#22FFD7',
                            '#FFA454',
                            '#a154ff',
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                        ],
                    },
                    {
                        label: 'On Budget',
                        fill: true,
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        borderColor: 'rgba(173, 0, 0, 1)',
                        backgroundColor: 'rgba(173, 0, 0, 1)',
                        pointRadius: 1,
                    },
                ],
                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Percent Compared to Budget',
                            },
                        },
                    ],
                },
            },
        });
    }

    render() {
        return <canvas className="myChart" ref={this.chartRef} width="700" height="300" />;
    }
}
