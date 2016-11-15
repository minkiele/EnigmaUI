import React from 'react';
import EventEmitter from 'events';

export default class PlugBoardWiring extends React.Component {

  removeWiring () {
    this.props.eventManager.emit('change.plugBoard.removeWiring', this.props.wiring);
  }

  render () {
    return (
      <div className="enigmaPlugBoardWiring clearfix">
        <strong> {this.props.wiring[0]} &hArr; {this.props.wiring[1]} </strong>
        <div className="pull-right">
          <button className="btn btn-danger" onClick={() => { this.removeWiring(); }}>Remove</button>
        </div>
      </div>
    );
  }

}

PlugBoardWiring.propTypes = {
  wiring: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};
