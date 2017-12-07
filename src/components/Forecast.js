import React from "react"

export default class Forecast extends React.Component {
	
	render() {
		return this.props.loading === true
		  ? <h1 className='forecast-header'> Loading </h1>
		  : (
			<div>{this.props.forecastData.list.map((item, index) => 
				<li key={index} onClick={()=>{console.log('clicked')}}>{item.deg}</li>
			)}</div>
		)
	}
}