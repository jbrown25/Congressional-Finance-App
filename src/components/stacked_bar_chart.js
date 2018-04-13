import React, {Component} from 'react';
import Chart from 'chart.js';
import {generateKey, formatDollars} from '../utils/index';

export default class StackedBarChart extends Component {

	constructor(props){
		super(props);

		this.state = {
			thing: {}
		}

		this.storeThings = this.storeThings.bind(this);
	}

	storeThings(item){
		this.setState({
			thing: item
		});
	}
	
	componentDidMount(){
		this.renderChart();
	}

	componentDidUpdate(){
		this.renderChart();
	}

	renderChart(){
		const myChart = new Chart(this.stacked_bar_chart, {
		    type: 'bar',
		    data: {
		        labels: this.props.bar_labels,
		        datasets: [{
		            label: this.props.first_data_label,
		            data: this.props.first_data,
		            backgroundColor: '#1D3557'
		        },{
		        	label: this.props.second_data_label,
		        	data: this.props.second_data,
		        	backgroundColor: '#E63946'
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
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: {
                        	autoSkip: false
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                        	autoSkip: false,
                        	callback: function(value, index, values){
                        		return formatDollars(value);
                        	}
                        }
                    }]
                }
            }
		});
	}


	render(){
		return (
			<div>
				<canvas ref={(el) => {this.stacked_bar_chart = el;}} width="400" height="400" key={generateKey()}></canvas>
			</div>
		);
	}
}