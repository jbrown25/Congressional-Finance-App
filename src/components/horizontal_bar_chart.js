import React, {Component} from 'react';
import Chart from 'chart.js';
import {generateKey} from '../utils/index';

export default class HorizontalBarChart extends Component {
	
	componentDidMount(){
		this.renderChart();
	}

	componentDidUpdate(){
		this.renderChart();
	}

	renderChart(){
		const myChart = new Chart(this.horizontal_bar_chart, {
		    type: 'horizontalBar',
		    data: {
		        labels: this.props.bar_labels,
		        datasets: [{
		            label: this.props.data_label,
		            data: this.props.bar_data,
		            backgroundColor: '#1D3557',
		            barThickness: 25
		        }]
		    },
		    options: {
                title:{
                    display:true,
                    text: this.props.chart_title
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                legend: {
                	position: 'right'
                },
                scales: {
                	yAxes: [{
                		barThickness: 40
                	}]
                }
            }
		});	
	}

	render(){
		return (
			<div>
				<canvas ref={(el) => {this.horizontal_bar_chart = el;}} width="400" height="247" key={generateKey()}></canvas>
			</div>
		);
	}
}