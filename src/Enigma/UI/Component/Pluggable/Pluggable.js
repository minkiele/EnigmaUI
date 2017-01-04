import React from 'react';
import EventEmitter from 'events';
import PluggableWiring from './PluggableWiring';
import Well from 'react-bootstrap/lib/Well';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class Pluggable extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isAdding: false
    };

  }

  render () {

    let wirings = this.props.wirings.map((wiring) => {
      let key = wiring.join('');
      return (
        <ListGroupItem key={key}>
          <PluggableWiring {...this.props} wiring={wiring} index={key} />
        </ListGroupItem>
      );
    });

    let addWiring;

    if(this.props.wirings.length < this.props.maxSize) {
      addWiring = (
        <Well className="pluggableAddWiring">
          <ControlLabel>New Wiring</ControlLabel>
          {this.props.newPluggableWiring}
        </Well>
      );
    }

    return (
      <div className="enigmaPluggable">
        <ListGroup className="enigmaPluggableWirings">
          {wirings}
        </ListGroup>
        {addWiring}
      </div>
    );
  }
}

Pluggable.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  maxSize: React.PropTypes.number.isRequired,
  newPluggableWiring: React.PropTypes.element.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

Pluggable.defaultProps = {
  wirings: [],
  maxSize: 0
};
