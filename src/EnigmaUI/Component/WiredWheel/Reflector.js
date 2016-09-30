import React from 'react';

export default React.createClass({

  getInitialState: function () {
    return {
      type: this.props.type || null
    };
  },
  renderChoices: function () {
    var options = [];
    for(var i = 0; i < this.props.choices.length; i += 1) {
      let choice = this.props.choices[i];
      options.push(
        <option key={choice.value} value={choice.value}>
          {choice.label}
        </option>
      );
    }
    return options;
  },
  render: function () {
    let choices = this.renderChoices();
    return (
      <div className="enigmaReflector">
        <div className="enigmaReflectorType">
          <label>Type</label>
          <select value={this.state.type}>
            <option value="">Choose a reflector</option>
            {choices}
          </select>
        </div>
      </div>
    );
  }
});
