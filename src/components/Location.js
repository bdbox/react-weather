import React from "react"

export default class Location extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			zipcode: ''
		}
		
		this.onZipcodeChange = this.onZipcodeChange.bind(this)
		this.onClick = this.onClick.bind(this)
	}
	
	render() {
		return (
			<div>
				<input 
					type="text" 
					placeholder="Enter zipcode or city,state"
					onChange={this.onZipcodeChange}	
					/>
				<button 
					type="button" 
					onClick = {this.onClick} 
				>Get Weather</button>
			</div>
		)
	}
	
	onZipcodeChange(e) {
		let zip = e.target.value
		
		this.setState({
			zipcode: zip
		})
	}
	
	onClick() {
		this.props.onSubmitClick(this.state.zipcode)
		
		this.setState({
			zipcode: ''
		})
	}
}