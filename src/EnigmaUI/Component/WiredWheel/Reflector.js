import React from 'react';

export const INITIAL_REFLECTOR_TYPE = '';

export default React.createClass({
  getDefaultProps: function () {
    return {
      type: INITIAL_REFLECTOR_TYPE
    };
  },
  getInitialState: function () {
    return {
      type: this.props.type
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
  updateType: function (evt) {
    this.setState({
      type: evt.target.value
    });
  },
  render: function () {
    let choices = this.renderChoices();
    return (
      <div className="enigmaReflector">
        <div className="enigmaReflectorType">
          <label>Type</label>
          <select value={this.state.type} onChange={this.updateType}>
            <option value="">Choose a reflector</option>
            {choices}
          </select>
        </div>
      </div>
    );
  }
});
