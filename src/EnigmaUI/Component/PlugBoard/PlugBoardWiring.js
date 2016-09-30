import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      leftPlug: this.props.initialLeftPlug,
      rightPlug: this.props.initialRightPlug
    };
  },
  setPlug: function (prop, evt) {
    let mutatedState = {};
    mutatedState[prop] = evt.target.value;
    this.setState(mutatedState, () => {
      this.props.updateWiring({
          leftPlug: this.state.leftPlug,
          rightPlug: this.state.rightPlug
      });
    });
  },
  setLeftPlug: function (evt) {
    this.setPlug('leftPlug', evt);
  },
  setRightPlug: function (evt) {
    this.setPlug('rightPlug', evt);
  },
  render: function () {
    return (
      <div className="enigmaPlugBoardWiring">
        <input type="text" maxLength="1" pattern="[A-Z]" value={this.state.leftPlug} onChange={this.setLeftPlug}/>
        <input type="text" maxLength="1" pattern="[A-Z]" value={this.state.rightPlug} onChange={this.setRightPlug}/>
      </div>
    );
  }
});
