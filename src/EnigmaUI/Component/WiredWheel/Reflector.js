import React from 'react';

export const INITIAL_REFLECTOR_TYPE = '';

export default class Reflector extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      type: this.props.type
    };
    this.updateType = this.updateType.bind(this);
  }
  renderChoices () {
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
  }
  updateType (evt) {
    this.setState({
      type: evt.target.value
    }, () => {
      this.props.updateReflector(this.state);
    });
  }
  render () {
    let choices = this.renderChoices();
    return (
      <div className="enigmaReflector">
        <div className="enigmaReflectorType">
          <label>Type</label>
          <select className="form-control" value={this.state.type} onChange={this.updateType}>
            <option value="">Choose a reflector</option>
            {choices}
          </select>
        </div>
      </div>
    );
  }
}

Reflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE
};
