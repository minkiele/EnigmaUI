import React from 'react';
import EventEmitter from 'events';
import AbstractReflector, {INITIAL_REFLECTOR_TYPE} from '../Reflector';
import {RE_TYPE_THIN_B, RE_TYPE_THIN_C} from '../../../../Constants';
import {rudimentaryTranslator as trans} from '../../../../Utils';

export default class ThinReflector extends React.Component {

  renderChoices () {
    return [RE_TYPE_THIN_B, RE_TYPE_THIN_C].map((reflector) => {
      return <option key={reflector} value={reflector}>{trans(reflector, this.props.labels)}</option>;
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
  labels: React.PropTypes.object.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

ThinReflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE,
  labels: (function () {
    let labels = {};
    labels[RE_TYPE_THIN_B] = 'Thin B',
    labels[RE_TYPE_THIN_C] = 'Thin C'
    return labels;
  }())
};
