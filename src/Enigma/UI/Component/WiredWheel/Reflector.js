import React from 'react';
import EventEmitter from 'events';

export const INITIAL_REFLECTOR_TYPE = '';

export default class Reflector extends React.Component {

  updateType (type) {
    this.props.eventManager.emit('change.reflector', type);
  }
  render () {
    return (
      <div className="enigmaReflector">
        <div className="enigmaReflectorType">
          <label>Type</label>
          <select className="form-control" value={this.props.type} onChange={(evt) => { this.updateType(evt.target.value); }}>
            <option value="">Choose a reflector</option>
            {this.props.children}
          </select>
        </div>
      </div>
    );
  }
}

Reflector.propTypes = {
  type: React.PropTypes.string.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Reflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE
};
