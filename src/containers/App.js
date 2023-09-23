import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';



class App extends Component {
	constructor(){
		super()
		this.state ={
			kitten: [],
	        searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>{this.setState({kitten:users})});
	}

	onSearchChange =(event) => {
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const {kitten, searchfield} = this.state;
			const filteredKitten = kitten.filter(kitten => {
			return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	if (kitten.length === 0){
		return<h1>Loading</h1>
	} else {
	return (
		<div className='tc'>
		<h1 className='f2'>kitten World</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<CardList kitten={filteredKitten}/>
		</ErrorBoundry>
		</Scroll>
		</div>
		);
     }

	}
}

export default App;