import React from 'react';
import EventEmitter from 'events';
import Button from 'react-bootstrap/lib/Button';

export default class PlugBoardWiring extends React.Component {

  removeWiring () {
    this.props.eventManager.emit('change.plugBoard.removeWiring', this.props.wiring);
  }

  render () {
    return (
      <div className="enigmaPlugBoardWiring clearfix">
        <strong> {this.props.wiring[0]} &hArr; {this.props.wiring[1]} </strong>
        <div className="pull-right">
          <Button bsStyle="danger" onClick={() => { this.removeWiring(); }}>Remove</Button>
        </div>
      </div>
    );
  }

}

PlugBoardWiring.propTypes = {
  wiring: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};
