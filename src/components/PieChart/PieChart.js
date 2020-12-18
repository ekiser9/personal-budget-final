import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PieChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChart = this.chartRef.current.getContext('2d');

        new Chart(myChart, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [50, 100, 150, 200, 250, 300, 350, 275, 175],
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
        });
    }

    render() {
        return <canvas className="myChart" ref={this.chartRef} width="400" height="400" />;
    }
}
// var dataSource = {
//   datasets: [
//     {
//       data: [],
//       backgroundColor: [
//         '#ffcd56',
//         '#ff6384',
//         '#36a2eb',
//         '#fd6b19',
//         '#40e350',
//         '#a154ff',
//         '#ff4545',
//       ],
//     },
//   ],
//   labels: [],
// };

// var myBudget = [
//   {
//     title: 'Bread',
//     budget: 25,
//   },
//   {
//     title: 'Rent',
//     budget: 375,
//   },
//   {
//     title: 'Groceries',
//     budget: 110,
//   },
//   {
//     title: 'Entertainment',
//     budget: 50,
//   },
//   {
//     title: 'Gas',
//     budget: 80,
//   },
//   {
//     title: 'Utilities',
//     budget: 100,
//   },
//   {
//     title: 'Car Payment',
//     budget: 250,
//   },
// ];

// function createChart() {
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: dataSource,
//   });
//   return myChart;
// }

// function getBudget() {
//   var res = myBudget;
//   for (var i = 0; i < res.length; i++) {
//     dataSource.datasets[0].data[i] = res[i].budget;
//     dataSource.labels[i] = res[i].title;
//   }
//   createChart();
// }

// function PieChart() {
//   getBudget();

//   return <canvas id="myChart" width="400" height="400"></canvas>;
// }

// export default PieChart;
