import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import Location from './components/Location'
import Forecast from './components/Forecast'
import Details from './components/Details'
import axios  from 'axios'
import {getCurrentWeather, getForecast} from './util/api'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			forecastData: 'init',
			loading: false,
			loaded: false
		}		
		this.onBtnClick = this.onBtnClick.bind(this)
	}
	
	render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="App-intro">
			  <Location onSubmitClick = {this.onBtnClick} />
				  {this.state.loaded === true ? 
				  <Forecast {...this.state} /> : ''
				  }			  
			  
			</div>
		  </div>
		)
	}
  
	onBtnClick(city){
		this.setState({
			loading: true
		})
		
		getForecast(city).then(res => {
			this.setState(() => ({
					loading: false,
					loaded: true,
					forecastData: res
				})
			)
		})				
	}
}

export default App
