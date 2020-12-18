import React, { Component } from 'react';
import Chart from 'chart.js';

export default class BarChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChart = this.chartRef.current.getContext('2d');

        var budget = [50, 100, 150, 200, 250, 275, 300, 275, 175];
        var spent = [100, 100, 50, 100, 300, 175, 150, 125, 150];
        var remains = [];
        var over = [];

        for (var i = 0; i < spent.length; i++) {
            remains[i] = budget[i] - spent[i];
            if (remains[i] < 0) {
                over[i] = -remains[i];
                spent[i] = spent[i] + remains[i];
                remains[i] = 0;
            } else {
                over[i] = 0;
            }
        }

        new Chart(myChart, {
            type: 'bar',
            data: {
                datasets: [
                    {
                        label: 'Spent',
                        data: spent,
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
                        ],
                    },
                    {
                        label: 'Remaining',
                        data: remains,
                        backgroundColor: 'rgba(81, 90, 90, 0.5)',
                    },
                    {
                        label: 'Over Budget',
                        data: over,
                        backgroundColor: 'rgba(173, 0, 0, 0.8)',
                    },
                ],
                labels: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4',
                    'Item 5',
                    'Item 6',
                    'Item 7',
                    'Item 8',
                    'Item 9',
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                        },
                    ],
                },
            },
        });
    }

    render() {
        return <canvas className="myChart" ref={this.chartRef} width="400" height="400" />;
    }
}
