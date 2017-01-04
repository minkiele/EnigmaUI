import React from 'react';
import EventEmitter from 'events';
import Button from 'react-bootstrap/lib/Button';

export default class PluggableWiring extends React.Component {

  removeWiring () {
    this.props.eventManager.emit(this.props.removeWiringEvent, this.props.wiring);
  }

  render () {
    return (
      <div className="enigmaPluggableWiring clearfix">
        <strong> {this.props.wiring[0]} &hArr; {this.props.wiring[1]} </strong>
        <div className="pull-right">
          <Button bsStyle="danger" onClick={() => { this.removeWiring(); }}>Remove</Button>
        </div>
      </div>
    );
  }

}

PluggableWiring.propTypes = {
  wiring: React.PropTypes.array.isRequired,
  removeWiringEvent: React.PropTypes.string.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

PluggableWiring.defaultProps = {
  removeWiringEvent: 'change.pluggable.removeWiring'
};
