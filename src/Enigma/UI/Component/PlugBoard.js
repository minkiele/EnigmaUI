import React from 'react';
import EventEmitter from 'events';
import PlugBoardWiring from './PlugBoard/PlugBoardWiring';
import NewPlugBoardWiring from './PlugBoard/NewPlugBoardWiring';
import Well from 'react-bootstrap/lib/Well';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {

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
          <PlugBoardWiring wiring={wiring} index={key} eventManager={this.props.eventManager} />
        </ListGroupItem>
      );
    });

    let addWiring;

    if(this.props.wirings.length < PLUGBOARD_MAX_SIZE) {
      addWiring = (
        <Well className="plugBoardAddWiring">
          <ControlLabel>New Wiring</ControlLabel>
          <NewPlugBoardWiring wirings={this.props.wirings} eventManager={this.props.eventManager} />
        </Well>
      );
    }

    return (
      <div className="enigmaPlugBoard">
        <ListGroup className="enigmaPlugBoardWirings">
          {wirings}
        </ListGroup>
        {addWiring}
      </div>
    );
  }
}

PlugBoard.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

PlugBoard.defaultProps = {
  wirings: []
};
