import React from 'react';
import EventEmitter from 'events';
import AbstractRotor, {INITIAL_ROTOR_TYPE, INITIAL_RING_POSITION, INITIAL_WINDOW_POSITION} from '../Rotor';
import {RO_TYPE_THIN_BETA, RO_TYPE_THIN_GAMMA, FOURTH_ROTOR} from '../../../../Constants';
import {rudimentaryTranslator as trans} from '../../../../Utils';


export default class ThinRotor extends React.Component {

  renderChoices () {
    return [RO_TYPE_THIN_BETA, RO_TYPE_THIN_GAMMA].map((rotor) => {
      let disabled = this.props.usedRotors.indexOf(rotor) > -1;
      return <option key={rotor} disabled={disabled} value={rotor}>{trans(rotor, this.props.labels)}</option>;
    });
  }

  render () {
    return (
      <AbstractRotor {...this.props} position={FOURTH_ROTOR}>
        {this.renderChoices()}
      </AbstractRotor>
    );
  }
}

ThinRotor.propTypes = {
  type: React.PropTypes.oneOf([RO_TYPE_THIN_BETA, RO_TYPE_THIN_GAMMA, INITIAL_ROTOR_TYPE]).isRequired,
  ringPosition: React.PropTypes.number.isRequired,
  windowLetter: React.PropTypes.string.isRequired,
  labels: React.PropTypes.object.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

ThinRotor.defaultProps = {
  type: INITIAL_ROTOR_TYPE,
  ringPosition: INITIAL_RING_POSITION,
  windowLetter: INITIAL_WINDOW_POSITION,
  labels: (function () {
    let labels = {};
    labels[RO_TYPE_THIN_BETA] = 'Thin Beta',
    labels[RO_TYPE_THIN_GAMMA] = 'Thin Gamma'
    return labels;
  }())
};
