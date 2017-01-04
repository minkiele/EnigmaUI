import React from 'react';
import EventEmitter from 'events';
import AbstractReflector, {INITIAL_REFLECTOR_TYPE} from '../Reflector';
import {RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_D, RE_TYPE_BETA, RE_TYPE_GAMMA} from '../../../../Constants';
import {rudimentaryTranslator as trans} from '../../../../Utils';
import ReflectorD from './Settings/ReflectorD';

export default class Reflector extends React.Component {

  renderChoices () {
    return [RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_D, RE_TYPE_BETA, RE_TYPE_GAMMA].map((reflector) => {
      return <option key={reflector} value={reflector}>{trans(reflector, this.props.labels)}</option>;
    })
  }

  renderReflectorOptions () {
    switch(this.props.type) {
      case RE_TYPE_D:
        return <ReflectorD {...this.props} />;
    }
  }

  render () {
    return (
      <div>
        <AbstractReflector {...this.props}>
          {this.renderChoices()}
        </AbstractReflector>
        {this.renderReflectorOptions()}
      </div>
    );
  }
}

Reflector.propTypes = {
  type: React.PropTypes.oneOf([RE_TYPE_A, RE_TYPE_B, RE_TYPE_C, RE_TYPE_D, RE_TYPE_BETA, RE_TYPE_GAMMA, INITIAL_REFLECTOR_TYPE]).isRequired,
  labels: React.PropTypes.object.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Reflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE,
  labels: (function () {
    let labels = {};
    labels[RE_TYPE_BETA] = 'Beta',
    labels[RE_TYPE_GAMMA] = 'Gamma'
    return labels;
  }())
};
