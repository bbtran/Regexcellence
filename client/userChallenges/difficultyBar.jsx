import React, { Component } from 'react';

class DifficultyBar extends Component {
  render() {
  	console.log(this.props.difficulty)
    return(
      <div id="difficulty-bar-outer" title="Level">
        <div id="bar-text"><b>LEVEL {this.props.difficulty}</b></div>
        <div id="difficulty-bar-inner" style={this.props.difficultyStyle} />
      </div>
    );
  }

}

export default DifficultyBar;