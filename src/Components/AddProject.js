import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
	constructor() {
		super();
		this.state = {
			newProject: {}
		}
	}

	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.refs.title.value === '') {
			alert('Title is required!')
		} else {
			this.setState({ newProject: 
				{
					id: uuid.v4(),
					title: this.refs.title.value,
					category: this.refs.category.value
				} 
			}, () => {
				this.props.addProject(this.state.newProject);
			})
		}
	}

	render() {
		let categoryOptions = this.props.categories.map(category => {
			return <option key={ category } value={ category }>{ category }</option>
		})

		return (
			<div>
				<h3>Add Project</h3>
				<form onSubmit={ this.handleSubmit.bind(this) }>
					<div>
						<label htmlFor="title">Title</label><br />
						<input type="text" ref="title" />
					</div>
					<div>
						<label htmlFor="category">Category</label><br />
						<select ref="category">
							{ categoryOptions }
						</select>
					</div>
					<br />
					<input type="submit" value="Submit" />
					<br />
				</form>
			</div>
		);
	}
}

export default AddProject;
