import React from 'react';
import EventEmitter from 'events';
import AbstractReflector, {INITIAL_REFLECTOR_TYPE} from '../Reflector';
import {RE_TYPE_THIN_B, RE_TYPE_THIN_C} from '../../../../Constants';

export default class ThinReflector extends React.Component {

  renderChoices () {
    return [RE_TYPE_THIN_B, RE_TYPE_THIN_C].map(function (reflector) {
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

ThinReflector.propTypes = {
  type: React.PropTypes.oneOf([RE_TYPE_THIN_B, RE_TYPE_THIN_C, INITIAL_REFLECTOR_TYPE]).isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

ThinReflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE
};
