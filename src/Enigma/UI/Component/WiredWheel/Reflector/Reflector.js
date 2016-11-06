import React from 'react';
import EventEmitter from 'events';
import AbstractReflector, {INITIAL_REFLECTOR_TYPE} from '../Reflector';
import {RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_BETA, RE_TYPE_GAMMA} from '../../../../Constants';

export default class Reflector extends React.Component {

  renderChoices () {
    return [RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_BETA, RE_TYPE_GAMMA].map(function (reflector) {
      return <option key={reflector} value={reflector}>{reflector}</option>;
    })
  }

  render () {
    return (
      <AbstractReflector {...this.props}>
        {this.renderChoices()}
      </AbstractReflector>
    );
  }
}

Reflector.propTypes = {
  type: React.PropTypes.oneOf([RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_BETA, RE_TYPE_GAMMA, INITIAL_REFLECTOR_TYPE]).isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Reflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE
};
