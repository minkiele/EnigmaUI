import React from 'react';
import ReactDOM from 'react-dom';

let EnigmaUI = React.createClass({
  render: function () {
    return (
      <div className="enigmaUI">
        <EnigmaPlugBoard/>
      </div>
    );
  }
});

let EnigmaPlugBoard = React.createClass({
  getInitialState: function () {
    return {
      wirings: []
    };
  },
  render: function () {

    var wirings = this.state.wirings.map(function (wiring) {
      return <EnigmaPlugBoardWiring wiring={wiring}/>
    });

    return (
      <div className="enigmaPlugBoard">
        <h2>PlugBoard</h2>
        <form>
          <EnigmaPlugBoardWiring leftPlug="" rightPlug="" wiringCallback={this.addWiring} />
        </form>
        {wirings}
      </div>
    );
  },
  addWiring: function (evt) {
    evt.preventDefault();
    console.log('BABAUUU');
  }
});

let EnigmaPlugBoardWiring = React.createClass({
  getInitialState: function () {
    return {
      leftPlug: this.props.leftPlug,
      rightPlug: this.props.rightPlug
    };
  },
  setLeftPlug: function (evt) {
    this.setState({leftPlug: evt.target.value});
  },
  setRightPlug: function (evt) {
    this.setState({rightPlug: evt.target.value});
  },
  updateWirings: function () {
    if(typeof this.props.wiringCallback === 'function') {
      if(this.state.leftPlug.length && this.state.rightPlug.length) {
        this.props.wiringCallback(this.getState());
      }
    }
  },
  render: function () {
    return (
      <div className="enigmaPlugBoardWiring">
        <input type="text" value={this.state.leftPlug} onChange={this.setLeftPlug}/>
        <input type="text" value={this.state.rightPlug} onChange={this.setRightPlug}/>
      </div>
    );
  }
});

ReactDOM.render(<EnigmaUI/>, document.getElementById('app'));
