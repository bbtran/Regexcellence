import React from 'react';
import { connect } from 'react-redux';

import { postChallengeInputUpdate } from '../actions/index';

class Difficulty extends React.Component {
	constructor(props) {
		super(props)
		this.updateDifficulty = this.updateDifficulty.bind(this);
  }
	updateDifficulty(event) {
		const inputObject = {
			name: event.target.name,
			value: event.target.value,
		};
		this.props.postChallengeInputUpdate(inputObject);
	}
	render() {
		if (this.props.editable) {
			return (
				<div>
					<h4>Select Difficulty:</h4>
					<select 
						className="form-control"
						onChange={this.updateDifficulty} 
						name="difficulty">;
						<option value="1">1 : very easy</option>
						<option value="2">2 : easy</option>
						<option value="3">3 : medium</option>
						<option value="4">4 : hard</option>
						<option value="5">5 : very hard</option>
					</select>
				</div>
			);
		} else {
			return <h3>{this.props.difficulty}</h3>;
		}
	}
}

export default connect(null, { postChallengeInputUpdate })(Difficulty);