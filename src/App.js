import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
import AddProject from './Components/AddProject';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount() {
		this.setState({
			projects: [
				{
					title: 'Business Website',
					category: 'Web Design'
				},
				{
					title: 'Social App',
					category: 'Mobile Development'
				},
				{
					title: 'E-Commerce Shopping Cart',
					category: 'Web Design'
				} 
			]	
		})
	}

	handleAddProject(project) {
		let projects = this.state.projects;
		projects.push(project);
		this.setState({ project: projects });
	}

  render() {
    return (
      <div className="App">
				<AddProject addProject={ this.handleAddProject.bind(this) } />
				<Projects projects={ this.state.projects } />
      </div>
    );
  }
}

export default App;
